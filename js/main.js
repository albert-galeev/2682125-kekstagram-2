import { renderThumbnails } from './render-thumbnails.js';
import { getPhotos } from './data.js';

const photos = getPhotos();

renderThumbnails(photos);
