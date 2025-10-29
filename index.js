import{a as m,i}from"./assets/vendor-9zJjAnrW.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function f(r){const s={key:"52994233-7ffb60f08ba14b4da4bef7a73",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get("https://pixabay.com/api/",{params:s})).data}const c=document.getElementById("loader");function y(){c.classList.add("loader--visible")}function g(){c.classList.remove("loader--visible")}function h(){const r=document.getElementById("gallery");r.innerHTML=""}function v(r){const s=document.getElementById("gallery"),a=r.map(({webformatURL:o,largeImageURL:e,tags:t,likes:n,views:d,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a href="${e}" data-caption="${t}">
          <img src="${o}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item"><span class="label">Likes</span><span class="value">${n}</span></div>
          <div class="info-item"><span class="label">Views</span><span class="value">${d}</span></div>
          <div class="info-item"><span class="label">Comments</span><span class="value">${u}</span></div>
          <div class="info-item"><span class="label">Downloads</span><span class="value">${p}</span></div>
        </div>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",a)}const l=document.querySelector(".form"),b=document.querySelector('input[name="search-text"]');l.addEventListener("submit",async r=>{r.preventDefault();const s=b.value.trim();if(!s){i.warning({title:"Warning",message:"Search input must not be empty!",position:"topRight"});return}h(),y();try{const a=await f(s);a.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):v(a.hits)}catch(a){console.error(a),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g(),l.reset()}});
//# sourceMappingURL=index.js.map
