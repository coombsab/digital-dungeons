import{_ as V,u as F,b as G,B as L,e as r,D as _,P as l,k as q,E as H,M as J,G as K,S as T,H as z,I as O,r as c,o as s,c as d,f as e,m as u,J as Q,t as I,x as U,i as p,F as x,g as b,h as k,n as W,K as w,A as o,p as X,j as Y}from"./index.3a97ec09.js";import{M as Z}from"./MonsterCard.0df3d44e.js";import $ from"./AccountPage.79d5a9ef.js";const tt={setup(){const a=F();async function m(){try{await W.getEncounterById(a.params.campaignId,a.params.encounterId)}catch(n){l.error(n)}}async function g(){try{w.setActiveCategory("monsters"),await w.getApiInfo("monsters")}catch(n){l.error(n,["gettingMonsters"])}}async function t(){try{await _.getMonstersByEncounterId(a.params.encounterId)}catch(n){l.error(n)}}return G(()=>{m(),g(),t()}),L(()=>{o.monsters=[],o.activeCategory=null}),{route:a,campaigns:r(()=>o.campaigns),account:r(()=>o.account),encounter:r(()=>o.encounters),activeEncounter:r(()=>o.activeEncounter),activeCampaign:r(()=>o.activeCampaign),monsters:r(()=>o.monsters),nextPage:r(()=>o.nextPage),previousPage:r(()=>o.previousPage),category:r(()=>o.activeCategory),activeMonsters:r(()=>o.activeEncounterMonsters.sort((n,v)=>v.initiative-n.initiative)),async rollInitiatives(){try{await _.rollInitiatives(a.params.encounterId)}catch(n){l.error(n)}},async addCharacter(){try{await _.addCharacter(req.body)}catch(n){l.error(n)}}}},components:{CreateEncounterModal:q,EncounterCard:H,MonsterCard:Z,MonsterDetailsModal:J,AccountPage:$,ActiveEncounterMonsters:K,SearchPagination:T,EditEncounterDetailsModal:z,CreateCharacterModal:O}},P=a=>(X("data-v-93e98d23"),a=a(),Y(),a),et={class:"container-fluid"},nt={key:0,class:"row AETitle"},ot={class:"col-md-4 d-flex justify-content-between align-items-center"},at=P(()=>e("span",null,"Go Back",-1)),rt={class:"col-md-4 d-flex justify-content-center align-items-center"},st={class:"text-primary fs-3"},ct={key:0,class:"col-md-4 d-flex justify-content-between align-items-center"},it=["data-bs-target"],dt=P(()=>e("button",{class:"btn text-primary","data-bs-toggle":"modal","data-bs-target":"#addCharacterModal"}," Add Character ",-1)),lt={class:"row content"},ut={class:"col-12 img-col d-flex"},mt=["src"],_t={class:"p-5 text-primary"},pt={class:"col-md-4 bg-transparent monster-col box"},gt={class:"elem2 scrollable"},vt={class:"col-md-8 monster-col"},ht={class:"d-flex flex-wrap gap-3 pt-3 scrollable h-100 align-content-start"},yt={key:1};function Et(a,m,g,t,n,v){var h,y,E,M,f,C;const S=c("router-link"),A=c("SearchPagination"),B=c("MonsterDetailsModal"),D=c("ActiveEncounterMonsters"),j=c("EditEncounterDetailsModal"),N=c("CreateEncounterModal"),R=c("CreateCharacterModal");return s(),d("div",et,[t.activeEncounter?(s(),d("div",nt,[e("div",ot,[u(S,{to:{name:"CampaignDetails",params:{campaignId:t.route.params.campaignId}}},{default:Q(()=>[at]),_:1},8,["to"])]),e("div",rt,[e("span",st,I((h=t.activeEncounter)==null?void 0:h.name),1)]),((y=t.activeEncounter)==null?void 0:y.creatorId)===((E=t.account)==null?void 0:E.id)?(s(),d("div",ct,[e("button",{class:"text-primary btn","data-bs-toggle":"modal","data-bs-target":"#encounterModal"+((M=t.activeEncounter)==null?void 0:M.id)}," Edit Encounter ",8,it),dt,e("button",{class:"btn text-primary",onClick:m[0]||(m[0]=U(i=>t.rollInitiatives(),["stop"]))}," Roll Initiatives ")])):p("",!0)])):p("",!0),e("section",lt,[e("div",ut,[e("img",{src:(f=t.activeEncounter)==null?void 0:f.coverImg,alt:"",class:"img-fluid encounterImage rounded"},null,8,mt),e("p",_t,I((C=t.activeEncounter)==null?void 0:C.desc),1)]),e("div",pt,[u(A),e("div",gt,[(s(!0),d(x,null,b(t.monsters,i=>(s(),k(B,{key:i.slug,monster:i},null,8,["monster"]))),128))])]),e("div",vt,[e("div",ht,[(s(!0),d(x,null,b(t.activeMonsters,i=>(s(),k(D,{key:i.id,monster:i},null,8,["monster"]))),128))])])]),t.activeEncounter?(s(),d("div",yt,[u(j,{encounter:t.activeEncounter},null,8,["encounter"])])):p("",!0),u(N),u(R)])}const It=V(tt,[["render",Et],["__scopeId","data-v-93e98d23"]]);export{It as default};