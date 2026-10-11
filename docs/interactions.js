(()=>{
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
function reveal(el){if(!el||reduced.matches||!el.animate)return;el.getAnimations().forEach(a=>a.cancel());el.animate([{opacity:.55,transform:'translateY(7px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,easing:'ease-out'});}
document.addEventListener('click',e=>{const button=e.target.closest('button');if(!button)return;queueMicrotask(()=>{
 if(button.matches('.portrait-select,[data-person]'))reveal(document.querySelector('#cast-dialog'));
 if(button.matches('[data-relation-index]'))reveal(document.querySelector('#relation-focus'));
 if(button.matches('[data-identity]')){reveal(document.querySelector('#identity-text'));reveal(document.querySelector('#identity-title'));}
 if(button.matches('[data-choice]'))reveal(document.querySelector('#choice-result'));
 if(button.matches('.glossary-open,[data-term]'))reveal(document.querySelector('#glossary'));
 if(button.matches('#enter-story'))reveal(document.querySelector('.hero-copy'));
});});
})();
