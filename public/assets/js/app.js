const app = {
  unsplashClientId: 'MxI8CKViEPsdlv5Hp44PpJyW1S6Zow289d38_HVgFsc',
  maxThumbs: 12,
  imagesLength: Array.from(Array.from({ length: 42 }).keys()),
  displayedImg: [],
  newWallButton: document.querySelector('#newWallButton'),
  thumbnail: document.querySelector('.thumbnail'),

  async init() {
    // Initialize modules
    await tilt.init();
    await form.init();
    await animation.init();

    // Initialize Thumbnails
    app.generateThumbnails();

    app.newWallButton.addEventListener('click', app.newWall);
  },

  /**
   * Create a new wall on button click
   * @returns {void}
   */
  newWall() {
    const { thumbnail } = app;

    while (thumbnail.firstChild) {
      thumbnail.lastChild.remove();
    }

    app.generateThumbnails();
  },

  /**
   * Create a new wall on button click
   * @returns {void}
   */
  async generateThumbnails() {
    const { thumbnail } = app;
    const results = await app.fetchImages();

    for (const imageData of results) {
      const thumbnailImg = app.createThumbnail(imageData);
      thumbnail.append(thumbnailImg);
    }

    app.initVanillaTilt();
  },

  async fetchImages() {
    const { maxThumbs, unsplashClientId } = app;
    const defaultSearchParam = 'cat'
    const randomPageNumber = Math.floor(Math.random() * 150) + 1;

    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${defaultSearchParam}&page=${randomPageNumber}&per_page=${maxThumbs}&client_id=${unsplashClientId}`);
      const data = await response.json();

      return data.results;
    } catch (error) {
      return console.error('Error fetching images: ', error);
    }
  },

  /**
   * @param {Object} data
   * @returns {HTMLImageElement}
   */
  createThumbnail(imageData) {
    const thumbnailImg = document.createElement('img');

    thumbnailImg.src = imageData.urls.small;
    thumbnailImg.alt = imageData.alt_description;
    thumbnailImg.title = imageData.alt_description;
    thumbnailImg.classList.add('thumb');

    thumbnailImg.addEventListener('click', () => {
      window.open(imageData.links.html, '_blank', 'noopener,noreferrer');
    });

    return thumbnailImg;
  },

  initVanillaTilt() {
    VanillaTilt.init(document.querySelectorAll('.thumb'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
      axis: 'x',
    });
  },
};

// Onclick function
const toggleMenu = () => {
  const burger = document.querySelector('.burgerToggle');
  const nav = document.querySelector('.nav');

  burger.classList.toggle('active');
  nav.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', app.init);
