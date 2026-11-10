/* Test der WS27-Trainer-App:  node test_generators.js [Läufe pro Typ, Standard 2000]
   Lädt den Kern (<script id="core">) aus App.html und prüft jeden Generator gegen eine
   UNABHÄNGIGE Nachrechnung (Brute-Force-Enumeration bzw. zweite Formel), dazu die
   handgeschriebenen Inhalte (Erkennung, Karten, Lernplan) und die Syntax des UI-Skripts. */
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const html=fs.readFileSync(path.join(__dirname,'App.html'),'utf8');
const grab=id=>{const m=html.match(new RegExp('<script id="'+id+'">([\\s\\S]*?)</script>'));if(!m)throw new Error('Script '+id+' fehlt');return m[1];};
const sandbox={module:{exports:{}},console};vm.createContext(sandbox);
vm.runInContext(grab('core'),sandbox,{filename:'core'});
const W=sandbox.module.exports;
new vm.Script(grab('ui'),{filename:'ui'}); // nur Syntaxprüfung
const RUNS=parseInt(process.argv[2]||'2000',10);

/* ---------- unabhängige Hilfsfunktionen ---------- */
const close=(a,b)=>Math.abs(a-b)<=1e-9*Math.max(1,Math.abs(b));
const g2=(a,b)=>{a=Math.abs(a);b=Math.abs(b);let g=0;for(let d=1;d<=Math.max(a,b);d++)if(a%d===0&&b%d===0)g=d;return g||Math.max(a,b);};
const gE=(a,b)=>b?gE(b,a%b):Math.abs(a);
const C=(n,k)=>{if(k<0||k>n)return 0n;const row=[1n];for(let i=1;i<=n;i++){row.push(0n);for(let j=i;j>0;j--)row[j]+=row[j-1];}return row[k];};
const F=n=>{let r=1n;for(let i=2n;i<=BigInt(n);i++)r*=i;return r;};
const powNaive=(b,e,m)=>{let r=1n;b=BigInt(b)%BigInt(m);for(let i=0;i<e;i++)r=r*b%BigInt(m);return Number(r);};
const prime=n=>{if(n<2)return false;for(let i=2;i<n;i++)if(n%i===0)return false;return true;};
function tuples(n,k,cb){const t=Array(k).fill(0);for(;;){cb(t);let i=k-1;while(i>=0&&t[i]===n-1){t[i]=0;i--;}if(i<0)return;t[i]++;}}
function perms(n,cb){const a=[...Array(n).keys()];const rec=i=>{if(i===n){cb(a);return;}for(let j=i;j<n;j++){[a[i],a[j]]=[a[j],a[i]];rec(i+1);[a[i],a[j]]=[a[j],a[i]];}};rec(0);}
function distinctStrings(w,cb){const c={};for(const ch of w)c[ch]=(c[ch]||0)+1;const ks=Object.keys(c);const cur=[];const rec=()=>{if(cur.length===w.length){cb(cur);return;}for(const k of ks)if(c[k]>0){c[k]--;cur.push(k);rec();cur.pop();c[k]++;}};rec();}
const binDist=(n,p)=>{let d=[1];for(let i=0;i<n;i++){const e=Array(d.length+1).fill(0);d.forEach((x,k)=>{e[k]+=x*(1-p);e[k+1]+=x*p;});d=e;}return d;};
function hyperDist(N,r,m){let st=new Map([['0',1]]);for(let i=0;i<m;i++){const nx=new Map();for(const[k,pr]of st){const g=+k;const good=r-g,bad=N-r-(i-g),left=N-i;if(good>0)nx.set(String(g+1),(nx.get(String(g+1))||0)+pr*good/left);if(bad>0)nx.set(String(g),(nx.get(String(g))||0)+pr*bad/left);}st=nx;}const d=[];for(const[k,pr]of st)d[+k]=pr;for(let i=0;i<=m;i++)d[i]=d[i]||0;return d;}
const post=(pri,lik)=>{const j=pri.map((p,i)=>p*lik[i]);const s=j.reduce((a,b)=>a+b,0);return{tot:s,post:j.map(x=>x/s)};};
const cache=new Map();const memo=(key,fn)=>{if(!cache.has(key))cache.set(key,fn());return cache.get(key);};
const V=p=>p.fields.map(f=>f.value);
const A=(cond,msg)=>{if(!cond)throw new Error(msg||'Invariante verletzt');};

/* ---------- Prüfer je Typ ---------- */
const CHECK={
K1(p){const m=p.meta,[ans]=V(p);
  if(m.v==='groups'){A(BigInt(ans)===F(m.g)*m.s.reduce((a,x)=>a*F(x),1n));return;}
  if(m.v==='altern'){const n=2*m.m;const c=memo('alt'+n,()=>{let k=0;perms(n,a=>{let ok=true;for(let i=1;i<n;i++)if((a[i]<m.m)===(a[i-1]<m.m)){ok=false;break;}if(ok)k++;});return k;});A(ans===c);return;}
  const c=memo('w'+m.v+m.w+(m.ch||''),()=>{let k=0;distinctStrings(m.w,s=>{if(m.v==='plain')k++;else if(m.v==='start'){if(s[0]===m.ch)k++;}else{const str=s.join('');const cnt=str.split(m.ch).length-1;if(str.includes(m.ch.repeat(cnt)))k++;}});return k;});
  A(ans===c,`K1 ${m.v} ${m.w} ${m.ch}: ${ans} vs ${c}`);},
K2(p){const{cell,n,k}=p.meta,[ans]=V(p);let ref;
  if(Math.pow(n,k)<=60000)ref=memo('k2'+cell+n+'_'+k,()=>{const set=new Set();tuples(n,k,t=>{const distinct=new Set(t).size===k;if(cell==='vmw')set.add(t.join());else if(cell==='vow'){if(distinct)set.add(t.join());}else if(cell==='kow'){if(distinct)set.add(t.slice().sort((a,b)=>a-b).join());}else set.add(t.slice().sort((a,b)=>a-b).join());});return BigInt(set.size);});
  else ref=cell==='vmw'?BigInt(n)**BigInt(k):cell==='vow'?F(n)/F(n-k):cell==='kow'?C(n,k):C(n+k-1,k);
  A(BigInt(ans)===ref,`K2 ${cell} ${n},${k}`);},
K3(p){const m=p.meta,[ans]=V(p);
  const sub=(N,k,pred)=>{let c=0;for(let mask=0;mask<(1<<N);mask++){let b=0;for(let x=mask;x;x&=x-1)b++;if(b===k&&pred(mask))c++;}return c;};
  const cnt=(mask,from,len)=>{let c=0;for(let i=from;i<from+len;i++)if(mask>>i&1)c++;return c;};
  const ref=memo('k3'+JSON.stringify(m),()=>{
    if(m.v==='pflicht')return sub(m.n,m.k,x=>cnt(x,0,m.m)===m.m);
    if(m.v==='nichtbeide')return sub(m.n,m.k,x=>cnt(x,0,2)<2);
    if(m.v==='exact')return sub(m.f+m.m,m.a+m.b,x=>cnt(x,0,m.f)===m.a);
    if(m.v==='atleast1')return sub(m.r+m.b,m.k,x=>cnt(x,0,m.r)>=1);
    if(m.v==='atleastJ')return sub(m.f+m.m,m.k,x=>cnt(x,0,m.f)>=m.j);
    if(m.v==='gleich3')return sub(m.r+m.b,4,x=>{const r=cnt(x,0,m.r);return r===3||r===1;});
    throw new Error('K3 Variante '+m.v);});
  A(ans===ref,`K3 ${JSON.stringify(m)}: ${ans} vs ${ref}`);},
K4(p){const m=p.meta,[ans]=V(p);let ref;
  if(m.v==='div2'||m.v==='div3'||m.v==='none3'){let c=0;for(let x=1;x<=m.N;x++)if(m.ds.some(d=>x%d===0))c++;ref=m.none?m.N-c:c;}
  else if(m.v==='sets2'){const onlyA=m.A-m.both,onlyB=m.B-m.both,none=m.T-onlyA-onlyB-m.both;A(none>=0);ref=m.q==='min1'?onlyA+onlyB+m.both:m.q==='genau1'?onlyA+onlyB:none;}
  else if(m.v==='sets3'){const u=m.r.slice(0,7).reduce((a,b)=>a+b,0);ref=m.none?m.r[7]:u;}
  else if(m.v==='rev3')ref=m.r[6];
  else if(m.v==='derange'){const d=memo('der'+m.n,()=>{let c=0;perms(m.n,a=>{if(a.every((x,i)=>x!==i))c++;});return c;});ref=m.asP?d/Number(F(m.n)):d;}
  else if(m.v==='passwort'){let s=0n;for(let j=1;j<m.k;j++)s+=C(m.k,j)*10n**BigInt(j)*26n**BigInt(m.k-j);ref=Number(s);}
  else if(m.v==='words')ref=memo('wd'+m.s+'_'+m.k,()=>{let c=0;tuples(m.s,m.k,t=>{if(t.includes(0)&&t.includes(1))c++;});return c;});
  else throw new Error('K4 Variante '+m.v);
  A(close(ans,ref),`K4 ${JSON.stringify(m)}: ${ans} vs ${ref}`);
  if(m.v==='sets3'||m.v==='rev3'){const r=m.r;const nums=(p.prompt.match(/\d+/g)||[]).map(Number);[r[0]+r[3]+r[4]+r[6],r[3]+r[6]].forEach(x=>A(nums.includes(x),'K4 Zahlen im Text'));}},
K5(p){const m=p.meta,[ans]=V(p);
  if(m.v==='socks')A(ans-1===m.c*(m.k-1));
  else if(m.v==='pairsum'){if(m.m<=7){const N=2*m.m;const best=memo('ps'+m.m,()=>{let b=0;for(let mask=0;mask<(1<<N);mask++){let ok=true,c=0;for(let i=0;i<N&&ok;i++)if(mask>>i&1){c++;if(mask>>(N-1-i)&1)ok=false;}if(ok&&c>b)b=c;}return b;});A(ans===best+1);}else A(ans===m.m+1);}
  else if(m.v==='period')A(ans-1===m.n*(m.k-1));
  else if(m.v==='ceil'){A(m.n*ans>=m.m&&m.n*(ans-1)<m.m);}
  else throw new Error('K5 Variante '+m.v);},
K6(p){const m=p.meta,[ans]=V(p);
  if(m.v==='coeff'){let poly=[1n];for(let i=0;i<m.n;i++){const q=Array(poly.length+1).fill(0n);poly.forEach((c,j)=>{q[j]+=c*BigInt(m.a);q[j+1]+=c*BigInt(m.b);});poly=q;}A(BigInt(ans)===poly[m.k],'K6 coeff');}
  else if(m.v==='multi'){const n=m.i+m.j+m.l;A(BigInt(ans)===C(n,m.i)*C(n-m.i,m.j));}
  else if(m.v==='paths'){const g=[];for(let i=0;i<=m.a;i++){g.push([]);for(let j=0;j<=m.b;j++)g[i][j]=(i===0||j===0)?1:g[i-1][j]+g[i][j-1];}A(ans===g[m.a][m.b]);}
  else if(m.v==='klink'){A(ans===m.n&&p.prompt.includes(String(m.n*(m.n-1)/2)));}
  else if(m.v==='cnn2')A(BigInt(ans)===C(m.n,m.n-m.d));
  else if(m.v==='karten'){let r=1n;for(let i=0;i<m.s;i++)r*=C(m.s*m.c-i*m.c,m.c);A(BigInt(ans)===r);}
  else if(m.v==='subsets'){let r=1;for(let i=0;i<m.n;i++)r*=2;A(ans===r);}
  else throw new Error('K6 Variante '+m.v);},
W1(p){const m=p.meta,[ans]=V(p);let ref;
  const dice=(n,pred)=>memo('d'+n+pred.toString(),()=>{let c=0,t=0;tuples(6,n,x=>{t++;if(pred(x.map(v=>v+1)))c++;});return c/t;});
  if(m.v==='sum'){let c=0;for(let a=1;a<=6;a++)for(let b=1;b<=6;b++)if(a+b===m.s)c++;ref=c/36;}
  else if(m.v==='atleast')ref=dice(m.n,x=>x.includes(1));
  else if(m.v==='ass'){const d=hyperDist(32,4,m.m);ref=m.q==='genau1'?d[1]:m.q==='min1'?1-d[0]:d[0];}
  else if(m.v==='word'){ref=1;for(let i=0;i<m.k;i++)ref*=(m.s-i)/m.s;if(Math.pow(m.s,m.k)<=20000){let c=0,t=0;tuples(m.s,m.k,x=>{t++;if(new Set(x).size===m.k)c++;});A(close(ref,c/t));}}
  else if(m.v==='bits'){let c=0,t=0;tuples(2,m.n,x=>{t++;if(x.filter(v=>v===0).length===m.k)c++;});ref=c/t;}
  else if(m.v==='prod5')ref=dice(m.n,x=>x.reduce((a,b)=>a*b,1)%5===0);
  else if(m.v==='last5')ref=dice(m.n,x=>x.reduce((a,b)=>a*b,1)%10===5);
  else throw new Error('W1 Variante '+m.v);
  A(close(ans,ref),`W1 ${JSON.stringify(m)}: ${ans} vs ${ref}`);},
W2(p){const m=p.meta,[ans]=V(p);
  const ref=memo('w2'+JSON.stringify(m),()=>{let c=0,t=0;tuples(m.k,m.n,x=>{t++;const d=new Set(x).size;let ok;
    if(m.v==='once')ok=d===1;else if(m.v==='alldiff')ok=d===m.n;else if(m.v==='birthday')ok=d<m.n;else if(m.v==='together')ok=x[0]===x[1];
    else if(m.v==='alone')ok=x.slice(1).every(v=>v!==x[0]);else if(m.v==='exact2')ok=d===2;
    else if(m.v==='two22'){ok=d===2&&x.filter(v=>v===x[0]).length===2;}else throw new Error('W2 Variante '+m.v);
    if(ok)c++;});return c/t;});
  A(close(ans,ref),`W2 ${JSON.stringify(m)}: ${ans} vs ${ref}`);},
W3(p){const m=p.meta,[ans]=V(p);let ref;
  if(m.v==='same2'){const N=m.cnt.reduce((a,b)=>a+b,0);ref=m.cnt.reduce((a,c)=>a+c/N*(c-1)/(N-1),0);}
  else{const d=hyperDist(m.N,m.r,m.m);A(close(d.reduce((a,b)=>a+b,0),1));ref=m.v==='exact'?d[m.k]:m.v==='min1'?1-d[0]:d.reduce((a,x,k)=>a+k*x,0);}
  A(close(ans,ref),`W3 ${JSON.stringify(m)}: ${ans} vs ${ref}`);},
W4(p){const m=p.meta,[ans]=V(p);let ref;
  if(m.v==='test')ref=post([m.pa,1-m.pa],[m.s,m.f]).post[0];
  else if(m.v==='total')ref=post([m.pa,1-m.pa],[m.s,m.f]).tot;
  else if(m.v==='neg')ref=post([m.pa,1-m.pa],[1-m.s,1-m.f]).post[1];
  else if(m.v==='lief3'){const r=post(m.sh.map(x=>x/100),m.d.map(x=>x/100));ref=m.ask==='total'?r.tot:r.post[m.i];}
  else if(m.v==='coins')ref=post([1/3,1/3,1/3],m.nums.map(x=>x/m.den)).post[m.i];
  else if(m.v==='urnen')ref=post([.5,.5],[m.r1/(m.r1+m.b1),m.r2/(m.r2+m.b2)]).post[0];
  else throw new Error('W4 Variante '+m.v);
  A(close(ans,ref),`W4 ${JSON.stringify(m)}: ${ans} vs ${ref}`);},
W5(p){const m=p.meta,[ans]=V(p);const n=m.ps.length;let ref=0;
  for(let mask=0;mask<(1<<n);mask++){let pr=1,h=0;for(let i=0;i<n;i++){if(mask>>i&1){pr*=m.ps[i];h++;}else pr*=1-m.ps[i];}
    if((m.v==='min1'||m.v==='union')&&h>=1)ref+=pr;if(m.v==='alle'&&h===n)ref+=pr;if(m.v==='genau1'&&h===1)ref+=pr;}
  A(['min1','union','alle','genau1'].includes(m.v));A(close(ans,ref),`W5 ${JSON.stringify(m)}`);},
V1(p){const m=p.meta,v=V(p);const d=binDist(m.n,m.p);A(close(d.reduce((a,b)=>a+b,0),1));const sum=(a,b)=>d.slice(a,b+1).reduce((x,y)=>x+y,0);
  if(m.v==='EV'){const E=d.reduce((a,x,k)=>a+k*x,0),E2=d.reduce((a,x,k)=>a+k*k*x,0);A(close(v[0],E)&&close(v[1],E2-E*E),'V1 EV');}
  else if(m.v==='exact')A(close(v[0],d[m.k]));else if(m.v==='atmost')A(close(v[0],sum(0,m.k)));else if(m.v==='atleast')A(close(v[0],sum(m.k,m.n)));
  else if(m.v==='half'){let s=0;d.forEach((x,k)=>{if(2*k>m.n)s+=x;});A(close(v[0],s),'V1 half');}else throw new Error('V1 Variante '+m.v);},
V2(p){const m=p.meta,[n]=V(p);const f=k=>1-Math.pow(1-m.p,k);const ok=k=>m.strict?f(k)>m.s:f(k)>=m.s;A(ok(n)&&!ok(n-1),`V2 ${JSON.stringify(m)} n=${n}`);A(Math.abs(f(n)-m.s)>1e-7&&Math.abs(f(n-1)-m.s)>1e-7,'V2 Grenzfall');},
V3(p){const m=p.meta,v=V(p);const n=m.nA+m.nB;let win=0,tie=0;
  for(let mask=0;mask<(1<<n);mask++){let pr=1,x=0,y=0;for(let i=0;i<n;i++){const hit=mask>>i&1;if(i<m.nA){pr*=hit?m.pA:1-m.pA;x+=hit;}else{pr*=hit?m.pB:1-m.pB;y+=hit;}}
    if(m.sA+x>m.sB+y)win+=pr;else if(m.sA+x===m.sB+y)tie+=pr;}
  A(close(v[0],win),`V3 ${JSON.stringify(m)}: ${v[0]} vs ${win}`);if(m.askTie)A(close(v[1],tie),'V3 Gleichstand');A(win>0.02&&win<0.98);},
V4(p){const m=p.meta,v=V(p);
  const distOf=(n,k,fn)=>memo('v4'+m.v+n+'_'+k+(m.w||'')+(m.isMin?'min':''),()=>{const d={};let t=0;tuples(n,k,x=>{t++;const val=fn(x);d[val]=(d[val]||0)+1;});for(const key in d)d[key]/=t;return d;});
  const mom=d=>{let E=0,E2=0,s=0;for(const k in d){E+=k*d[k];E2+=k*k*d[k];s+=d[k];}A(close(s,1),'Σ P = 1');return[E,E2-E*E];};
  if(m.v==='table'){const d={};m.xs.forEach((x,i)=>d[x]=m.num[i]/m.D);const[E,Va]=mom(d);A(close(v[0],E)&&close(v[1],Va),'V4 table');}
  else if(m.v==='minmax'){const d=distOf(6,2,x=>(m.isMin?Math.min(x[0],x[1]):Math.max(x[0],x[1]))+1);if(m.askE)A(close(v[0],mom(d)[0]));else A(close(v[0],d[m.k]));}
  else if(m.v==='jaeger'){const d=distOf(m.n,3,x=>new Set(x).size);const[E,Va]=mom(d);
    if(m.w==='p2E')A(close(v[0],d[2])&&close(v[1],E));else if(m.w==='p3V')A(close(v[0],d[3]||0)&&close(v[1],Va));else A(close(v[0],d[1])&&close(v[1],E));}
  else if(m.v==='hash'){const d=distOf(m.n,m.m,x=>{if(m.w==='occ')return new Set(x).size;const c={};x.forEach(z=>c[z]=(c[z]||0)+1);return Object.values(c).filter(z=>z===1).length;});A(close(v[0],mom(d)[0]),`V4 hash ${JSON.stringify(m)}`);}
  else if(m.v==='sum'){const d=distOf(m.s,2,x=>x[0]+x[1]+2);A(close(v[0],d[m.t]||0)&&close(v[1],mom(d)[0]),'V4 sum');}
  else if(m.v==='fix'){const d=memo('fix'+m.n,()=>{const dd={};let t=0;perms(m.n,a=>{t++;const f=a.filter((x,i)=>x===i).length;dd[f]=(dd[f]||0)+1;});for(const k in dd)dd[k]/=t;return dd;});A(close(v[0],d[0])&&close(v[1],mom(d)[0]),'V4 fix');}
  else if(m.v==='suche'){const d={};for(let k=1;k<=m.n;k++)d[k]=1/m.n;const[E,Va]=mom(d);A(close(v[0],E)&&close(v[1],Va));}
  else if(m.v==='match'){const d=memo('match',()=>{const dd={};tuples(2,5,x=>{let w=[0,0],len=0;for(let i=0;i<5;i++){w[x[i]]++;len=i+1;if((i>0&&x[i]===x[i-1])||w[x[i]]===3)break;}dd[len]=(dd[len]||0)+1/32;});return dd;});A(close(v[0],d[m.ask])&&close(v[1],mom(d)[0]),'V4 match');}
  else throw new Error('V4 Variante '+m.v);},
V5(p){const m=p.meta,[ans]=V(p);let ref;
  if(m.v.startsWith('geo')){const pm=k=>Math.pow(1-m.p,k-1)*m.p;let s=0;
    if(m.v==='geoK')ref=pm(m.k);else if(m.v==='geoGt'){for(let k=1;k<=m.k;k++)s+=pm(k);ref=1-s;}else if(m.v==='geoLe'){for(let k=1;k<=m.k;k++)s+=pm(k);ref=s;}
    else{for(let k=1;k<4000;k++)s+=k*pm(k);ref=s;}}
  else{const t=[];let x=1;for(let k=0;k<80;k++){t.push(x);x*=m.lam/(k+1);}const Z=t.reduce((a,b)=>a+b,0);A(close(Z,Math.exp(m.lam)));
    ref=m.v==='pois0'?t[0]/Z:m.v==='pois1'?1-t[0]/Z:t[m.k]/Z;}
  A(Math.abs(ans-ref)<1e-7,`V5 ${JSON.stringify(m)}: ${ans} vs ${ref}`);},
V6(p){const m=p.meta,v=V(p);const integ=(f,a,b)=>{const n=20000,h=(b-a)/n;let s=0;for(let i=0;i<n;i++)s+=f(a+(i+.5)*h);return s*h;};const eq=(a,b)=>Math.abs(a-b)<1e-5*Math.max(1,Math.abs(b));
  if(m.v==='unif'){const f=()=>1/(m.b-m.a);const E=integ(x=>x*f(),m.a,m.b),E2=integ(x=>x*x*f(),m.a,m.b);A(eq(v[0],E)&&eq(v[1],E2-E*E));return;}
  const Cn=1/integ(x=>Math.pow(x,m.a),0,m.b);const f=x=>Cn*Math.pow(x,m.a);const E=integ(x=>x*f(x),0,m.b),E2=integ(x=>x*x*f(x),0,m.b);
  if(m.v==='CE')A(eq(v[0],Cn)&&eq(v[1],E),'V6 CE');else if(m.v==='Var')A(eq(v[0],E)&&eq(v[1],E2-E*E),'V6 Var');
  else if(m.v==='P'){const Fc=integ(f,0,m.c);A(eq(v[0],m.more?1-Fc:Fc),'V6 P');}else throw new Error('V6 Variante '+m.v);},
Z1(p){const m=p.meta,v=V(p);const g=g2(m.a,m.b);A(v[0]===g,'Z1 ggT');
  if(m.v==='ggt')return;
  if(m.v==='bezout'){A(m.a*v[1]+m.b*v[2]===g,'Z1 Bezout');A(p.fields[1].check([g,v[1],v[2]])&&!p.fields[1].check([g,v[1]+1,v[2]]),'Z1 Prüffunktion');return;}
  A((m.c%g===0)===m.solv&&v[1]===(m.solv?1:0),'Z1 Lösbarkeit');
  if(m.solv){A(m.a*v[2]+m.b*v[3]===m.c,'Z1 Lösung');A(p.fields[2].check([g,1,v[2],v[3]])&&!p.fields[2].check([g,1,v[2],v[3]+1]));}},
Z2(p){const m=p.meta,v=V(p);
  if(m.v==='inv'){A(v[0]>0&&v[0]<m.m&&(m.a*v[0])%m.m===1,'Z2 inv');return;}
  const sols=[];for(let x=0;x<m.m;x++)if((m.a*x-m.b)%m.m===0)sols.push(x);
  A(v[0]===sols.length&&v[1]===(sols.length?sols[0]:0),`Z2 cong ${JSON.stringify(m)}: ${v} vs ${sols}`);},
Z3(p){const m=p.meta,[ans]=V(p);
  if(m.v==='phi'){let c=0;for(let x=1;x<=m.n;x++)if(gE(x,m.n)===1)c++;A(ans===c,'Z3 phi '+m.n);return;}
  A(gE(m.a,m.m)===1,'Z3 teilerfremd');A(ans===powNaive(m.a,m.e,m.m),`Z3 ${JSON.stringify(m)}`);},
Z4(p){const m=p.meta,v=V(p);
  if(m.v==='pq'){A(prime(v[0])&&prime(v[1])&&v[0]<v[1]&&v[0]*v[1]===m.n&&(v[0]-1)*(v[1]-1)===m.ph,'Z4 pq');A(p.prompt.includes(String(m.n))&&p.prompt.includes(String(m.ph)));return;}
  const R=m.R;A(prime(R.p)&&prime(R.q)&&R.p!==R.q&&R.n===R.p*R.q&&R.ph===(R.p-1)*(R.q-1),'Z4 Setup');
  A((R.e*R.d)%R.ph===1&&gE(R.e,R.ph)===1,'Z4 e·d mod φ = 1');A(powNaive(R.m,R.e,R.n)===R.c,'Z4 m^e = c');A(powNaive(R.c,R.d,R.n)===R.m,'Z4 c^d = m');A(R.m>1&&R.m<R.n&&R.d<R.ph&&R.e<R.ph,'Z4 Bereiche '+JSON.stringify(R));
  if(m.v==='enc')A(v[0]===R.c);else if(m.v==='dec')A(v[0]===R.d&&v[1]===R.m);
  else if(m.v==='echoice'){A(v[0]===R.e&&v[1]===R.d&&v[2]===R.m);A(m.cands.filter(x=>gE(x,R.ph)===1).length===1&&new Set(m.cands).size===3,'Z4 genau ein zulässiges e');}
  else throw new Error('Z4 Variante '+m.v);},
Z5(p){const m=p.meta,v=V(p);const md=(x,n)=>((x%n)+n)%n;const enc=w=>w.split('').map(ch=>String.fromCharCode(65+md(m.a*(ch.charCodeAt(0)-65)+m.b,26))).join('');
  A(gE(m.a,26)===1,'Z5 Schlüssel');
  if(m.v==='enc')A(v[0]===enc(m.w));else if(m.v==='dec')A(v[0]===m.w&&enc(m.w)===m.ct&&p.prompt.includes(m.ct));
  else if(m.v==='key'){A(v[0]===m.a&&v[1]===m.b&&md(m.a*m.x1+m.b,26)===m.y1&&md(m.a*m.x2+m.b,26)===m.y2);
    let n=0;for(let a=0;a<26;a++)for(let b=0;b<26;b++)if(gE(a,26)===1&&md(a*m.x1+b,26)===m.y1&&md(a*m.x2+b,26)===m.y2)n++;A(n===1,'Z5 Schlüssel eindeutig');}
  else throw new Error('Z5 Variante '+m.v);},
Z6(p){const m=p.meta,v=V(p);const sh=(w,ks,s)=>w.split('').map((ch,i)=>String.fromCharCode(65+(((ch.charCodeAt(0)-65+s*ks[i%ks.length])%26)+26)%26)).join('');
  if(m.v==='cKey'){A(v[0]===m.k&&p.prompt.includes(String.fromCharCode(65+m.x))&&p.prompt.includes(String.fromCharCode(65+(m.x+m.k)%26)));return;}
  const ks=m.key?m.key.split('').map(c=>c.charCodeAt(0)-65):[m.k];A(sh(m.w,ks,1)===m.ct&&sh(m.ct,ks,-1)===m.w,'Z6 hin und zurück');
  if(m.v==='cEnc'||m.v==='vEnc')A(v[0]===m.ct);else if(m.v==='cDec'||m.v==='vDec')A(v[0]===m.w);else throw new Error('Z6 Variante '+m.v);},
Z7(p){const m=p.meta,v=V(p);const al=powNaive(m.g,m.a,m.p),be=powNaive(m.g,m.b,m.p),K=powNaive(be,m.a,m.p);A(K===powNaive(al,m.b,m.p)&&K===powNaive(m.g,m.a*m.b,m.p),'Z7 Schlüssel');
  if(m.short)A(v[0]===K&&p.prompt.includes('α = '+al));else A(v[0]===al&&v[1]===be&&v[2]===K);},
};

/* ---------- Läufe ---------- */
let fail=0;const t0=Date.now();
console.log(`WuK Trainer WS27 — Generator-Test (${RUNS} Läufe pro Typ)\n`);
for(const t of W.TYPES){
  const variants=new Set();let err=null,i=0;
  try{
    A(typeof W.GEN[t.key]==='function','Generator fehlt');A(typeof CHECK[t.key]==='function','Prüfer fehlt');
    for(i=0;i<RUNS;i++){
      const p=W.GEN[t.key]();
      A(p.key===t.key&&p.prompt&&p.solution&&p.fields.length>0,'Struktur');
      A(W.MODELS[p.m],'Modell-ID unbekannt: '+p.m);
      A(!/undefined|NaN|Infinity|\[object/.test(p.prompt+p.solution+p.title),'undefined/NaN im Text: '+p.prompt);
      A(p.solution.startsWith('<b>Erkennung:</b>'),'Erkennungszeile fehlt');
      const shown=p.fields.map(f=>W.fieldShow(f));
      p.fields.forEach((f,j)=>{if(f.kind==='int'||f.kind==='prob')A(Number.isFinite(f.value),'Feldwert nicht endlich');
        A(W.checkField(f,shown[j],shown),`eigene Lösung wird nicht akzeptiert: ${f.label} ${shown[j]} (Wert ${f.value}) — ${p.prompt}`);
        if(f.kind==='int'&&!f.check)A(Number.isInteger(f.value)&&!W.checkField(f,String(f.value+1),shown),'falsche Antwort akzeptiert');
        if(f.kind==='prob'&&f.value>0.02)A(!W.checkField(f,String(f.value*1.1),shown)&&W.checkField(f,String(f.value).replace('.',','),shown),'Toleranz');});
      CHECK[t.key](p);variants.add(p.meta.v||p.meta.cell||(p.meta.short?'kurz':'std'));
    }
  }catch(e){err=e;}
  if(err){fail++;console.log(`✗ ${t.key} ${t.name}: FEHLER in Lauf ${i}: ${err.message}`);}
  else console.log(`✓ ${t.key} ${t.name.padEnd(34)} ${RUNS} Läufe · ${variants.size} Varianten`);
}

/* ---------- Inhalte ---------- */
function section(name,fn){try{const r=fn();console.log(`✓ ${name}${r?' — '+r:''}`);}catch(e){fail++;console.log(`✗ ${name}: ${e.message}`);}}
console.log('');
section('Erkennungs-Pool',()=>{A(W.RECOG.length>=70,'weniger als 70');const types=new Set(W.TYPES.map(t=>t.key));const cover=new Set();
  W.RECOG.forEach((r,i)=>{A(types.has(r.t),'Typ '+r.t+' @'+i);A(W.MODELS[r.m],'Modell '+r.m+' @'+i);A(r.q&&r.a,'Text fehlt @'+i);cover.add(r.t);
    if(r.o){A(r.o.length===3&&r.o.every(m=>W.MODELS[m]&&m!==r.m),'Optionen @'+i);}else A((W.CONF[r.m]||[]).filter(m=>m!==r.m&&W.MODELS[m]).length>=3,'Verwechsler @'+i);});
  types.forEach(t=>A(cover.has(t),'kein Erkennungstext für '+t));Object.keys(W.MODELS).forEach(m=>A(W.CONF[m]&&W.CONF[m].every(x=>W.MODELS[x]),'CONF '+m));
  return W.RECOG.length+' Texte, alle '+types.size+' Typen abgedeckt';});
section('Karteikarten',()=>{A(W.DECK.length>=70);W.DECK.forEach((c,i)=>A(c.q&&c.a&&'KWVZT'.includes(c.c),'Karte '+i));return W.DECK.length+' Karten';});
section('Lernplan',()=>{const P=W.PLAN;A(P.length===11);const types=new Set(W.TYPES.map(t=>t.key));const seen=new Set();
  P.forEach((w,i)=>{const a=new Date(...w.from),b=new Date(...w.to);A(b>a,'Woche '+w.id);if(i>0){const prev=new Date(...P[i-1].to);A(Math.round((a-prev)/86400000)===1,'Lücke vor '+w.id);}w.types.forEach(t=>{A(types.has(t),t);seen.add(t);});});
  types.forEach(t=>A(seen.has(t),'Typ '+t+' fehlt im Plan'));A(new Date(...P[0].from).getDay()===2&&new Date(...P[10].to).getDay()===0,'Wochentage');
  return '10.11.2026 – 24.01.2027 lückenlos, alle Typen eingeplant';});
section('Klausur-Zusammenstellung',()=>{for(let i=0;i<2000;i++){const s=W.examSet();A(s.length===7&&s.every(k=>W.GEN[k]));A(s.some(k=>k==='K4'||k==='K2')&&s.some(k=>k[0]==='V')&&s.some(k=>k==='Z4'||k==='Z2')&&s.some(k=>k[0]==='W'));}return '7 Aufgaben, Pflichtblöcke immer enthalten';});
section('Eingabe-Parser',()=>{const pn=W.parseNum;A(close(pn('13/28'),13/28)&&close(pn('0,464'),0.464)&&close(pn('46,4 %'),0.464)&&pn('−33')===-33&&pn(' 12 ')===12&&Number.isNaN(pn(''))&&Number.isNaN(pn('abc')));
  A(W.parseYN('Ja')===1&&W.parseYN('nein')===0&&Number.isNaN(W.parseYN('?')));A(W.checkField({kind:'text',value:'HAUS'},' haus ',[]));
  A(!W.checkField({kind:'prob',value:0.0012},'0',[])&&W.checkField({kind:'prob',value:0.4213},'0,42',[])&&!W.checkField({kind:'prob',value:0.4213},'0,45',[]));});
section('Mathe-Kern',()=>{for(let i=0;i<3000;i++){const a=W.RI(2,2000),b=W.RI(2,2000);const[g,x,y]=W.egcd(a,b);A(g===gE(a,b)&&a*x+b*y===g,'egcd');
    const t=W.tableau(a,b);t.forEach(r=>A(r.x*a+r.y*b===r.r,'Tableau-Zeile'));const m=W.RI(2,999),e=W.RI(0,300);A(W.powmod(a,e,m)===powNaive(a,e,m),'powmod');
    const inv=W.modinv(a,m);if(gE(a,m)===1&&m>1&&a%m!==0)A((a%m)*inv%m===1,'modinv');else A(inv===null||m===1||(a%m)*inv%m===1);}
  for(let n=1;n<=300;n++){let c=0;for(let x=1;x<=n;x++)if(gE(x,n)===1)c++;A(W.phi(n)===c,'phi '+n);}
  for(let n=0;n<=30;n++)for(let k=0;k<=n;k++)A(BigInt(W.comb(n,k))===C(n,k),'comb');A(W.derange(4)===9&&W.derange(5)===44&&W.derange(3)===2);});
section('Handgeschriebene Zahlen (Erkennung, Karten, Spicker)',()=>{
  const cb=(n,k)=>Number(C(n,k));let n=0;const T=(c,m)=>{n++;A(c,'Zahl falsch: '+m);};
  T(cb(14,3)===364,'Eis 12 Sorten');T(cb(12,3)===220,'Eis SS26');T(cb(10,7)===120,'Flyer');T(cb(12,8)===495,'Brötchen');T(3**5===243,'Briefe');T(9*9*8*7===4536,'vierstellig');T(cb(8,2)===28,'Domino');
  T(Number(F(8)/F(3))===6720,'Regal');T(Number(F(9)/(2n*6n*2n))===15120,'STATISTIK');T(Number(F(12)/(F(4)**3n))===34650,'Mannschaften');T(Number(F(11)/(F(4)*F(4)*2n))===34650,'MISSISSIPPI');
  T(cb(6,2)*cb(5,2)===150,'Team');T(cb(9,3)===84,'Ausschuss');let c=0;for(let x=1;x<=500;x++)if(x%3===0||x%7===0)c++;T(c===214,'1..500');
  c=0;for(let x=1;x<=300;x++)if(gE(x,30)===1)c++;T(c===80,'teilerfremd zu 30');c=0;for(let x=1;x<=100;x++)if(x%2===0||x%3===0||x%5===0)c++;T(c===74,'1..100');
  T(cb(9,4)===126,'x⁴');T(cb(5,2)*4===40,'x²y³');T(Number(F(4)/2n)===12,'a²bc');T(cb(8,3)===56,'Gitter');T(cb(12,2)===66,'Hände');T(cb(39,2)===741,'Kling');
  T(close(0.95*0.01/(0.95*0.01+0.02*0.99),0.3242)||Math.abs(0.95*0.01/(0.95*0.01+0.02*0.99)-0.324)<1e-3,'Scanner');T(close(0.4*0.05/(0.6*0.02+0.4*0.05),0.625),'Fabriken');
  T(close(0.5*0.01+0.3*0.02+0.2*0.03,0.017),'Lieferanten');T(close(0.63/0.72,0.875),'gelernt');T(close(1-0.5*0.7*0.8,0.72),'Schützen');T(close(0.9*0.95*0.8,0.684),'Kette');
  T(close(4*(2/3)**3/3+(2/3)**4,16/27),'Tennis');T(Math.ceil(Math.log(0.1)/Math.log(5/6))===13,'Würfel 90 %');T(Math.ceil(Math.log(0.045)/Math.log(0.8))===14,'Schütze 95,5 %');T(Math.ceil(Math.log(0.5)/Math.log(0.95))===14,'Lose');
  T(W.modinv(7,40)===23,'7⁻¹ mod 40');T(gE(729,75)===3,'ggT 729,75');T(gE(12,42)===6,'ggT 12,42');T([12,25].every(a=>(6*a-20)%26===0),'6a≡20');T(powNaive(7,157,26)===7,'7^157');T(powNaive(3,47,23)===4,'3^47');
  T(powNaive(3,2027,10)===7,'3^2027');T(W.phi(100)===40,'φ(100)');T(19*23===437&&W.modinv(317,396)===5&&powNaive(300,5,437)===116&&powNaive(116,317,437)===300,'RSA SS26');T(powNaive(9,7,55)===4,'RSA 55');
  T(257*367===94319&&256*366===93696&&257+367===624,'94319');T((7*4+8)%26===10&&(7*13+8)%26===21,'Affin E→K, N→V');T(W.modinv(5,26)===21&&(21*(17-8))%26===7,'Affin R→H');
  T(powNaive(5,6,23)===8&&powNaive(5,15,23)===19&&powNaive(19,6,23)===2,'DH');T(close(Math.exp(-2),0.1353)||Math.abs(Math.exp(-2)-0.135)<1e-3,'Poisson');T(W.derange(3)===2,'Mäntel');
  T(1+3+5+7+9+11===36&&1*1+2*3+3*5+4*7+5*9+6*11===161&&1*11+2*9+3*7+4*5+5*3+6*1===91,'Max/Min');T((4-1)*3+1===10,'Socken');T(17*17===289&&19*19===361&&23*23===529,'Quadrate');
  return n+' Rechnungen nachgeprüft';});

console.log(`\n${fail?'✗ '+fail+' Bereich(e) FEHLGESCHLAGEN':'✓ ALLES GRÜN'} · ${((Date.now()-t0)/1000).toFixed(1)} s`);
process.exit(fail?1:0);
