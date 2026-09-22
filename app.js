import {anatomy} from "../data/anatomy.js";
import {makeSkeleton} from "./skeleton.js";
import {makeQuiz} from "./quiz.js";

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const state={view:"front",selected:"skull",zoom:1,seen:new Set(JSON.parse(localStorage.getItem("anatomySeen")||"[]")),theme:localStorage.getItem("anatomyTheme")||"light"};

document.body.classList.toggle("dark",state.theme==="dark");
const svgWrap=$("#svgWrap");
function render(){svgWrap.innerHTML=makeSkeleton(state.view);wireSvg();renderDetails();}
function wireSvg(){
  $$("#svgWrap [data-id]").forEach(el=>el.addEventListener("click",()=>select(el.dataset.id)));
  $$("#svgWrap [data-id]").forEach(el=>el.classList.toggle("selected",el.dataset.id===state.selected));
  const svg=$("#skeletonSvg"); if(svg) svg.style.transform=`scale(${state.zoom})`;
}
function select(id){
  if(!anatomy[id]) return;
  state.selected=id; state.seen.add(id); localStorage.setItem("anatomySeen",JSON.stringify([...state.seen]));
  renderDetails(); wireSvg();
}
function renderDetails(){
  const d=anatomy[state.selected];
  $("#details").innerHTML=`<div class="eyebrow">${d.type} · ${d.region}</div>
  <div class="name">${d.name}</div>
  <div class="also">Also called: ${d.alt.join(", ")}</div>
  <div class="rule"></div>
  <h3>Function</h3><p>${d.function}</p>
  <h3>Articulations / relationships</h3><div class="chips">${d.articulations.map(x=>`<span class="chip">${x}</span>`).join("")}</div>
  <h3>Important landmarks</h3><div class="chips">${d.landmarks.map(x=>`<span class="chip">${x}</span>`).join("")}</div>
  <div class="rule"></div><p style="color:var(--muted);font-size:12px">Study tip: identify this structure on the model, then say its function aloud before moving on.</p>`;
}
function showModal(html){$("#modalContent").innerHTML=html;$("#modal").classList.remove("hidden")}
function closeModal(){$("#modal").classList.add("hidden")}
$$(".seg button").forEach(b=>b.addEventListener("click",()=>{$$(".seg button").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.view=b.dataset.view;render()}));
$("#themeBtn").addEventListener("click",()=>{state.theme=state.theme==="dark"?"light":"dark";document.body.classList.toggle("dark",state.theme==="dark");localStorage.setItem("anatomyTheme",state.theme)});
$("#zoomIn").addEventListener("click",()=>{state.zoom=Math.min(1.35,state.zoom+.1);wireSvg()});
$("#zoomOut").addEventListener("click",()=>{state.zoom=Math.max(.75,state.zoom-.1);wireSvg()});
$("#zoomReset").addEventListener("click",()=>{state.zoom=1;wireSvg()});
$("#search").addEventListener("input",e=>{
  const q=e.target.value.trim().toLowerCase(), box=$("#searchResults");
  if(!q){box.classList.remove("open");box.innerHTML="";return}
  const hits=Object.entries(anatomy).filter(([id,d])=>(d.name+" "+d.alt.join(" ")+" "+d.region+" "+d.type+" "+d.landmarks.join(" ")).toLowerCase().includes(q)).slice(0,8);
  box.innerHTML=hits.map(([id,d])=>`<button class="result" data-result="${id}"><b>${d.name}</b><br><small>${d.type} · ${d.region}</small></button>`).join("");
  box.classList.toggle("open",hits.length>0);
  $$("#searchResults [data-result]").forEach(b=>b.addEventListener("click",()=>{select(b.dataset.result);box.classList.remove("open");e.target.value=""}));
});
$("#quizOpen").addEventListener("click",()=>showQuiz());
$("#closeModal").addEventListener("click",closeModal);
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
$$(".study-strip button").forEach(b=>b.addEventListener("click",()=>{
  const mode=b.dataset.mode;
  if(mode==="random"){const keys=Object.keys(anatomy);select(keys[Math.floor(Math.random()*keys.length)]);return}
  if(mode==="progress"){const n=state.seen.size,total=Object.keys(anatomy).length;showModal(`<h2>Your progress</h2><div class="stat-grid"><div class="stat"><b>${n}</b><span>Structures seen</span></div><div class="stat"><b>${total}</b><span>In atlas</span></div><div class="stat"><b>${Math.round(n/total*100)}%</b><span>Coverage</span></div></div>`);return}
  if(mode==="flashcards"){const d=anatomy[state.selected];showModal(`<div class="eyebrow">Flashcard</div><h2>${d.name}</h2><p style="color:var(--muted)">Also called: ${d.alt.join(", ")}</p><hr><p><b>Function:</b> ${d.function}</p><p style="margin-top:12px"><b>Landmarks:</b> ${d.landmarks.join(", ")}</p>`);return}
  showModal(`<h2>Body regions</h2><p>Select a region in the search bar to focus your study. The atlas currently includes ${Object.keys(anatomy).length} core structures, with individual hand and toe phalanx groups ready for expansion into individually addressable bones.</p>`);
}));
function showQuiz(){showModal(`<div id="quizRoot"></div>`);makeQuiz($("#quizRoot"),anatomy)}
render();
