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
