const apiKey = "47925753-e7f436f37bf276331d4c00f65"
const picturesUrl = "https://pixabay.com/api/"
export function findImages(searchString) {
    const parameters = new URLSearchParams({
        key: apiKey,
        q: searchString, // .toString().trim().replaceAll(' ', '+'),
        pretty: true,
        orientation: "horizontal",
        safesearch: true,
        image_type: "photo"
      });
      
    return fetch(`${picturesUrl}?${parameters}`)
}