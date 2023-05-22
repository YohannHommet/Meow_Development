const app = {
    maxThumbs: 12,
    imagesLength: Array.from(Array(42).keys()),
    displayedImg: [],
    newWallButton: document.querySelector("#newWallButton"),
    thumbnail: document.querySelector(".thumbnail"),

    init: () => {
        tilt.init();
        form.init();

        // Update nav style on scroll
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar')
            navbar.classList.toggle('sticky', window.scrollY > 0)
        });

        app.newWallButton.addEventListener('click', app.newWall);
        app.generateThumbnails();
    },

    /**
     * Create a new wall on button click
     * @returns {void}
     */
    newWall: () => {
        const { thumbnail } = app;

        while (thumbnail.firstChild) {
            thumbnail.removeChild(thumbnail.lastChild);
        }

        app.generateThumbnails();
    },

    /**
     * Create a new wall on button click
     * @returns {void}
     */
    generateThumbnails: () => {
        const { maxThumbs, thumbnail } = app;
        const numbers = new Set();

        for (let i = 0; i < maxThumbs; i++) {
            let randomNumber;
        
            do {
              randomNumber = app.getRandomNumber();
            } while (numbers.has(randomNumber));
        
            numbers.add(randomNumber);
            const thumbnailImg = app.createThumbnail(randomNumber);
            thumbnail.appendChild(thumbnailImg);
          }

        app.initVanillaTilt();
    },

    /**
     * @returns {number}
     **/
    getRandomNumber: () => {
        return Math.floor(Math.random() * app.imagesLength.length);
    },
    
    /**
     * @param {number} number 
     * @returns {HTMLImageElement}
     */
    createThumbnail: (number) => {
        const thumbnailImg = document.createElement("img");
        const src = `/assets/img/cats/sm_${number}.jpg`;
    
        // Set attributes
        thumbnailImg.src = src;
        thumbnailImg.setAttribute(`data-tilt-${number}`, '');
        thumbnailImg.alt = `Cat image n°${number}`;
        thumbnailImg.classList.add('thumb');
    
        return thumbnailImg;
    },

    initVanillaTilt: () => {
        VanillaTilt.init(document.querySelectorAll(".thumb"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
            axis: 'x',
        });
    }
}

// Onclick function
const toggleMenu = () => {
    const burger = document.querySelector(".burgerToggle");
    const nav = document.querySelector(".nav");

    burger.classList.toggle("active");
    nav.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', app.init);
