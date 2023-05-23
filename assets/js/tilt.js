const tilt = {
  init() {
    VanillaTilt.init(window.document.querySelectorAll('.thumb'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.8,
      axis: 'x',
    });

    VanillaTilt.init(window.document.querySelectorAll('.card'), {
      max: 10,
      speed: 100,
      glare: true,
      'max-glare': 0.1,
      perspective: 500,
    });
  },
};
