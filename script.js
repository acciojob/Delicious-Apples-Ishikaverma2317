// Change main photo when album image is clicked
const mainPhoto = document.querySelector('.photo-main img');
const albumPhotos = document.querySelectorAll('.photo-album li img');

albumPhotos.forEach(photo => {
  photo.addEventListener('click', () => {
    mainPhoto.src = photo.src;
  });
});
