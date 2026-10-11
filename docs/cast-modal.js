(()=>{
const modal=document.querySelector('#cast-dialog');
const mobile=window.matchMedia('(max-width:760px)');
let opener=null;
function closeCast(){if(modal.open)modal.close();}
document.querySelectorAll('.portrait-select').forEach((button,i)=>{
 button.addEventListener('click',()=>{

  const person=people[i];opener=button;
  document.querySelector('#cast-dialog-name').textContent=person.name;
  document.querySelector('#cast-dialog-role').textContent=person.role;
  document.querySelector('#cast-dialog-detail').innerHTML=document.querySelector('#person-detail').innerHTML;
  document.querySelector('#cast-dialog-relations').innerHTML=window.castRelationsHTML(i);
  modal.showModal();modal.scrollTop=0;document.body.classList.add('cast-modal-open');
 });
});
document.querySelector('#close-cast').addEventListener('click',closeCast);
modal.addEventListener('click',event=>{if(event.target!==modal)return;const rect=modal.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeCast();});
modal.addEventListener('close',()=>{document.body.classList.remove('cast-modal-open');opener?.focus({preventScroll:true});});

})();
