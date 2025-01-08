import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import { findImages } from "./pixabay-api";


const button = document.querySelector('.search-button');
const inProgress = document.querySelector('.in-progress');
const searchString = document.querySelector('.search-string')
const gallery = document.querySelector('.gallery')

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' })
const iziToastParameters = {
    messageSize: "16px",
    messageColor: "#FAFAFB",
    backgroundColor: "#EF4040",    
    iconUrl: "https://site-assets.fontawesome.com/releases/v6.7.2/svgs/sharp-light/octagon-xmark.svg",
    iconColor: "#FAFAFB",
    maxWidth: 432,  
    messageLineHeight: "24px",
    position: "topRight",
    
}

button.addEventListener('click', (event) => {
    event.preventDefault()
    gallery.innerHTML = ''
    inProgress.innerHTML = `<span class="loader"></span>`;
    findImages(searchString.value).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json()
    }).then((pictures) => {
        inProgress.innerHTML = ''
        if(pictures.total == 0){
            iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                ...iziToastParameters, 
            })
        } else {
            const picturesList = pictures.hits
            const picturesHtml = getPicturesHtml(picturesList)
            gallery.innerHTML = picturesHtml
            lightbox.refresh()
        }
    })
    .catch((error) => {iziToast.error({
        title: "Something bad happened",
        message: error,
        ...iziToastParameters,
    })
    console.log(error)})
    
})

function getPicturesHtml(picturesList) {
    var imagesHtml = []
    for (const {previewURL, largeImageURL, likes, views, comments, downloads, tags} of picturesList) {
    imagesHtml.push(
    `<div class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${previewURL}" alt="${tags}" />
            <table class="description-table">
                <tr class="description-table-row table-header">
                    <td>Likes</td>
                    <td>Views</td>
                    <td>Comments</td>
                    <td>Downloads</td>
                </tr>
                <tr class="description-table-row table-content">
                    <td>${likes}</td>
                    <td>${views}</td>
                    <td>${comments}</td>
                    <td>${downloads}</td>
                </tr>
            </table>

        </a>
    </div>`)
    }
    return imagesHtml.join(' ')
}

