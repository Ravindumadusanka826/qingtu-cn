// Online Transaction Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Payment Method Animation
  const paymentMethods = document.querySelectorAll('.payment-method');
  if (paymentMethods.length > 0) {
    paymentMethods.forEach((method, index) => {
      method.style.opacity = '0';
      method.style.transform = 'translateY(30px)';
      
      // Observer to trigger animation when in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              method.style.opacity = '1';
              method.style.transform = 'translateY(0)';
              method.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            }, index * 150); // Staggered animation
            observer.unobserve(method);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(method);
    });
  }
  
  // Transaction Process Animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length > 0) {
    timelineItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateX(0)';
              item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            }, index * 200); // Staggered animation
            observer.unobserve(item);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(item);
    });
  }
  
  // Security List Animation
  const securityItems = document.querySelectorAll('.security-list li');
  if (securityItems.length > 0) {
    securityItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
              item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            }, index * 100); // Staggered animation
            observer.unobserve(item);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(item);
    });
  }
  
  // Pricing Table Row Highlight
  const pricingRows = document.querySelectorAll('.pricing-table tbody tr');
  if (pricingRows.length > 0) {
    pricingRows.forEach(row => {
      row.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'var(--gray-100)';
        this.style.transition = 'background-color 0.3s ease';
      });
      
      row.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
      });
    });
  }
  
  // Transaction Stats Counter Animation
  const transactionStats = document.querySelectorAll('.transaction-stats .stat h3');
  if (transactionStats.length > 0) {
    const animateValue = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        let value = end;
        if (end.includes('%')) {
          const numericEnd = parseFloat(end);
          value = Math.floor(progress * numericEnd) + '%';
        } else if (end.includes('+')) {
          value = '$' + Math.floor(progress * parseFloat(end.replace(/\$|\+|M/g, ''))) + 'M+';
        } else if (end.includes('hr')) {
          value = Math.floor(progress * parseFloat(end.replace('hr', ''))) + 'hr';
        } else if (end.includes('M')) {
          value = '$' + Math.floor(progress * parseFloat(end.replace(/\$|M/g, ''))) + 'M';
        } else {
          value = Math.floor(progress * parseInt(end));
        }
        
        element.textContent = value;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          transactionStats.forEach(stat => {
            const endValue = stat.textContent;
            stat.textContent = '0';
            animateValue(stat, 0, endValue, 1500);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    statsObserver.observe(document.querySelector('.transaction-stats'));
  }
  
  // Simulate transaction process on page load
  function simulateTransactionProcess() {
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    const timelineContents = document.querySelectorAll('.timeline-content');
    
    if (timelineMarkers.length === 0) return;
    
    // Reset all items
    timelineMarkers.forEach((marker, i) => {
      marker.style.backgroundColor = 'var(--gray-400)';
      timelineContents[i].style.color = 'var(--gray-400)';
      timelineContents[i].querySelector('h3').style.color = 'var(--gray-400)';
    });
    
    // Animate the steps sequentially
    let currentStep = 0;
    
    function activateStep(step) {
      if (step >= timelineMarkers.length) return;
      
      timelineMarkers[step].style.backgroundColor = 'var(--primary-color)';
      timelineMarkers[step].style.transition = 'background-color 0.5s ease-out';
      
      timelineContents[step].querySelector('h3').style.color = 'var(--primary-color)';
      timelineContents[step].querySelector('h3').style.transition = 'color 0.5s ease-out';
      
      timelineContents[step].querySelector('p').style.color = 'var(--gray-700)';
      timelineContents[step].querySelector('p').style.transition = 'color 0.5s ease-out';
      
      currentStep++;
      
      if (currentStep < timelineMarkers.length) {
        setTimeout(() => {
          activateStep(currentStep);
        }, 1000); // 1 second delay between steps
      }
    }
    
    // Start the process only if element is in viewport
    const processObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            activateStep(0);
          }, 500); // Start after half a second
          processObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    processObserver.observe(document.querySelector('.process-timeline'));
  }
  
  // Run transaction process animation
  simulateTransactionProcess();
});