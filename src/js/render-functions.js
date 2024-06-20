import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getGallery } from './pixabay-api.js';

let lightbox;


export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
            <div class="photo-card">
                <a href="${largeImageURL}" class="gallery-link">
                    <img src="${webformatURL}" alt="${tags}"/>
                </a>
                <div class="info">
                    <p><b>Likes:</b> ${likes}</p>
                    <p><b>Views:</b> ${views}</p>
                    <p><b>Comments:</b> ${comments}</p>
                    <p><b>Downloads:</b> ${downloads}</p>
                </div>
            </div>
        `;
    }).join('');
    gallery.insertAdjacentHTML('beforeend', markup);

    if (lightbox) {
        lightbox.destroy();
    }
    lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}

export function showNotification(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        backgroundColor: '#ef4040',
        theme: 'dark',
    });
}
