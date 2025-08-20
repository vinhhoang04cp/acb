/**
 * ========================================
 * FILE: app.js - JavaScript chính của trang chủ
 * CHỨC NĂNG: Load các component HTML vào trang một cách động
 * ========================================
 */

async function loadSection(targetId, file) {
    try {
      // Fetch nội dung HTML từ file
      const response = await fetch(file);
      
      // Kiểm tra nếu request thành công
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Lấy text content từ response
      const htmlContent = await response.text();
      
      // Insert HTML vào element đích
      document.getElementById(targetId).innerHTML = htmlContent;
      } catch (error) {
    // Xử lý lỗi nếu có
    // console.error(`Error loading ${file}:`, error);
  }
  }
  
  /**
   * ========================================
   * LOAD CÁC COMPONENT KHI TRANG ĐÃ SẴN SÀNG
   * ========================================
   */
  
  // Đợi DOM load xong hoàn toàn trước khi thực hiện
  document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // LOAD CÁC COMPONENT CHUNG (HEADER & FOOTER)
    // ========================================
    
    // Load header và footer
    loadSection('header-container', 'partials/header.html');
    loadSection('footer-container', 'partials/footer.html');
  
    // ========================================
    // LOAD CÁC SECTION CỦA TRANG CHỦ
    // ========================================
    
    // Load hero section - banner chính với carousel
    loadSection('hero', 'homepage/carousel.html');
    
    // Load services section - giới thiệu dịch vụ ngân hàng
    loadSection('services', 'homepage/services_5per.html');
    
    // Load features section - tính năng nổi bật
    loadSection('features', 'homepage/features.html');
    
    // Load tools section - công cụ tiện ích
    loadSection('tools', 'homepage/tools_acb.html');
    
    // Load offers section - ưu đãi khuyến mãi
    loadSection('offers', 'homepage/offers.html');
  });

  function initializeHeader() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuToggle && mobileMenu) {
    const iconElement = mobileMenuToggle.querySelector('.bi');
    let isMenuOpen = false;

    mobileMenuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      isMenuOpen = !isMenuOpen;
      mobileMenu.classList.toggle('active');
      
      // Toggle icon
      if (isMenuOpen) {
        iconElement.classList.remove('bi-list');
        iconElement.classList.add('bi-x-lg');
      } else {
        iconElement.classList.remove('bi-x-lg');
        iconElement.classList.add('bi-list');
      }
    });

    // Close menu when clicking outside
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

    // Close menu on window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 992 && isMenuOpen) {
        mobileMenu.classList.remove('active');
        iconElement.classList.remove('bi-x-lg');
        iconElement.classList.add('bi-list');
        isMenuOpen = false;
      }
    });
  }
}