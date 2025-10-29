const loader = document.getElementById('loader');

export function showLoader() {
  loader.classList.add('loader--visible');
}

export function hideLoader() {
  loader.classList.remove('loader--visible');
}

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

export function addGallery(images) {
  const gallery = document.getElementById('gallery');
  const markup = images.map(
    ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}" data-caption="${tags}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item"><span class="label">Likes</span><span class="value">${likes}</span></div>
          <div class="info-item"><span class="label">Views</span><span class="value">${views}</span></div>
          <div class="info-item"><span class="label">Comments</span><span class="value">${comments}</span></div>
          <div class="info-item"><span class="label">Downloads</span><span class="value">${downloads}</span></div>
        </div>
      </li>
    `
  ).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
