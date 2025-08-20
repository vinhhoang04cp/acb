// Simple category filter (client-side)
    const filterButtons = document.querySelectorAll('.pill-filter [data-filter]');
    const cards = document.querySelectorAll('#giftGrid .col');
    filterButtons.forEach(btn=>{
      btn.addEventListener('click', ()=>{
        filterButtons.forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        const tag = btn.dataset.filter;
        cards.forEach(c=>{
          const show = tag === 'all' || (c.dataset.tags || '').includes(tag);
          c.classList.toggle('d-none', !show);
        });
      });
    });

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
