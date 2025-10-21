// Grab the essentials
const sliderTrack = document.querySelector('.info-track');
const slides = Array.from(document.querySelectorAll('.info-slide'));
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let index = 0;

// Get slide width dynamically
function getSlideWidth() {
  return slides[0].getBoundingClientRect().width;
}

// Move to a specific slide
function moveToSlide(i) {
  const width = getSlideWidth();
  sliderTrack.style.transform = `translateX(-${width * i}px)`;
}

// Next button
nextBtn.addEventListener('click', () => {
  index++;
  if (index >= slides.length) index = 0; // loop to start
  moveToSlide(index);
});

// Previous button
prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) index = slides.length - 1; // loop to end
  moveToSlide(index);
});

// Auto-play every 6 seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  moveToSlide(index);
}, 6000);

// Adjust on window resize
window.addEventListener('resize', () => moveToSlide(index));
