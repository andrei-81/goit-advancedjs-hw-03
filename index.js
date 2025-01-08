/* empty css                      */import{S as g,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const p="47925753-e7f436f37bf276331d4c00f65",f="https://pixabay.com/api/";function h(s){const e=new URLSearchParams({key:p,q:s,pretty:!0,orientation:"horizontal",safesearch:!0,image_type:"photo"});return fetch(`${f}?${e}`)}const y=document.querySelector(".search-button"),c=document.querySelector(".in-progress"),b=document.querySelector(".search-string"),l=document.querySelector(".gallery");var L=new g(".gallery a",{captionDelay:250,captionsData:"alt"});const d={messageSize:"16px",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconUrl:"https://site-assets.fontawesome.com/releases/v6.7.2/svgs/sharp-light/octagon-xmark.svg",iconColor:"#FAFAFB",maxWidth:432,messageLineHeight:"24px",position:"topRight"};y.addEventListener("click",s=>{s.preventDefault(),l.innerHTML="",c.innerHTML='<span class="loader"></span>',h(b.value).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(c.innerHTML="",e.total==0)n.error({message:"Sorry, there are no images matching your search query. Please try again!",...d});else{const a=e.hits,o=v(a);l.innerHTML=o,L.refresh()}}).catch(e=>{n.error({title:"Something bad happened",message:e,...d}),console.log(e)})});function v(s){var e=[];for(const{previewURL:a,largeImageURL:o,likes:t,views:r,comments:i,downloads:u,tags:m}of s)e.push(`<div class="gallery-item">
        <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${a}" alt="${m}" />
            <table class="description-table">
                <tr class="description-table-row table-header">
                    <td>Likes</td>
                    <td>Views</td>
                    <td>Comments</td>
                    <td>Downloads</td>
                </tr>
                <tr class="description-table-row table-content">
                    <td>${t}</td>
                    <td>${r}</td>
                    <td>${i}</td>
                    <td>${u}</td>
                </tr>
            </table>

        </a>
    </div>`);return e.join(" ")}
//# sourceMappingURL=index.js.map
