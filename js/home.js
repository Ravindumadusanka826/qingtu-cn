// Home Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Testimonials Slider
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
    
    // Auto slide every 5 seconds
    let autoSlideInterval = setInterval(goToNextSlide, 5000);
    
    // Pause auto slide when hovering over slider
    testimonialsSlider.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });
    
    testimonialsSlider.addEventListener('mouseleave', () => {
      autoSlideInterval = setInterval(goToNextSlide, 5000);
    });
    
    // Initialize slider display
    updateSliderDisplay();
  }
  
  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 800) {
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    });
  }
  
  // Initialize header scroll effect
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'var(--shadow-md)';
      } else {
        header.style.backgroundColor = 'var(--white)';
        header.style.boxShadow = 'var(--shadow-sm)';
      }
    });
  }
});