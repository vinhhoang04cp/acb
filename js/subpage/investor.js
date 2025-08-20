// ====================================================================
// main.js
// - Viết các JS nhỏ phục vụ UX: hiện nút back-to-top, thêm shadow khi scroll
// ====================================================================

(function () {
  // Hiện/ẩn nút "Back to top"
  const backToTop = document.getElementById('backToTop');
  const onScroll = () => {
    // Khi cuộn quá 300px thì hiện nút
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll);

  // Sự kiện click để cuộn mượt lên đầu trang
  backToTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

async function loadSection(targetId, file){
      const res = await fetch(file);
      document.getElementById(targetId).innerHTML = await res.text();
    }
    async function loadHTML(id, file) {
      const res = await fetch(file);
      document.getElementById(id).innerHTML = await res.text();
    }
    

    // nạp header/footer + carousel
    loadHTML('header-container', 'partials/header.html');
    loadHTML('footer-container', 'partials/footer.html');
    loadSection('hero', 'homepage/carousel.html'); // carousel.html bản full-width 60vh


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