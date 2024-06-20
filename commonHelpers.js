import{S as p,i as m}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function h(t){const n="44394014-4230f595acf8cb42e98735a97",s="https://pixabay.com",a="/api/",e=new URLSearchParams({key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}),r=`${s}${a}?${e}`;try{const o=await fetch(r);if(!o.ok)throw new Error("Failed to fetch images");const i=await o.json();if(i.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return i.hits}catch(o){throw console.error("Error fetching the images:",o),o}}let c;function g(){const t=document.querySelector(".gallery");t.innerHTML=""}function b(t){const n=document.querySelector(".gallery"),s=t.map(({webformatURL:a,largeImageURL:e,tags:r,likes:o,views:i,comments:y,downloads:d})=>`
            <div class="photo-card">
                <a href="${e}" class="gallery-link">
                    <img src="${a}" alt="${r}"/>
                </a>
                <div class="info">
                    <p><b>Likes:</b> ${o}</p>
                    <p><b>Views:</b> ${i}</p>
                    <p><b>Comments:</b> ${y}</p>
                    <p><b>Downloads:</b> ${d}</p>
                </div>
            </div>
        `).join("");n.insertAdjacentHTML("beforeend",s),c&&c.destroy(),c=new p(".gallery a"),c.refresh()}function l(t){m.error({title:"Error",message:t,backgroundColor:"#ef4040",theme:"dark"})}const f=document.querySelector(".search-form"),u=document.querySelector(".loader"),q=f.querySelector('input[name="query"]');f.addEventListener("submit",t=>{t.preventDefault();const n=t.target.elements.query.value;if(n===""){l("Please enter a search query.");return}u.style.display="block",g(),h(n).then(s=>{u.style.display="none",s.length===0?l("Sorry, there are no images matching your search query. Please try again!"):b(s)}).catch(s=>{u.style.display="none",l(s.message)}),q.value=""});
//# sourceMappingURL=commonHelpers.js.map
