/**
 * Lab1 - Muhdohub Style Implementation
 * Minimal, Subtle Interactions
 */

// ========================================
// 0. LOCALIZATION / I18N
// ========================================

let currentLanguage = localStorage.getItem('lab1-language') || 'en';

// Helper function to get nested translation
function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Update page content based on selected language
function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('lab1-language', lang);
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);

        if (translation) {
            element.textContent = translation;
        }
    });

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.dataset.lang;
            updateLanguage(selectedLang);
        });
    });

    // Set initial language
    updateLanguage(currentLanguage);
}

// Run on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
});

// ========================================
// 1. SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            const navbarHeight = 80;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// 2. NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.querySelector('.navbar');
let lastScrollPosition = 0;

function updateNavbarOnScroll() {
    const currentScroll = window.pageYOffset;

    // Add subtle shadow after scrolling past hero
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollPosition = currentScroll;
}

window.addEventListener('scroll', updateNavbarOnScroll, { passive: true });

// ========================================
// 3. INTERSECTION OBSERVER - FADE IN ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to improve performance
            intersectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    intersectionObserver.observe(element);
});

// ========================================
// 4. FOCUS MANAGEMENT FOR ACCESSIBILITY
// ========================================

// Add visible focus states for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// ========================================
// 5. MOBILE MENU TOGGLE & NAVIGATION
// ========================================

function initMobileMenu() {
    // Create mobile menu toggle button if it doesn't exist
    if (!document.querySelector('.mobile-menu-toggle')) {
        const menuButton = document.createElement('button');
        menuButton.classList.add('mobile-menu-toggle');
        menuButton.setAttribute('aria-label', 'Toggle navigation menu');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        const navContainer = document.querySelector('.nav-container');
        if (navContainer) {
            navContainer.appendChild(menuButton);
        }
    }

    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    if (!menuToggle || !navLinks) return;

    // Toggle mobile menu
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = navLinks.classList.contains('active');
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', !isActive);

        // Prevent body scroll when menu is open
        document.body.style.overflow = !isActive ? 'hidden' : '';
    });

    // Handle dropdown clicks on mobile
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');

        dropdownLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking nav links (except dropdowns)
    navLinks.querySelectorAll('a:not(.nav-dropdown > a)').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
            dropdowns.forEach(d => d.classList.remove('active'));
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', initMobileMenu);

// ========================================
// 6. PERFORMANCE OPTIMIZATION
// ========================================

// Preload fonts
if ('fonts' in document) {
    Promise.all([
        document.fonts.load('400 1rem Inter'),
        document.fonts.load('300 2rem Inter'),
        document.fonts.load('500 1rem Inter')
    ]).then(() => {
        document.body.classList.add('fonts-loaded');
    });
}

// ========================================
// 7. CONSOLE BRANDING
// ========================================

if (console && console.log) {
    console.log(
        '%cLab1',
        'font-size: 24px; font-weight: 300; color: #000;'
    );
    console.log(
        '%cPrecision Nutrition Based on Your Genes & Blood',
        'font-size: 12px; color: #666;'
    );
}

// ========================================
// 8. ERROR HANDLING
// ========================================

window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.message);
});

// ========================================
// 9. REDUCED MOTION SUPPORT
// ========================================

// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// 10. LOGIN MODAL
// ========================================

function initLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');

    if (!loginBtn || !loginModal) return;

    // Open modal
    loginBtn.addEventListener('click', () => {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Focus on email input
        setTimeout(() => {
            document.getElementById('email')?.focus();
        }, 100);
    });

    // Close modal
    function closeLoginModal() {
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    closeModal?.addEventListener('click', closeLoginModal);

    // Close on overlay click
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeLoginModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && loginModal.classList.contains('active')) {
            closeLoginModal();
        }
    });

    // Handle form submission
    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email')?.value;
        const password = document.getElementById('password')?.value;

        // Placeholder for actual authentication
        console.log('Login attempt:', { email, password });
        alert('Login functionality coming soon! This is a demo.');
        closeLoginModal();
    });
}

// Initialize login modal on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initLoginModal();
});
