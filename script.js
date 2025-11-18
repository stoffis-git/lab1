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
// 5. MOBILE MENU TOGGLE
// ========================================

function initMobileMenu() {
    const navLinks = document.querySelector('.nav-links');

    if (window.innerWidth <= 768 && navLinks) {
        // Check if menu button already exists
        if (document.querySelector('.mobile-menu-toggle')) return;

        // Create mobile menu toggle button
        const menuButton = document.createElement('button');
        menuButton.classList.add('mobile-menu-toggle');
        menuButton.setAttribute('aria-label', 'Toggle navigation menu');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.innerHTML = `
            <span class="menu-icon"></span>
            <span class="menu-icon"></span>
            <span class="menu-icon"></span>
        `;

        // Add styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-toggle {
                display: flex;
                flex-direction: column;
                gap: 4px;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0.5rem;
                z-index: 1001;
            }

            .menu-icon {
                width: 24px;
                height: 2px;
                background: var(--color-black);
                transition: all 0.3s ease;
            }

            .mobile-menu-toggle[aria-expanded="true"] .menu-icon:nth-child(1) {
                transform: rotate(45deg) translateY(6px);
            }

            .mobile-menu-toggle[aria-expanded="true"] .menu-icon:nth-child(2) {
                opacity: 0;
            }

            .mobile-menu-toggle[aria-expanded="true"] .menu-icon:nth-child(3) {
                transform: rotate(-45deg) translateY(-6px);
            }

            @media (max-width: 768px) {
                .nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: var(--space-md);
                    border-bottom: 1px solid var(--color-border);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
                }

                .nav-links.open {
                    display: flex;
                }

                .nav-links li {
                    margin: 0;
                }

                .nav-links a {
                    display: block;
                    padding: var(--space-sm);
                }
            }
        `;
        document.head.appendChild(style);

        // Insert menu button
        const navContainer = document.querySelector('.nav-container');
        navContainer.appendChild(menuButton);

        // Toggle menu on click
        menuButton.addEventListener('click', () => {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('open');
        });

        // Close menu when clicking nav links
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuButton.setAttribute('aria-expanded', 'false');
                navLinks.classList.remove('open');
            });
        });
    }
}

// Initialize on load and resize
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    if (window.innerWidth > 768 && menuToggle) {
        menuToggle.remove();
        document.querySelector('.nav-links')?.classList.remove('open');
    } else if (window.innerWidth <= 768 && !menuToggle) {
        initMobileMenu();
    }
});

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
