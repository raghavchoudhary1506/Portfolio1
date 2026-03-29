// ===========================
// DOM Elements
// ===========================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const darkModeToggle = document.getElementById('darkModeToggle');
const backToTop = document.getElementById('backToTop');
const scrollIndicator = document.getElementById('scrollIndicator');
const contactForm = document.getElementById('contactForm');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const skillCards = document.querySelectorAll('.skill-card');

// ===========================
// Hamburger Menu Toggle
// ===========================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Mark active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// ===========================
// Dark Mode Toggle
// ===========================

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function initDarkMode() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled' || (!savedDarkMode && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    }
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = '☀️';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = '🌙';
    }
});

// Initialize dark mode on page load
initDarkMode();

// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            // Let default smooth scroll handle it
        }
    });
});

// ===========================
// Back to Top Button
// ===========================

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hide back to top button initially
backToTop.classList.add('hidden');

// ===========================
// Active Navigation Link
// ===========================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ===========================
// Scroll Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            
            // Animate progress bars
            if (entry.target.classList.contains('progress')) {
                entry.target.style.animation = 'fillProgress 1.5s ease-out forwards';
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all skill cards, project cards, and progress bars
document.querySelectorAll('.skill-card, .project-card, .progress, .about-content, .contact-form').forEach(el => {
    observer.observe(el);
});

// ===========================
// Scroll Indicator Animation
// ===========================

window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('.hero');
    if (window.pageYOffset > heroSection.clientHeight / 2) {
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        }
    } else {
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
});

// ===========================
// Project Filter
// ===========================

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            const tech = card.getAttribute('data-technology');
            
            if (filter === 'all' || tech === filter) {
                card.style.animation = 'fadeIn 0.5s ease-out';
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===========================
// Contact Form Handling
// ===========================

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        const feedback = document.getElementById('formFeedback');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            feedback.textContent = 'Please fill in all fields.';
            feedback.classList.remove('success');
            feedback.classList.add('error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            feedback.textContent = 'Please enter a valid email address.';
            feedback.classList.remove('success');
            feedback.classList.add('error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            feedback.textContent = '✓ Thank you! Your message has been sent. I\'ll get back to you soon!';
            feedback.classList.remove('error');
            feedback.classList.add('success');
            
            // Reset form
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Hide feedback after 5 seconds
            setTimeout(() => {
                feedback.classList.remove('success');
            }, 5000);
        }, 1500);
    });
}

// ===========================
// Skill Card Interactions
// ===========================

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Throttle Function (for performance)
// ===========================

function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===========================
// Performance Optimization
// ===========================

// Lazy load images if they exist
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Responsive Navigation Updates
// ===========================

const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMediaChange(e) {
    if (e.matches) {
        // Mobile view
        navMenu.style.position = 'absolute';
    } else {
        // Desktop view
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

mediaQuery.addListener(handleMediaChange);
handleMediaChange(mediaQuery);

// ===========================
// Scroll Event Optimization
// ===========================

const throttledScroll = throttle(() => {
    // Any scroll-based calculations can go here
    // Currently handled by event listeners above
}, 100);

// ===========================
// Page Load Animation
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.animation = 'fadeIn 0.8s ease-out';
    }
    
    // Animate section titles on view
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title, index) => {
        const observerTitle = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `slideInLeft 0.8s ease-out`;
                    observerTitle.unobserve(entry.target);
                }
            });
        });
        observerTitle.observe(title);
    });
});

// ===========================
// Console Message (Fun!)
// ===========================

console.log('%cWelcome to Raghav\'s Portfolio!', 'color: #0066cc; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to check out the code and explore the featured projects.', 'color: #00a86b; font-size: 14px;');

// ===========================
// Export for future use
// ===========================

// Make functions available globally if needed
window.portfolioApp = {
    scrollToSection: (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    },
    toggleDarkMode: () => {
        darkModeToggle.click();
    }
};