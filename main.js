document.addEventListener('DOMContentLoaded', () => {
    
    // Core Navigation selectors
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    /**
     * Toggles the mobile side/top drawer display.
     */
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    /**
     * Handles link clicks to close the mobile menu layout automatically
     */
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if drawer state is open before executing toggle override
            if (navMenu.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

});