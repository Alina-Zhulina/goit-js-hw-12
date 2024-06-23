import { getGallery } from './js/pixabay-api.js';
import { clearGallery, renderImages, showNotification, showLoadBtn, hideLoadBtn, updateBtnStatus} from './js/render-functions.js'

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const input = form.querySelector('input[name="query"]');
const loadMoreButton = document.querySelector('.load-more-btn');
const divList = document.querySelector('.gallery'); 
let query = "";
let page = 1;
let maxPage = 1;
const perPage = 15;
let images = [];

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    query = e.target.elements.query.value.trim();

    if (query === '') {
        hideLoadBtn();
        showNotification("Please enter a search query.");
        return;
    }
    loader.style.display = 'block';
    hideLoadBtn();
    clearGallery();
    page = 1;
    try {
        await fetchAndRenderImages();
        input.value = '';
    } catch (error) {
        loader.style.display = 'none';
        showNotification(error.message);
    }
});


loadMoreButton.addEventListener('click', async () => {
    try {
        page++; 
        await fetchAndRenderImages();
        scrollElements();
    } catch (error) {
        showNotification(error.message);
    }
});



async function fetchAndRenderImages() {
    const data = await getGallery(query, page);
    images = data.hits;
    maxPage = Math.ceil(data.totalHits / perPage);
    loader.style.display = 'none';

    if (images.length === 0) {
        showNotification("Sorry, there are no images matching your search query. Please try again!");
    } else {
        renderImages(images);
        
        updateBtnStatus(page, maxPage, loadMoreButton, showNotification);
    }
}

function scrollElements() {
    const firstCard = divList.querySelector('.photo-card');
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}