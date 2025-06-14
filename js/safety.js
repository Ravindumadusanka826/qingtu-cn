// Safety Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Regulations Tabs
  const regulationTabs = document.querySelectorAll('.regulations .tab-btn');
  if (regulationTabs.length > 0) {
    regulationTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        const tabPanels = document.querySelectorAll('.regulations .tab-panel');
        
        // Remove active class from all tabs and panels
        regulationTabs.forEach(t => t.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to selected tab and panel
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
  
  // Safety Features Animation
  const safetyFeatures = document.querySelectorAll('.safety-features .feature-box');
  if (safetyFeatures.length > 0) {
    safetyFeatures.forEach((feature, index) => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(30px)';
      
      // Observer to trigger animation when in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              feature.style.opacity = '1';
              feature.style.transform = 'translateY(0)';
              feature.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            }, index * 150); // Staggered animation
            observer.unobserve(feature);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(feature);
    });
  }
  
  // Dashboard Features Animation
  const dashboardFeatures = document.querySelectorAll('.dashboard-features li');
  if (dashboardFeatures.length > 0) {
    dashboardFeatures.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateX(-20px)';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateX(0)';
              item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            }, index * 100); // Staggered animation
            observer.unobserve(item);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(item);
    });
  }
  
  // Safety Stats Counter Animation
  const safetyStats = document.querySelectorAll('.safety-stats .stat h3');
  if (safetyStats.length > 0) {
    const animateValue = (element, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        let value = end;
        if (end.includes('%')) {
          const numericEnd = parseFloat(end);
          value = Math.floor(progress * numericEnd) + '%';
        } else if (end.includes('/')) {
          value = end; // Just display as is for ratios
        } else {
          const numericEnd = parseFloat(end);
          value = Math.floor(progress * numericEnd);
          if (end.includes('k')) value += 'k';
          else if (end.includes('M')) value += 'M';
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
          safetyStats.forEach(stat => {
            const endValue = stat.textContent;
            stat.textContent = '0';
            animateValue(stat, 0, endValue, 1500);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    statsObserver.observe(document.querySelector('.safety-stats'));
  }
});