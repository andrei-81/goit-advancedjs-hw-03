/* empty css                      */import{S as g,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const p="47925753-e7f436f37bf276331d4c00f65",f="https://pixabay.com/api/";function h(o){const e=new URLSearchParams({key:p,q:o,pretty:!0,orientation:"horizontal",safesearch:!0,image_type:"photo"});return fetch(`${f}?${e}`)}const y=document.querySelector(".search-button"),c=document.querySelector(".in-progress"),b=document.querySelector(".search-string"),l=document.querySelector(".gallery");var L=new g(".gallery a",{captionDelay:250,captionsData:"alt"});const d={messageSize:"16px",messageColor:"#FAFAFB",backgroundColor:"#EF4040",iconUrl:"./img/octagon.png",iconColor:"#FAFAFB",maxWidth:432,messageLineHeight:"24px",position:"topRight"};y.addEventListener("click",o=>{o.preventDefault(),l.innerHTML="",c.innerHTML='<span class="loader"></span>',h(b.value).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(c.innerHTML="",e.total==0)a.error({message:"Sorry, there are no images matching your search query. Please try again!",...d});else{const i=e.hits,s=w(i);l.innerHTML=s,L.refresh()}}).catch(e=>{a.error({title:"Something bad happened",message:e,...d}),console.log(e)})});function w(o){var e=[];for(const{previewURL:i,largeImageURL:s,likes:t,views:r,comments:n,downloads:u,tags:m}of o)e.push(`<div class="gallery-item">
        <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${i}" alt="${m}" />
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
                    <td>${n}</td>
                    <td>${u}</td>
                </tr>
            </table>

        </a>
    </div>`);return e.join(" ")}
//# sourceMappingURL=index.js.map
