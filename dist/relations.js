(()=>{
const links=[
[{g:'royal',role:'황제의 셋째 아들 · 감왕',people:[['경승휘','부친'],['소연화','생모 · 15년 전 사망']]},{g:'sa',role:'사가와 혼인으로 이어질 관계',people:[['사청의','약혼녀']]}],
[{g:'sa',role:'양자로 들어간 집안 · 후계자',people:[['사청의','외사촌'],['사문겸','양부']]},{g:'go',role:'태어난 집안',people:[['고명안','친부']]}],
[{g:'court',role:'소속 관청 · 대리시 소경',people:[['진형','상관 · 대리시경']]}],
[{g:'wi',role:'소속 가문 · 후계자',people:[['위연','부친']]}],
[{g:'sa',role:'소속 가문 · 외동 적녀',people:[['사문겸','부친'],['고완녕','모친'],['고청화','외사촌 · 사가의 양자']]},{g:'royal',role:'황실과 혼인으로 이어질 관계',people:[['경소헌','약혼자']]}]
];
const titles={royal:'황실',sa:'사가',go:'고가',wi:'위가',court:'대리시'};
function branches(i){return links[i].map(l=>`<div class="relation-branch"><h4>${titles[l.g]}</h4><p>${l.role}</p><ul>${l.people.map(([name,role])=>`<li><strong>${name}</strong><span>${role}</span></li>`).join('')}</ul></div>`).join('');}
window.castRelationsHTML=i=>`<section class="modal-relations"><h3>소속과 연결된 인물</h3><div class="relation-branches">${branches(i)}</div></section>`;
document.querySelectorAll('[data-group]').forEach(block=>{const f=factions[block.dataset.group];block.querySelector('.faction-summary').innerHTML=`<p>${f[1]}</p><div class="faction-context"><b>이 사건과의 관계</b><p>${f[2]}</p></div>`;});

const map=document.querySelector('#faction-map');
const tabs=document.createElement('div');tabs.className='faction-tabs';tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','세력별 인물 보기');
tabs.innerHTML=Object.entries(titles).map(([key,title])=>`<button type="button" role="tab" id="tab-${key}" aria-controls="group-${key}" data-group-tab="${key}">${title}</button>`).join('');map.before(tabs);
function selectGroup(key,animate=true){
 tabs.querySelectorAll('button').forEach(b=>{const active=b.dataset.groupTab===key;b.setAttribute('aria-selected',active);b.tabIndex=active?0:-1;});
 document.querySelectorAll('[data-group]').forEach(panel=>{const active=panel.dataset.group===key;panel.hidden=!active;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby','tab-'+panel.dataset.group);panel.tabIndex=0;if(active&&animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&panel.animate){panel.getAnimations().forEach(a=>a.cancel());panel.animate([{opacity:.5,transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:200,easing:'ease-out'});}});
}
tabs.addEventListener('click',e=>{const b=e.target.closest('[data-group-tab]');if(b)selectGroup(b.dataset.groupTab);});
tabs.addEventListener('keydown',e=>{const buttons=[...tabs.querySelectorAll('button')];const index=buttons.indexOf(document.activeElement);if(index<0)return;let next;if(e.key==='ArrowRight')next=(index+1)%buttons.length;else if(e.key==='ArrowLeft')next=(index+buttons.length-1)%buttons.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=buttons.length-1;else return;e.preventDefault();buttons[next].focus();selectGroup(buttons[next].dataset.groupTab);});
document.querySelectorAll('[data-person]').forEach(b=>b.addEventListener('click',()=>document.querySelectorAll('.portrait-select')[Number(b.dataset.person)].click()));
selectGroup('royal',false);
})();
