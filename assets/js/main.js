document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Elements
    const themeToggleBtn = document.getElementById('theme-toggle');
    const rtlToggleBtn = document.getElementById('rtl-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const htmlElement = document.documentElement;

    // Theme Toggle Logic
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (currentTheme === 'dark') {
        htmlElement.classList.add('dark');
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const newTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
        });
    }

    // RTL Toggle Logic
    const currentDir = localStorage.getItem('dir') || 'ltr';
    htmlElement.setAttribute('dir', currentDir);

    if(rtlToggleBtn) {
        rtlToggleBtn.addEventListener('click', () => {
            const dir = htmlElement.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr';
            htmlElement.setAttribute('dir', dir);
            localStorage.setItem('dir', dir);
        });
    }

    // Mobile Menu Toggle
    if(mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();
});
