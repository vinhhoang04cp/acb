/**
 * ========================================
 * FILE: header.js
 * CHỨC NĂNG: Xử lý mobile menu toggle và responsive
 * ========================================
 */

document.addEventListener('DOMContentLoaded', function() {
    // Lấy các elements cần thiết
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuToggle && mobileMenu) {
        const iconElement = mobileMenuToggle.querySelector('.bi');
        let isMenuOpen = false;

        // Xử lý sự kiện click vào nút toggle
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('active');
            
            // Chuyển đổi icon
            iconElement.classList.toggle('bi-list');
            iconElement.classList.toggle('bi-x-lg');
        });

        // Xử lý đóng menu khi click ra ngoài
        document.addEventListener('click', function(event) {
            if (isMenuOpen && 
                !mobileMenu.contains(event.target) && 
                !mobileMenuToggle.contains(event.target)) {
                mobileMenu.classList.remove('active');
                iconElement.classList.remove('bi-x-lg');
                iconElement.classList.add('bi-list');
                isMenuOpen = false;
            }
        });

        // Đóng menu khi resize window to desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth >= 992 && isMenuOpen) {
                mobileMenu.classList.remove('active');
                iconElement.classList.remove('bi-x-lg');
                iconElement.classList.add('bi-list');
                isMenuOpen = false;
            }
        });
    }
});
    
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
;
