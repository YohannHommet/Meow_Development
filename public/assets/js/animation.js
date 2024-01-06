const animation = {
  navbar: document.querySelector('.navbar'),
  teamSection: document.querySelector('#team'),
  scrollToTopButton: document.querySelector('.link__scroll'),
  catisfactionTitle: document.querySelector('.title'),

  currentSentenceIndex: 0,
  currentCharIndex: 0,
  isDeleting: false,

  init() {
    animation.onScrollAnimations();
    animation.catisfactionTypingAnimation();
  },

  onScrollAnimations() {
    window.addEventListener('scroll', () => {
      animation.navBarAnimation();
      animation.teamCardsAnimation();
      animation.scrollToTopButtonAnimation();
    });
  },

  navBarAnimation() {
      animation.navbar.classList.toggle('sticky', scrollY > 0);
  },

  teamCardsAnimation() {
      const teamSectionPosition = animation.teamSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 3;

      if (teamSectionPosition < screenPosition) {
        team.classList.add('active');
      }
  },

  scrollToTopButtonAnimation() {
    animation.scrollToTopButton.classList.toggle('visible', scrollY > 500)
  },

  catisfactionTypingAnimation() {
    const sentence = `Catisfaction !`
    let speed = Math.floor(Math.random() * 350) + 10;

    if (!animation.isDeleting && animation.currentCharIndex <= sentence.length) {
      animation.catisfactionTitle.textContent = sentence.substring(0, animation.currentCharIndex);
      animation.currentCharIndex++;
    }

    if (animation.isDeleting && animation.currentCharIndex >= 0) {
      animation.catisfactionTitle.textContent = sentence.substring(0, animation.currentCharIndex);
      animation.currentCharIndex--;
    }

    if (animation.currentCharIndex === sentence.length + 1) {
      animation.isDeleting = true;
      // Pause before deleting
      speed = 2000;
    } else if (animation.currentCharIndex === 0) {
      animation.isDeleting = false;
    }

    setTimeout(animation.catisfactionTypingAnimation, speed);
  }

};
