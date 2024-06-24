
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;

export function clearGallery() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
}

export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    const listContainer = document.createElement('ul');
    listContainer.classList.add('photo-list');

    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `
            <li class="photo-card">
                <a href="${largeImageURL}" class="gallery-link">
                    <img src="${webformatURL}" alt="${tags}" />
                </a>
                <ul class="info">
                <li><p><b>Downloads:</b></p> 
                    <p>${downloads}</p>
                    </li>
                    <li><p><b>Likes:</b></p> 
                    <p>${likes}</p>
                    </li>
                    <li><p><b>Views:</b></p> 
                    <p>${views}</p>
                    </li>
                    <li><p><b>Comments:</b></p> 
                    <p>${comments}</p>
                    </li>
                    
                </ul>
            </li>
        `;
    }).join('');

    listContainer.innerHTML = markup;
    gallery.appendChild(listContainer);

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

export function showLoadBtn() {
    const loadMoreButton = document.querySelector('.load-more-btn');
    loadMoreButton.style.display = 'block';
}

export function hideLoadBtn() {
    const loadMoreButton = document.querySelector('.load-more-btn');
    loadMoreButton.style.display = 'none';
}

export function updateBtnStatus(page, maxPage) {
    const loadMoreButton = document.querySelector('.load-more-btn');
    if (page >= maxPage) {
        hideLoadBtn();
        showNotification("We're sorry, but you've reached the end of search results.");
    } else {
        showLoadBtn();
    }
}
