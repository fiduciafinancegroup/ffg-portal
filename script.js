// =========================
// script.js (INTERACTIVE)
// =========================
// smooth scroll
document.querySelectorAll('nav a').forEach(link=>{
link.addEventListener('click',e=>{
e.preventDefault();
const t=document.querySelector(link.getAttribute('href'));
window.scrollTo({top:t.offsetTop-60,behavior:'smooth'});
});});

// FAQ toggle
document.querySelectorAll('.faq-item button').forEach(btn=>{
btn.addEventListener('click',()=>{
const c=btn.nextElementSibling;
c.style.display=c.style.display==='block'?'none':'block';
});});

// Team modal
const modal=document.getElementById('modal');
const modalBody=document.getElementById('modalBody');
const close=document.getElementById('closeModal');

document.querySelectorAll('.team').forEach(card=>{
card.addEventListener('click',()=>{
modal.style.display='block';
modalBody.innerHTML='<h3>'+card.innerText+'</h3><p>Experience and expertise details here.</p>';
});});

close.onclick=()=>modal.style.display='none';
window.onclick=e=>{if(e.target==modal)modal.style.display='none'};
