// Animation utilities for the website

/**
 * Initialize animations for elements that should animate when they enter the viewport
 * @param {string} selector - CSS selector for elements to animate
 */
export function initScrollAnimations(selector = '[data-aos]') {
  const elements = document.querySelectorAll(selector);
  
  if (elements.length === 0) return;
  
  // Set initial state for all elements
  elements.forEach(element => {
    const animationType = element.getAttribute('data-aos');
    element.style.opacity = '0';
    
    // Set initial transform based on animation type
    switch (animationType) {
      case 'fade-up':
        element.style.transform = 'translateY(40px)';
        break;
      case 'fade-down':
        element.style.transform = 'translateY(-40px)';
        break;
      case 'fade-left':
        element.style.transform = 'translateX(40px)';
        break;
      case 'fade-right':
        element.style.transform = 'translateX(-40px)';
        break;
      case 'zoom-in':
        element.style.transform = 'scale(0.9)';
        break;
      case 'zoom-out':
        element.style.transform = 'scale(1.1)';
        break;
    }
  });
  
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const delay = parseInt(element.getAttribute('data-aos-delay') || '0', 10);
        
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translate(0) scale(1)';
          element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }, delay);
        
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.2 });
  
  // Observe all elements
  elements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * Animate a staggered list of elements
 * @param {string} containerSelector - CSS selector for the container
 * @param {string} itemSelector - CSS selector for the items to animate
 * @param {string} direction - Animation direction ('up', 'down', 'left', 'right')
 * @param {number} staggerDelay - Delay between each item animation
 */
export function animateStaggeredList(containerSelector, itemSelector, direction = 'up', staggerDelay = 100) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  
  const items = container.querySelectorAll(itemSelector);
  if (items.length === 0) return;
  
  // Set initial state
  items.forEach(item => {
    item.style.opacity = '0';
    
    switch (direction) {
      case 'up':
        item.style.transform = 'translateY(20px)';
        break;
      case 'down':
        item.style.transform = 'translateY(-20px)';
        break;
      case 'left':
        item.style.transform = 'translateX(20px)';
        break;
      case 'right':
        item.style.transform = 'translateX(-20px)';
        break;
    }
  });
  
  // Create observer
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translate(0)';
          item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, index * staggerDelay);
      });
      
      observer.unobserve(container);
    }
  }, { threshold: 0.1 });
  
  observer.observe(container);
}

/**
 * Create a parallax scrolling effect for a background element
 * @param {string} selector - CSS selector for the element
 * @param {number} speed - Scrolling speed factor (0.5 is half speed, 2 is double)
 */
export function initParallax(selector, speed = 0.5) {
  const element = document.querySelector(selector);
  if (!element) return;
  
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const offset = scrollPosition * speed;
    
    element.style.backgroundPositionY = `${offset}px`;
  });
}