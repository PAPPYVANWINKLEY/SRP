(()=>{
function initReaders(){
document.querySelectorAll('.prequel-reader').forEach(dialog=>{
const opener=document.querySelector('#open-prequel-'+dialog.dataset.chapter);let position=0;
opener.addEventListener('click',()=>{dialog.showModal();dialog.scrollTop=position;document.body.classList.add('reader-open');if(!matchMedia('(prefers-reduced-motion:reduce)').matches)dialog.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,easing:'ease-out'});});
function close(){dialog.close();}
dialog.querySelector('.close-reader').onclick=close;dialog.querySelector('.reader-finish').onclick=close;
dialog.addEventListener('scroll',()=>position=dialog.scrollTop,{passive:true});dialog.addEventListener('close',()=>{document.body.classList.remove('reader-open');opener.focus({preventScroll:true});});
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();});
dialog.querySelector('.reader-size').onclick=e=>{const large=dialog.classList.toggle('large-text');e.currentTarget.setAttribute('aria-pressed',large);e.currentTarget.textContent=large?'가 −':'가 +';e.currentTarget.setAttribute('aria-label',large?'본문 글자 기본 크기로 보기':'본문 글자 크게 보기');};
});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initReaders,{once:true});else initReaders();
})();
