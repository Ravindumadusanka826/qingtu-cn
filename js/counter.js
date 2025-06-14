// Cost Control Page Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize testimonial slider
  const testimonialsSlider = document.getElementById('testimonialsSlider');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.getElementById('prevTestimonial');
  const nextButton = document.getElementById('nextTestimonial');
  const dotsContainer = document.getElementById('testimonialDots');
  
  if (testimonialsSlider && testimonials.length > 0) {
    let currentIndex = 0;
    
    // Create dots for each testimonial
    testimonials.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
      
      dotsContainer.appendChild(dot);
    });
    
    // Set up initial display
    function updateSliderDisplay() {
      testimonialsSlider.style.transition = 'opacity 0.3s ease-out';
      testimonialsSlider.style.opacity = '0';
      
      setTimeout(() => {
        testimonials.forEach((testimonial, index) => {
          if (index === currentIndex) {
            testimonial.style.display = 'block';
          } else {
            testimonial.style.display = 'none';
          }
        });
        
        // Update active dot
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
        
        testimonialsSlider.style.opacity = '1';
      }, 300);
    }
    
    function goToSlide(index) {
      currentIndex = index;
      updateSliderDisplay();
    }
    
    function goToNextSlide() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateSliderDisplay();
    }
    
    function goToPrevSlide() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateSliderDisplay();
    }
    
    // Set up event listeners for next and previous buttons
    if (nextButton) {
      nextButton.addEventListener('click', goToNextSlide);
    }
    
    if (prevButton) {
      prevButton.addEventListener('click', goToPrevSlide);
    }
    
    // Initialize slider display
    updateSliderDisplay();
  }
  
  // Counter animation for stats
  const animateCounters = function() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000; // milliseconds
      const start = 0;
      const increment = target / (duration / 16);
      
      const updateCounter = () => {
        const current = parseInt(counter.textContent);
        
        if (current < target) {
          counter.textContent = Math.ceil(current + increment);
          setTimeout(updateCounter, 16);
        } else {
          counter.textContent = target;
        }
      };
      
      updateCounter();
    });
  };
  
  // Observe if stats section is in view
  if (document.querySelector('.counter')) {
    const observerOptions = {
      root: null,
      threshold: 0.1
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      counterObserver.observe(statsSection);
    }
  }
});