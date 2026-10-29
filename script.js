'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir menú');}
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.header'))closeMenu();});
const branches={
castores:{name:'Castores',age:'DE 6 A 8 AÑOS',motto:'«Compartir»',text:'¿La Colonia Tierra del Fuego tiene algo que decir? La primera aventura scout. En la colonia descubrimos lo que significa compartir, convivir y dar nuestros primeros pasos con autonomía, a través del juego y de pequeñas experiencias en equipo.',team:'Colonia y madrigueras',project:'El dique',photo:'castores-foto',alt:'Castores y responsables del grupo al aire libre'},
lobatos:{name:'Lobatos',age:'DE 9 A 11 AÑOS',motto:'«Haremos lo mejor»',text:'¿La Manada Darzee tiene algo que decir? La manada es un lugar para descubrir capacidades, aprender a ayudar y avanzar juntos. Con la ambientación de El libro de la selva, los lobatos trabajan su progreso personal y comparten el aprendizaje en pequeños equipos.',team:'Manada y seisenas',project:'La caza',photo:'lobatos-foto',alt:'Lobatos del grupo juntos, con sus camisas amarillas'},
rangers:{name:'Rangers',age:'DE 12 A 14 AÑOS',motto:'«Siempre listos»',text:'¿La Tropa Sherwood tiene algo que decir? En la tropa, la aventura se convierte en una oportunidad para ganar autonomía y asumir responsabilidades. Las patrullas aprenden a organizarse, cooperar y participar en sus propios proyectos, acompañadas por los responsables.',team:'Tropa y patrullas',project:'La misión',photo:'aventura',alt:'Scouts con sus mochilas descansando durante una ruta'},
pioneros:{name:'Pioneros',age:'DE 15 A 17 AÑOS',motto:'«Sorprese»',text:'¿La Unidad Kender tiene algo que decir? Es el momento de tomar la iniciativa. Los pioneros tienen un papel activo en la planificación de objetivos, actividades y responsabilidades. El compromiso personal y el trabajo en equipo ayudan a convertir sus ideas en proyectos.',team:'Unidad y tripulaciones',project:'La descubierta',photo:'campamento',alt:'Scouts junto a una construcción de madera en el campamento'}
};
const tabs=[...document.querySelectorAll('[data-branch]')];
function selectBranch(tab){const id=tab.dataset.branch,b=branches[id];tabs.forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1;});document.querySelector('#branch-panel').setAttribute('aria-labelledby',tab.id);for(const field of ['name','age','motto','text','team','project'])document.querySelector('#branch-'+field).textContent=b[field];const icon=document.querySelector('#branch-icon');icon.src='assets/'+id+'.webp';icon.alt='Insignia de '+b.name;const photo=document.querySelector('#branch-photo');photo.src='assets/'+b.photo+'.webp';photo.alt=b.alt;}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectBranch(tab));tab.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=(i+1)%tabs.length;if(e.key==='ArrowLeft')n=(i+tabs.length-1)%tabs.length;if(e.key==='Home')n=0;if(e.key==='End')n=tabs.length-1;if(n!==undefined){e.preventDefault();tabs[n].focus();selectBranch(tabs[n]);}});});
const lightbox=document.querySelector('#lightbox');let lastPhoto;
document.querySelectorAll('.gallery-item').forEach(link=>link.addEventListener('click',e=>{if(typeof lightbox.showModal!=='function')return;e.preventDefault();lastPhoto=link;const img=lightbox.querySelector('img');img.src=link.getAttribute('href');img.alt=link.querySelector('img').alt;lightbox.querySelector('p').textContent=link.dataset.caption;lightbox.showModal();document.body.classList.add('modal-open');}));
lightbox.querySelector('button').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('click',e=>{if(e.target===lightbox){const r=lightbox.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)lightbox.close();}});
lightbox.addEventListener('close',()=>{document.body.classList.remove('modal-open');if(lastPhoto)lastPhoto.focus();});
document.querySelector('#year').textContent=new Date().getFullYear();
