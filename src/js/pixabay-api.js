import axios from 'axios';

export async function getGallery(query, page) {
    const API_KEY = '44394014-4230f595acf8cb42e98735a97';
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/'; 
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page
    });
    const url = `${BASE_URL}${END_POINT}`;
    try {
        const response = await axios.get(url, { params });
        if (response.status !== 200) {
            throw new Error('Failed to fetch images');
        }
        const data = response.data;
        return  { hits: data.hits, totalHits: data.totalHits };
    } catch(error) {
    console.error('Error fetching the images:', error);
         throw error;
}
}



