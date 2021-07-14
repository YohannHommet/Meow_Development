<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Web Agnecy made by cats !">
    <meta name="keywords" content="web agency cats www html css js php">
    
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    
    <title>Meow Development</title>
</head>
<body>
    
    <div class="container">
    <!-- ?HEADER -->
    <header class="navbar" id="header" role="navigation">
        <a href="#" class="logo">Meow Development<span style="margin-left: 10px; font-size: 1.7rem;">&hearts;</span></a>

        <div class="burgerToggle" onclick="toggleMenu()"></div>

        <nav class="nav">
            <a class="underline" href="#banner" onclick="toggleMenu()">Accueil</a>
            <a class="underline" href="#wall" onclick="toggleMenu()">The Wall</a>
            <a class="underline" href="#team" onclick="toggleMenu()">The Meow Team</a>
            <a class="underline" href="#contact" onclick="toggleMenu()">Contact</a>
        </nav>
    </header>
    
        <main>
            
            <!-- BANNER -->
            <section id="banner" role="img">

                <div class="content">
                    <h1 class="title">Catisfaction </h1>
                    <p>Always Satisfied,</p>
                    <p>Meow Approved !</p>
                </div>
                
            </section>
            
            <!-- THE WALL -->
            <section id="wall">
                
                <h2>The <span class="pink sub">W</span>all</h2>
                
                <div class="thumbnail"></div>
                
                <div class="button-block">
                     <button type="button" id="newWallButton" class="button">New Wall !</button>
                </div>
                
            </section>
            
            <!-- THE TEAM -->
            <section id="team">
                
                <div class="block">
                    <div class="blockDescription">
                        <h2>The Meow <span class="pink sub">T</span>eam</h2>
                        <p>They are only two, but they are skilled !</p>
                    </div>
                    <div class="bg"></div>
                </div>
                
                <div class="team">
                    <div class="card">
                        <div class="imgBx">
                            <img src="assets/img/team/sm_22.jpg" alt="Yohann">
                        </div>
                        <div class="card-content">
                            <p>
                                Passionné en développement web depuis 2019, je suis spécialisé en backend avec PHP et son Framework Symfony.. J'ai beaucoup appris seul avant de me lancer dans une formation en développement web avec l'école O'Clock. Je suis aujourd'hui à la recherche d'un stage pour compléter mon apprentissage.
                            </p>
                            <h3 class="name blue">Yohann</h3>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="imgBx">
                            <img src="assets/img/team/sm_17.jpg" alt="Justine">
                        </div>
                        <div class="card-content">
                            <p>
                                J'ai fait ma formation en développement à Angers, puis après un stage de 4 mois, j'ai trouvé un poste d'intégratrice développeuse Wordpress dans une agence sur Cholet. Je fais de l'intégration, du débogage, de la mise en ligne, et je travaille sur pleins de projets très intéressants !
                            </p>
                            <h3 class="name pink">Justine</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <!-- CONTACT -->
            <section id="contact">
                
                <div class="block">
                    <h2 class="title">Send us a <span class="pink sub">M</span>eow !</h2>
                    <p>Here you can send us a cute message if you need more informations about us !</p>
                </div>
                
                <form action="https://formsubmit.co/58d369dbd561e229e37901a22c3008df" method="post" id="contactForm">
                    <div class="contactForm">
                        <div class="inputBox">
                            <label for="name">
                                <input type="text" name="name" id="name" placeholder="Name*" required>
                            </label>
                        </div>
                        <div class="inputBox">
                            <label for="email">
                                <input type="email" name="email" id="email" placeholder="Email*" required>
                            </label>
                        </div>
                        <div class="inputBox last">
                            <label for="message">
                                <textarea name="message" id="message" placeholder="Meow Message !*" required></textarea>
                            </label>
                        </div>

                        <small class="js-errors"></small>

                        <div class="inputBox center" style="margin-bottom: 0;">
                            <button type="submit" class="js-submitFormButton">Send</button>
                        </div>
                    </div>
                </form>
                
            </section>
            
        </main>
        
    </div>
        
        <!-- ?FOOTER -->
        <footer id="footer">
            
            <div class="block">
                <h3>Meow Development Agency</h3>
                <p><span class="blue footer-letter">Y</span>ohann & <span class="pink footer-letter">J</span>ustine</p>
            </div>

            <div class="social">
                <ul class="">
                    <li>
                        <a href="https://twitter.com/YoH_DevBack" target="_blank" ><i class="fab fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/yohann-hommet/" target="_blank"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/YohannHommet" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>

            <div class="block">
                <p class="love small">Made with <span style="text-decoration: line-through;">Cats</span> Love, Copyright &copy; <?= date("Y") ?></p>
            </div>


        </footer>

    
    <!-- SCRIPT -->
    <script type="text/javascript" src="assets/js/app.js"></script>
    <script type="text/javascript" src="assets/js/form.js"></script>
    <script type="text/javascript" src="assets/js/tilt.js"></script>
    <script type="text/javascript" src="assets/js/vanilla-tilt.min.js"></script>

</body>
</html>