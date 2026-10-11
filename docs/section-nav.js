(()=>{
const header=document.querySelector('header'),nav=header.querySelector('.section-navigator');
const links=[...nav.querySelectorAll('a')];const sections=links.map(a=>document.querySelector(a.getAttribute('href')));
let scheduled=false,current=null;
function update(){scheduled=false;const edge=header.getBoundingClientRect().bottom+45;let selected=0;sections.forEach((s,i)=>{if(s.getBoundingClientRect().top<=edge)selected=i;});if(current===selected)return;current=selected;links.forEach((a,i)=>{if(i===selected)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});const active=links[selected];nav.scrollTo({left:Math.max(0,active.offsetLeft-nav.offsetLeft-nav.clientWidth/2+active.clientWidth/2),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(update);}}
window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);document.querySelector('#enter-story').addEventListener('click',schedule);update();
})();
