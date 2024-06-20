import axios from 'axios';

export async function getGallery(query) {
    const API_KEY = '44394014-4230f595acf8cb42e98735a97';
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40
    });

    const url = `${BASE_URL}${END_POINT}?${params}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        if (data.hits.length === 0) {
            throw new Error("Sorry, there are no images matching your search query. Please try again!");
        }
        return data.hits;
} catch(error) {
    console.error('Error fetching the images:', error);
         throw error;
}
}
