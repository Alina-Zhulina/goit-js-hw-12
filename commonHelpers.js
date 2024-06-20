import{a as m,S as p,i as h}from"./assets/vendor-b11e2a50.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function g(t){const s="44394014-4230f595acf8cb42e98735a97",a="https://pixabay.com",n="/api/",e=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}),r=`${a}${n}`;try{const o=await m.get(r,{params:e});if(o.status!==200)throw new Error("Failed to fetch images");const i=o.data;if(i.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return i.hits}catch(o){throw console.error("Error fetching the images:",o),o}}let c;function b(){const t=document.querySelector(".gallery");t.innerHTML=""}function q(t){const s=document.querySelector(".gallery"),a=t.map(({webformatURL:n,largeImageURL:e,tags:r,likes:o,views:i,comments:f,downloads:d})=>`
            <div class="photo-card">
                <a href="${e}" class="gallery-link">
                    <img src="${n}" alt="${r}"/>
                </a>
                <div class="info">
                    <p><b>Likes:</b> ${o}</p>
                    <p><b>Views:</b> ${i}</p>
                    <p><b>Comments:</b> ${f}</p>
                    <p><b>Downloads:</b> ${d}</p>
                </div>
            </div>
        `).join("");s.insertAdjacentHTML("beforeend",a),c&&c.destroy(),c=new p(".gallery a"),c.refresh()}function l(t){h.error({title:"Error",message:t,backgroundColor:"#ef4040",theme:"dark"})}const y=document.querySelector(".search-form"),u=document.querySelector(".loader"),w=y.querySelector('input[name="query"]');y.addEventListener("submit",async t=>{t.preventDefault();const s=t.target.elements.query.value.trim();if(s===""){l("Please enter a search query.");return}u.style.display="block",b();try{const a=await g(s);u.style.display="none",a.length===0?l("Sorry, there are no images matching your search query. Please try again!"):q(a),w.value=""}catch(a){u.style.display="none",l(a.message)}});
//# sourceMappingURL=commonHelpers.js.map
