import{a as q,S as w,i as L}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function m(r,o=1){const s="44394014-4230f595acf8cb42e98735a97",i="https://pixabay.com",e="/api/",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),d=`${i}${e}`;try{const n=await q.get(d,{params:a});if(n.status!==200)throw new Error("Failed to fetch images");const l=n.data;if(l.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return l.hits}catch(n){throw console.error("Error fetching the images:",n),n}}let u;function S(){const r=document.querySelector(".gallery");r.innerHTML=""}function g(r){const o=document.querySelector(".gallery"),s=r.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:d,comments:n,downloads:l})=>`
            <div class="photo-card">
                <a href="${e}" class="gallery-link">
                    <img src="${i}" alt="${t}"/>
                </a>
                <div class="info">
                    <p><b>Likes:</b> ${a}</p>
                    <p><b>Views:</b> ${d}</p>
                    <p><b>Comments:</b> ${n}</p>
                    <p><b>Downloads:</b> ${l}</p>
                </div>
            </div>
        `).join("");o.insertAdjacentHTML("beforeend",s),u&&u.destroy(),u=new w(".gallery a"),u.refresh()}function c(r){L.error({title:"Error",message:r,backgroundColor:"#ef4040",theme:"dark"})}const h=document.querySelector(".search-form"),f=document.querySelector(".loader"),v=h.querySelector('input[name="query"]'),y=document.querySelector(".load-more-btn");let b="",p=1;h.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements.query.value.trim();if(o===""){c("Please enter a search query.");return}f.style.display="block",y.style.display="none",S(),p=1;try{const s=await m(o);f.style.display="none",s.length===0?c("Sorry, there are no images matching your search query. Please try again!"):g(s),y.style.display="block",v.value="",b=o}catch(s){f.style.display="none",c(s.message)}});y.addEventListener("click",async()=>{try{p++;const r=await m(b,p);r.length===0?(c("We're sorry, but you've reached the end of search results."),y.style.display="none"):g(r)}catch(r){c(r.message)}});
//# sourceMappingURL=commonHelpers.js.map