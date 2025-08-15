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
