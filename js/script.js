(function(){var b=document.querySelector('.burger'),n=document.getElementById('menu');
if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
document.querySelectorAll('[data-year]').forEach(function(el){el.textContent=new Date().getFullYear()});
var fr=document.querySelector('.frame');
if(fr){var sl=fr.querySelector('.slides'),ds=fr.querySelectorAll('.dots button');
function go(i){var n=ds.length;i=(i+n)%n;sl.scrollTo({left:sl.clientWidth*i,behavior:'smooth'})}
function cur(){return Math.round(sl.scrollLeft/sl.clientWidth)}
fr.querySelector('.prev').addEventListener('click',function(){go(cur()-1)});
fr.querySelector('.next').addEventListener('click',function(){go(cur()+1)});
ds.forEach(function(d,i){d.addEventListener('click',function(){go(i)})});
sl.addEventListener('scroll',function(){var c=cur();ds.forEach(function(d,i){if(i===c)d.setAttribute('aria-current','true');else d.removeAttribute('aria-current')})},{passive:true});
sl.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){go(cur()-1)}else if(e.key==='ArrowRight'){go(cur()+1)}})}
})();
