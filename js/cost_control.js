// Cost Control Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initHeroAnimation();
  initSolutionsAnimation();
  initCalculator();
  initStatsCounters();
});

// Hero Section Animation
function initHeroAnimation() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  // Parallax effect
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  // Animate elements when they come into view
  const heroElements = heroSection.querySelectorAll('[data-aos]');
  animateElements(heroElements);
}

// Solutions Section Animation
function initSolutionsAnimation() {
  const solutionsSection = document.querySelector('.solutions-section');
  if (!solutionsSection) return;

  const solutionCards = solutionsSection.querySelectorAll('.solution-card');
  animateElements(solutionCards, 100);
}


// Stats Counters Animation
function initStatsCounters() {
  const statsElements = document.querySelectorAll('.stat-number, .metric-number');
  if (statsElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statsElements.forEach(element => {
    observer.observe(element);
  });
}

// Helper function to animate counters
function animateCounter(element) {
  const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
  const suffix = element.textContent.replace(/[\d]/g, '');
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    if (current < target) {
      current += increment;
      element.textContent = Math.ceil(current) + suffix;
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + suffix;
    }
  };

  updateCounter();
}

// Helper function to animate elements
function animateElements(elements, staggerDelay = 50) {
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }, index * staggerDelay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    observer.observe(element);
  });
}