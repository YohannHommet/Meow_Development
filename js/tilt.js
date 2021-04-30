const tilt = 
{
    init: () => 
    {
        VanillaTilt.init(document.querySelectorAll(".thumb"), {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 0.8,
                axis: 'x',
            }),
            console.log('tilt')

            VanillaTilt.init(document.querySelectorAll(".card"), {
                max: 10,
                speed: 100,
                glare: true,
                "max-glare": 0.1,
                perspective: 500,
            });
    }
}


document.addEventListener('DOMContentLoaded', tilt.init);