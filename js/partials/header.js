/**
 * ========================================
 * FILE: header.js
 * 
 * CHỨC NĂNG CHÍNH:
 * - Xử lý mobile menu toggle
 * - Quản lý responsive behavior của header
 * - Xử lý các tương tác người dùng với menu
 * 
 * COMPONENTS:
 * 1. Mobile Menu Toggle
 *    - Toggle menu visibility
 *    - Icon animation (hamburger ↔ X)
 *    - Click outside to close
 * 
 * 2. Responsive Behavior
 *    - Window resize handling
 *    - Mobile/Desktop state management
 * 
 * 3. User Interactions
 *    - Menu item highlights
 *    - Dropdown behaviors
 *    - Scroll effects
 * 
 * DEPENDENCIES:
 * - DOM Elements: .mobile-nav-toggle, .main-nav
 * - Bootstrap Icons
 * ========================================
 */

document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', function() {
      mainNav.classList.toggle('show');
      
      // Toggle icon
      const icon = this.querySelector('.bi');
      if (icon) {
        icon.classList.toggle('bi-list');        // Icon hamburger
        icon.classList.toggle('bi-x');           // Icon X
      }
    });

    // ========================================
    // CLOSE MENU WHEN CLICKING OUTSIDE
    // ========================================
    
    // Event listener cho click outside menu
    document.addEventListener('click', function(e) {
      // Kiểm tra nếu click ngoài menu và menu đang mở
      if (!mainNav.contains(e.target) && 
          !mobileToggle.contains(e.target) && 
          mainNav.classList.contains('show')) {
        
        // Đóng menu
        mainNav.classList.remove('show');
        
        // Reset icon về hamburger
        const icon = mobileToggle.querySelector('.bi');
        if (icon) {
          icon.classList.add('bi-list');         // Icon hamburger
          icon.classList.remove('bi-x');         // Bỏ icon X
        }
      }
    });
  }

  // ========================================
  // WINDOW RESIZE HANDLER - Xử lý khi resize window
  // ========================================
  
  let resizeTimer;                               // Timer để debounce resize event
  
  // Event listener cho window resize
  window.addEventListener('resize', function() {
    // Clear timer cũ
    clearTimeout(resizeTimer);
    
    // Set timer mới để debounce
    resizeTimer = setTimeout(function() {
      // Nếu màn hình > 575px và menu đang mở
      if (window.innerWidth > 575 && mainNav.classList.contains('show')) {
        
        // Đóng menu
        mainNav.classList.remove('show');
        
        // Reset icon về hamburger
        const icon = mobileToggle.querySelector('.bi');
        if (icon) {
          icon.classList.add('bi-list');         // Icon hamburger
          icon.classList.remove('bi-x');         // Bỏ icon X
        }
      }
    }, 250);                                     // Delay 250ms
  });
});
