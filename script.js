const mainPhoto = document.querySelector('.photo-main img');
const albumPhotos = document.querySelectorAll('.photo-album img');

albumPhotos.forEach((photo) => {
  photo.addEventListener('click', () => {
    mainPhoto.src = photo.src;
  });
});
