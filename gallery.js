const lightboxContainer = document.getElementById('lightbox-container');
const lightboxContent = document.getElementById('lightbox-content');
const closeLightboxButton = document.getElementById('close-lightbox');
document.querySelectorAll('.lightbox-image').forEach((image) => {
    image.addEventListener('click', () => {
        const imageSource = image.src;
        const imageAlt = image.alt;
        lightboxContent.querySelector('img').src = imageSource;
        lightboxContent.querySelector('img').alt = imageAlt;
        lightboxContainer.style.display = 'block';
    });
});
closeLightboxButton.addEventListener('click', () => {
    lightboxContainer.style.display = 'none';
});