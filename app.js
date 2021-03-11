window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('sticky', window.scrollY > 0)

    
})


function toggleMenu() {
  const burger = document.querySelector(".burgerToggle");
  const nav = document.querySelector(".nav");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

const img = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
];

displayedImg = [];
const thumbnail = document.querySelector(".thumbnail");


function createThumbnail() {

  const test = document.createElement("IMG");
  var numbers = []; // new empty array  
  var n, p;

  for (let i = 0; i < 12; i++) {
    displayedImg[i] = document.createElement("img");
    do {
      n = Math.floor(Math.random() * img.length);
      p = numbers.includes(n);
      if (!p) {
        numbers.push(n);
        displayedImg[i].src = "./img/sm_" + n + ".jpg";
        displayedImg[i].classList.add('thumb')
      }
    } while (p);
    
    thumbnail.appendChild(displayedImg[i]);
  }

} createThumbnail();



function newWall() {
    
  while (thumbnail.firstChild) {
    thumbnail.removeChild(thumbnail.lastChild);
  }

  createThumbnail()
  
}

