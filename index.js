import{a as y,S as u,i as n}from"./assets/vendor-BgmC94F3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function g(i){const r={key:"52994233-7ffb60f08ba14b4da4bef7a73",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await y.get("https://pixabay.com/api/",{params:r})).data}const p=document.querySelector(".gallery"),f=document.querySelector(".loader");let l=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:m,downloads:d})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img class="gallery-image" src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${s}</p>
          <p class="info-item"><b>Comments</b> ${m}</p>
          <p class="info-item"><b>Downloads</b> ${d}</p>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",r),l.refresh()}function b(){p.innerHTML="",l.destroy(),l=new u(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){f.classList.add("is-visible")}function w(){f.classList.remove("is-visible")}const c=document.querySelector(".form"),v=document.querySelector('input[name="search-text"]');c.addEventListener("submit",async i=>{i.preventDefault();const r=v.value.trim();if(!r){n.warning({title:"Warning",message:"Search input must not be empty!",position:"topRight"});return}b(),L();try{const o=await g(r);o.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):h(o.hits)}catch(o){console.error(o),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w(),c.reset()}});
//# sourceMappingURL=index.js.map
