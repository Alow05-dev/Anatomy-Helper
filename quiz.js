export function makeQuiz(root,anatomy){
  let score=0,total=0,current=null;
  const keys=Object.keys(anatomy);
  function question(){
    current=keys[Math.floor(Math.random()*keys.length)];
    const opts=[current];
    while(opts.length<4){const k=keys[Math.floor(Math.random()*keys.length)];if(!opts.includes(k))opts.push(k)}
    opts.sort(()=>Math.random()-.5);
    root.innerHTML=`<div class="eyebrow">QUIZ MODE</div><h2>Identify the structure</h2><p>Find this structure on the atlas:</p><div style="font-size:28px;font-weight:900;margin:16px 0">${anatomy[current].name}</div><div class="quiz-options">${opts.map(k=>`<button class="quiz-option" data-k="${k}">${anatomy[k].name}</button>`).join("")}</div><p style="margin-top:15px;color:var(--muted)">Score: ${score}/${total}</p>`;
    root.querySelectorAll("[data-k]").forEach(b=>b.addEventListener("click",()=>{
      total++;const ok=b.dataset.k===current;b.classList.add(ok?"correct":"wrong");
      if(ok)score++;else root.querySelector(`[data-k="${current}"]`).classList.add("correct");
      setTimeout(question,700);
    }));
  }
  question();
}
