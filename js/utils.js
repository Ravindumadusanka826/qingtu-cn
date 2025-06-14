// General utility functions for the website

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - The debounce delay in milliseconds
 * @returns {Function} - The debounced function
 */
export function debounce(func, wait = 300) {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Format a number as currency
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: CNY)
 * @returns {string} Formatted currency string
 */
export function formatCurrency(amount, currency = 'CNY') {
  const formatter = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  
  return formatter.format(amount);
}

/**
 * Format a date to a human-readable string
 * @param {Date|string} date - Date object or date string
 * @param {string} locale - Locale for formatting (default: en-US)
 * @returns {string} Formatted date string
 */
export function formatDate(date, locale = 'en-US') {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(dateObj);
}

/**
 * Calculate distance between two locations
 * @param {string} origin - Origin location name
 * @param {string} destination - Destination location name
 * @returns {string} Formatted distance string
 */
export function calculateDistance(origin, destination) {
  // In a real app, this would use a maps API
  // This is just a mock function that returns fake data
  
  // Predefined distances between major cities in km
  const distances = {
    'shanghai-beijing': 1213,
    'beijing-shanghai': 1213,
    'guangzhou-shenzhen': 140,
    'shenzhen-guangzhou': 140,
    'beijing-tianjin': 137,
    'tianjin-beijing': 137,
    'shanghai-hangzhou': 180,
    'hangzhou-shanghai': 180,
    'chongqing-chengdu': 380,
    'chengdu-chongqing': 380
  };
  
  // Normalize and create key
  const normalizedOrigin = origin.toLowerCase().replace(/\s+/g, '');
  const normalizedDestination = destination.toLowerCase().replace(/\s+/g, '');
  const key = `${normalizedOrigin}-${normalizedDestination}`;
  
  // Return distance if found, otherwise return a random realistic distance
  if (distances[key]) {
    return `${distances[key]} km`;
  } else {
    // Generate a random distance between 100 and 2000 km
    const randomDistance = Math.floor(Math.random() * 1900) + 100;
    return `${randomDistance} km`;
  }
}

/**
 * Validate form input
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} True if valid, false if invalid
 */
export function validateForm(form) {
  const inputs = form.querySelectorAll('input, select, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
    // Skip inputs that are not required
    if (!input.hasAttribute('required')) {
      return;
    }
    
    // Check if input is empty
    if (!input.value.trim()) {
      isValid = false;
      highlightInvalidInput(input);
    } else {
      removeInvalidHighlight(input);
    }
    
    // Add specific validation for email, if needed
    if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        highlightInvalidInput(input);
      }
    }
  });
  
  return isValid;
}

/**
 * Highlight invalid input
 * @param {HTMLElement} input - The input element to highlight
 */
function highlightInvalidInput(input) {
  input.classList.add('invalid');
  input.style.borderColor = 'var(--error-color)';
}

/**
 * Remove invalid highlight from input
 * @param {HTMLElement} input - The input element
 */
function removeInvalidHighlight(input) {
  input.classList.remove('invalid');
  input.style.borderColor = '';
}