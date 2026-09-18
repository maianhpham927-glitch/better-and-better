(() => { const body=document.body, nav=document.querySelector('.main-nav'), toggle=document.querySelector('.nav-toggle'), theme=document.querySelector('.theme-toggle'), dialog=document.querySelector('#search-dialog'), searchBtn=document.querySelector('.search-button'), close=document.querySelector('.dialog-close'), input=document.querySelector('#search-input'), results=document.querySelector('#search-results');
const saved=localStorage.getItem('melli-theme'); if(saved==='dark') body.classList.add('dark');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
theme?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('melli-theme',body.classList.contains('dark')?'dark':'light')});
searchBtn?.addEventListener('click',()=>{dialog.showModal();setTimeout(()=>input.focus(),50)});close?.addEventListener('click',()=>dialog.close());
const posts=JSON.parse(document.querySelector('#search-data')?.textContent||'[]');input?.addEventListener('input',()=>{const term=input.value.trim().toLocaleLowerCase('vi');if(!term){results.innerHTML='';return}const found=posts.filter(p=>p.title.toLocaleLowerCase('vi').includes(term));results.innerHTML=found.length?found.map(p=>`<a class="search-result" href="${p.url}">${p.title}<small>${p.date}</small></a>`).join(''):'<p class="empty-result">Chưa tìm thấy lá thư nào như vậy.</p>'});
let visits=Number(localStorage.getItem('melli-visits')||1526)+1;localStorage.setItem('melli-visits',visits);const counter=document.querySelector('#visitor-count');if(counter)counter.textContent=new Intl.NumberFormat('en-US',{minimumIntegerDigits:5}).format(visits);
})();

