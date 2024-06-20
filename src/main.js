import { getGallery } from './js/pixabay-api.js';
import { clearGallery, renderImages, showNotification } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const input = form.querySelector('input[name="query"]');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const query = e.target.elements.query.value; 

    if (query === '') {
        showNotification("Please enter a search query.");
        return;
    }
    loader.style.display = 'block';
    clearGallery();

    getGallery(query)
        .then(images => {
          loader.style.display = 'none';
          if (images.length === 0) {
            showNotification("Sorry, there are no images matching your search query. Please try again!");
        } else {
            renderImages(images);
        }
        })
        .catch(error => {
          loader.style.display = 'none';
            showNotification(error.message);
        });
        input.value = ''; 
});