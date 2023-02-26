const posterGallery = document.getElementById('poster-gallery');
const arrowBtnLeft = document.getElementById('arrow-btn-left');
const arrowBtnRight = document.getElementById('arrow-btn-right');
const posters = posterGallery.getElementsByTagName('img');
let currentIndex = 0;

function showPoster(index) {
  posters[index].classList.add('active');
}

function hidePoster(index) {
  posters[index].classList.remove('active');
}

function showNextPoster() {
  hidePoster(currentIndex);
  currentIndex = (currentIndex + 1) % posters.length;
  showPoster(currentIndex);
}

// show the first poster
showPoster(currentIndex);

// add a click event listener to the gallery
posterGallery.addEventListener('click', showNextPoster);
arrowBtnLeft.addEventListener('click', showNextPoster);
arrowBtnRight.addEventListener('click', showNextPoster);
