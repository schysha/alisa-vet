(function(){var b=document.querySelector('.burger'),n=document.getElementById('menu');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear()})})();
