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



