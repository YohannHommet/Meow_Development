const animation = {
  navbar: document.querySelector('.navbar'),
  teamSection: document.querySelector('#team'),

  init() {
    window.addEventListener('scroll', function () {
      // Navbar animation
      animation.navbar.classList.toggle('sticky', scrollY > 0);

      // Team cards animation
      const teamSectionPosition = animation.teamSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 3;

      if (teamSectionPosition < screenPosition) {
        team.classList.add('active');
      }
    })
  }
}
