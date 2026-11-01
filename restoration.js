
document.querySelectorAll('.elementor-counter-number').forEach(el=>{el.textContent=el.dataset.toValue||el.textContent;});
document.querySelectorAll('.elementor-menu-toggle').forEach(toggle=>{
 const widget=toggle.closest('.elementor-widget');
 const menu=widget?.querySelector('.elementor-nav-menu--dropdown.elementor-nav-menu__container');
 const change=()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.classList.toggle('elementor-active',open);menu?.classList.toggle('restore-open',open);};
 toggle.addEventListener('click',change);
 toggle.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();change();}});
 menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');menu.classList.remove('restore-open');}));
});
document.querySelectorAll('[role="tab"]').forEach(tab=>tab.addEventListener('click',()=>{
 const group=tab.closest('.e-n-tabs');if(!group)return;
 group.querySelectorAll('[role="tab"]').forEach(t=>t.setAttribute('aria-selected',String(t===tab)));
 group.querySelectorAll('[role="tabpanel"]').forEach(p=>{const active=p.id===tab.getAttribute('aria-controls');p.classList.toggle('e-active',active);p.hidden=!active;});
}));
