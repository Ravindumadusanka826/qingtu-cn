// Global JavaScript Functions

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });
  }

  
  // Tab Functionality
  const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length > 0) {
      tabButtons.forEach(button => {
        button.addEventListener('click', function() {
          const tabGroup = this.closest('.tabs-nav').querySelectorAll('.tab-btn');
          const tabId = this.getAttribute('data-tab');
          const tabContent = document.querySelectorAll('.tab-panel');
          
          // Remove active class from all tabs
          tabGroup.forEach(tab => tab.classList.remove('active'));
          tabContent.forEach(content => content.classList.remove('active'));
          
          // Add active class to current tab
          this.classList.add('active');
          const activeContent = document.getElementById(tabId);
          if (activeContent) {
            activeContent.classList.add('active');
          }
        });
      });
    }
  
  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (elementPosition.top < windowHeight * 0.9) {
        const animationType = element.getAttribute('data-aos');
        const delay = element.getAttribute('data-aos-delay') || 0;
        
        setTimeout(() => {
          element.style.opacity = '1';
          
          if (animationType === 'fade-up') {
            element.style.transform = 'translateY(0)';
          } else if (animationType === 'fade-down') {
            element.style.transform = 'translateY(0)';
          } else if (animationType === 'fade-left') {
            element.style.transform = 'translateX(0)';
          } else if (animationType === 'fade-right') {
            element.style.transform = 'translateX(0)';
          }
          
          element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        }, delay);
        
        // Remove the element from the list after animation
        element.removeAttribute('data-aos');
      }
    });
  };
  
  // Initialize AOS elements
  const initAOS = function() {
    const elements = document.querySelectorAll('[data-aos]');
    
    elements.forEach(element => {
      element.style.opacity = '0';
      
      const animationType = element.getAttribute('data-aos');
      
      if (animationType === 'fade-up') {
        element.style.transform = 'translateY(50px)';
      } else if (animationType === 'fade-down') {
        element.style.transform = 'translateY(-50px)';
      } else if (animationType === 'fade-left') {
        element.style.transform = 'translateX(50px)';
      } else if (animationType === 'fade-right') {
        element.style.transform = 'translateX(-50px)';
      }
    });
    
    // Run once on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
  };
  
  // Initialize animations
  initAOS();
  
  // Counter Animation
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
  
  // Observe if counters are in view
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
  
  // Smooth scrolling for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const yOffset = -80;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    });
  });
});