<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="./style/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    
    <title>Meow Development</title>
</head>
<body>
    
    <div class="container">
    
    <!-- ?HEADER -->
    <header class="navbar" id="header">
        <a href="#" class="logo">Meow Development<span style="margin-left: 10px;">&hearts;</span></a>

        <div class="burgerToggle" onclick="toggleMenu()"></div>

        <nav class="nav">
            <a class="underline" href="#header" onclick="toggleMenu()">Accueil</a>
            <a class="underline" href="#wall" onclick="toggleMenu()">The Wall</a>
            <a class="underline" href="#team" onclick="toggleMenu()">The Meow Team</a>
            <a class="underline" href="#contact" onclick="toggleMenu()">Contact</a>
        </nav>
    </header>
    
        <main>
            
            <!-- ?BANNER -->
            <section id="banner">

                <div class="content">
                    <h1 class="title">Catisfaction </h1>
                    <p>Always Satisfied,</p>
                    <p>Meow Approved !</p>
                </div>
                
            </section>
            
            
            <!-- ?THE WALL -->
            <section id="wall">
                
                <h2>The <span class="pink sub">W</span>all</h2>
                
                <div class="thumbnail"></div>
                
                <div class="button-block">
                     <button type="button" id="newWallButton" class="button">New Wall !</button>
                </div>
                
            </section>
            
            
            <!-- ?THE TEAM -->
            <section id="team">
                
                <div class="block">
                    <div class="blockDescription">
                        <h2>The Meow <span class="pink sub">T</span>eam</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur, laboriosam animi</p>
                    </div>
                    <div class="bg"></div>
                </div>
                
                <div class="team">
                    <div class="card">
                        <div class="imgBx">
                            <img src="/img/team/sm_22.jpg" alt="">
                        </div>
                        <div class="card-content">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum velit quas tempora voluptatum atque culpa aut error. Repudiandae nostrum perferendis maiores delectus corrupti et ullam? Expedita eveniet perspiciatis quidem quibusdam.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, asperiores minus sed saepe praesentium aperiam.
                            </p>
                            <h3 class="name blue">Yohann</h3>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="imgBx">
                            <img src="/img/team/sm_17.jpg" alt="">
                        </div>
                        <div class="card-content">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum velit quas tempora voluptatum atque culpa aut error. Repudiandae nostrum perferendis maiores delectus corrupti et ullam? Expedita eveniet perspiciatis quidem quibusdam.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, asperiores minus sed saepe praesentium aperiam.
                            </p>
                            <h3 class="name pink">Justine</h3>
                        </div>
                    </div>
                </div>
            </section>
            
            
            <!-- ?CONTACT -->
            <section id="contact">
                
                <div class="block">
                    <h2 class="title">Send us a <span class="pink sub">M</span>eow !</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora pariatur, laboriosam animi</p>
                </div>
                
                <form action="php/contact_form.php" method="post">
                    <div class="contactForm">
                        <div class="inputBox">
                            <input type="text" name="name" id="name" placeholder="Name*" required>
                        </div>
                        <div class="inputBox">
                            <input type="email" name="email" id="email" placeholder="Email*" required>
                        </div>
                        <div class="inputBox">
                            <textarea name="message" id="message" placeholder="Meow Message !*" required></textarea>
                        </div>
                        <div class="inputBox center" style="margin-bottom: 0;">
                            <button type="submit">Send</button>
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
                <p class="love">Made with <span style="text-decoration: line-through;">Cats</span> Love, Copyright &copy; <?= date("Y") ?> </p>
            </div>
            
        </footer>

    
    <!-- SCRIPT -->
    <script type="text/javascript" src="./js/app.js"></script>
    <script type="text/javascript" src="./js/tilt.js"></script>
    <script type="text/javascript" src="./js/vanilla-tilt.min.js"></script>

</body>
</html>