import { getGallery } from './js/pixabay-api.js';
import { clearGallery, renderImages, showNotification } from './js/render-functions.js'


const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const input = form.querySelector('input[name="query"]');
const loadMoreButton = document.querySelector('.load-more-btn');

let currentQuery = "";
let page = 1;

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const query = e.target.elements.query.value.trim();

    if (query === '') {
        showNotification("Please enter a search query.");
        return;
    }

    loader.style.display = 'block';
    loadMoreButton.style.display = 'none';


    clearGallery();
    
    page = 1;
 
    try {
        const images = await getGallery(query);
    
        loader.style.display = 'none';
        
        if (images.length === 0) {
            showNotification("Sorry, there are no images matching your search query. Please try again!");
        } else {
            renderImages(images);
        }
        loadMoreButton.style.display = 'block';
        input.value = '';
        currentQuery = query;
    } catch (error) {
        loader.style.display = 'none';
        showNotification(error.message);
    }
});

loadMoreButton.addEventListener('click', async () => {
    try {
        page++; 
        const images = await getGallery(currentQuery, page);

        if (images.length === 0) {
            showNotification("We're sorry, but you've reached the end of search results.");
            loadMoreButton.style.display = 'none';
        } else {
            renderImages(images);
        }

    } catch (error) {
        showNotification(error.message);
    }
});
