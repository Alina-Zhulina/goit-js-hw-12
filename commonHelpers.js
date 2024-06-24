import{a as L,S as w,i as E}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function P(e,o){const n="44394014-4230f595acf8cb42e98735a97",l="https://pixabay.com",t="/api/",r=new URLSearchParams({key:n,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}),s=`${l}${t}`;try{const a=await L.get(s,{params:r});if(a.status!==200)throw new Error("Failed to fetch images");const c=a.data;return{hits:c.hits,totalHits:c.totalHits}}catch(a){throw console.error("Error fetching the images:",a),a}}let u;function v(){const e=document.querySelector(".gallery");e.innerHTML=""}function B(e){const o=document.querySelector(".gallery"),n=document.createElement("ul");n.classList.add("photo-list");const l=e.map(({webformatURL:t,largeImageURL:r,tags:s,likes:a,views:c,comments:q,downloads:S})=>`
            <li class="photo-card">
                <a href="${r}" class="gallery-link">
                    <img src="${t}" alt="${s}" />
                </a>
                <ul class="info">
                <li><p><b>Downloads:</b></p> 
                    <p>${S}</p>
                    </li>
                    <li><p><b>Likes:</b></p> 
                    <p>${a}</p>
                    </li>
                    <li><p><b>Views:</b></p> 
                    <p>${c}</p>
                    </li>
                    <li><p><b>Comments:</b></p> 
                    <p>${q}</p>
                    </li>
                    
                </ul>
            </li>
        `).join("");n.innerHTML=l,o.appendChild(n),u&&u.destroy(),u=new w(".gallery a"),u.refresh()}function i(e){E.error({title:"Error",message:e,backgroundColor:"#ef4040",theme:"dark"})}function $(){const e=document.querySelector(".load-more-btn");e.style.display="block"}function p(){const e=document.querySelector(".load-more-btn");e.style.display="none"}function M(e,o){document.querySelector(".load-more-btn"),e>=o?(p(),i("We're sorry, but you've reached the end of search results.")):$()}const g=document.querySelector(".search-form"),m=document.querySelector(".loader"),O=g.querySelector('input[name="query"]'),C=document.querySelector(".load-more-btn"),H=document.querySelector(".gallery");let f="",d=1,h=1;const N=15;let y=[];g.addEventListener("submit",async e=>{if(e.preventDefault(),f=e.target.elements.query.value.trim(),f===""){p(),i("Please enter a search query.");return}m.style.display="block",p(),v(),d=1;try{await b(),O.value=""}catch(o){m.style.display="none",i(o.message)}});C.addEventListener("click",async()=>{try{d++,await b(),x()}catch(e){i(e.message)}});async function b(){const e=await P(f,d);y=e.hits,h=Math.ceil(e.totalHits/N),m.style.display="none",y.length===0?i("Sorry, there are no images matching your search query. Please try again!"):(B(y),M(d,h))}function x(){const e=H.querySelector("li.photo-card");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
