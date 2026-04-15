// FAQ
document.querySelectorAll(".faq-item button").forEach(btn=>{
btn.addEventListener("click",()=>{
const content=btn.nextElementSibling;
content.style.maxHeight=content.style.maxHeight?null:content.scrollHeight+"px";
});
});

// Smooth scroll
document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",function(e){
if(this.getAttribute("href").includes(".html")) return;
e.preventDefault();
const target=document.querySelector(this.getAttribute("href"));
window.scrollTo({top:target.offsetTop-70,behavior:"smooth"});
});
});
