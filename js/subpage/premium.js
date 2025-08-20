document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    if (mobileMenuToggle && mobileMenu) {
        const iconElement = mobileMenuToggle.querySelector('.bi');
        let isMenuOpen = false;

        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('active');
            body.style.overflow = isMenuOpen ? 'hidden' : '';
            
            // Toggle icon
            if (isMenuOpen) {
                iconElement.classList.remove('bi-list');
                iconElement.classList.add('bi-x-lg');
            } else {
                iconElement.classList.remove('bi-x-lg');
                iconElement.classList.add('bi-list');
            }
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
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth >= 992 && isMenuOpen) {
                    mobileMenu.classList.remove('active');
                    iconElement.classList.remove('bi-x-lg');
                    iconElement.classList.add('bi-list');
                    isMenuOpen = false;
                }
            }, 250);
        });
    }
});
