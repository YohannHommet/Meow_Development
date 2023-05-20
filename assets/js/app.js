const app = {
    // Images pour le wall
    img: Array.from(Array(42).keys()),
    displayedImg: [],
    newWallButton: document.querySelector("#newWallButton"),

    init: () => {
        tilt.init();
        form.init();

        // Update nv style on scroll
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar')
            navbar.classList.toggle('sticky', window.scrollY > 0)
        });

        app.newWallButton.addEventListener('click', app.newWall);

        app.generateThumbnails();
    },

    /**
     * Create a new wall on button click
     */
    newWall: () => {
        const thumbnail = document.querySelector(".thumbnail");

        while (thumbnail.firstChild) {
            thumbnail.removeChild(thumbnail.lastChild);
        }

        app.generateThumbnails();
    },

    /**
     * Create a new wall every page refresh
     */
    generateThumbnails: () => {
        const thumbnail = document.querySelector(".thumbnail");

        const maxThumbs = 12;
        let numbers = [];
        let n, p;

        for (let i = 0; i < maxThumbs; i++) {
            app.displayedImg[i] = document.createElement("img");

            // Generate random list of numbers
            do {
                n = Math.floor(Math.random() * app.img.length);
                p = numbers.includes(n);

                if (!p) {
                    numbers.push(n);
                    // Add src with img fallback for IE
                    app.displayedImg[i].src = "/assets/img/cats/sm_" + n + ".jpg";
                    //  Add attributes
                    app.displayedImg[i].setAttribute('data-tilt-' + n, '');
                    app.displayedImg[i].alt = "Cat image n°" + n;
                    app.displayedImg[i].classList.add('thumb');
                }
            } while (p);

            thumbnail.appendChild(app.displayedImg[i]);
        }

        // Init VanillaTilt
        VanillaTilt.init(document.querySelectorAll(".thumb"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.8,
            axis: 'x',
        });
    },
}

// Onclick function
const toggleMenu = () => {
    const burger = document.querySelector(".burgerToggle");
    const nav = document.querySelector(".nav");

    burger.classList.toggle("active");
    nav.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', app.init);
