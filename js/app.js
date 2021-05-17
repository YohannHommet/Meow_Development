const app = {

    // Nombre d'images sur lesquelles il faut boucler dans createThumbnail()
    img: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
    displayedImg: [],

    newWallButton:      document.querySelector("#newWallButton"),
    nameInput:          document.querySelector('#name'),
    emailInput:         document.querySelector('#email'),
    messageInput:       document.querySelector('#message'),
    submitFormButton:   document.querySelector('.js-submitFormButton'),


    init: () => {
        // Évènement pour changer la nav au scroll
        window.addEventListener('scroll', function () {
            const navbar = document.querySelector('.navbar')
            navbar.classList.toggle('sticky', window.scrollY > 0)
        });

        // Pour gérer le formulaire
        app.nameInput.addEventListener('keyup', app.handleNameInput);
        app.emailInput.addEventListener('keyup', app.handleEmailInput);
        app.messageInput.addEventListener('keyup', app.handleMessageInput);


        // Button qui permet de changer le wall
        app.newWallButton.addEventListener('click', app.newWall);

        // Pour afficher un wall au démarrage
        app.createThumbnail();
    },


    /**
     * Create a new wall on button click
     */
    newWall: () => {
        const thumbnail = document.querySelector(".thumbnail");

        while (thumbnail.firstChild) {
            thumbnail.removeChild(thumbnail.lastChild);
        }

        app.createThumbnail();
    },


    /**
     * Create a new wall every page refresh
     */
    createThumbnail: () => {
        const thumbnail = document.querySelector(".thumbnail");

        let numbers = [];
        let n, p;

        // On ne veut que 12 img dans le wall
        for (let i = 0; i < 12; i++) {
            app.displayedImg[i] = document.createElement("img");

            // Choisi une image aléatoire d'après la taille du tableau d'img[] et évite les répétitions.
            do {
                n = Math.floor(Math.random() * app.img.length);
                p = numbers.includes(n);

                if (!p) {
                    numbers.push(n);
                    app.displayedImg[i].src = "./img/cats/sm_" + n + ".jpg";
                    app.displayedImg[i].classList.add('thumb');
                }
            } while (p);

            thumbnail.appendChild(app.displayedImg[i]);
        }

        VanillaTilt.init(document.querySelectorAll(".thumb"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.8,
            axis: 'x',
        });

    },


    // Fonctions pour la vérification des input sur la page contact
    handleNameInput: () => {
        let nameValue = app.nameInput.value;

        if (nameValue.length < 3) {
            app.nameInput.style.border = '1px #ff0073 solid';
            app.submitFormButton.disabled = true;
            app.submitFormButton.style.cursor = 'not-allowed';
            return true;
        } else {
            app.nameInput.style.border = '1px #555 solid';
            app.submitFormButton.disabled = false;
            app.submitFormButton.style.cursor = 'pointer';
            return false
        }
    },
    handleEmailInput: () => {
        let emailValue = app.emailInput.value;
        let emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailTest = emailFormat.test(emailValue);

        if (emailTest === true) {
            console.log(emailTest);
            app.emailInput.style.border = '1px #555 solid';
            app.submitFormButton.disabled = false;
            app.submitFormButton.style.cursor = 'pointer';
            return true;
        } else {
            app.emailInput.style.border = '1px #ff0073 solid';
            app.submitFormButton.disabled = true;
            app.submitFormButton.style.cursor = 'not-allowed';
            return false;
        }
    },
    handleMessageInput: () => {
        let messageValue = app.messageInput.value;

        if (messageValue.length < 6) {
            app.messageInput.style.border = '1px #ff0073 solid';
            app.submitFormButton.disabled = true;
            app.submitFormButton.style.cursor = 'not-allowed';
            return true;
        } else {
            app.messageInput.style.border = '1px #555 solid';
            app.submitFormButton.disabled = false;
            app.submitFormButton.style.cursor = 'pointer';
            return false
        }
    }

}


const toggleMenu = () => {
    const burger = document.querySelector(".burgerToggle");
    const nav = document.querySelector(".nav");

    burger.classList.toggle("active");
    nav.classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', app.init);