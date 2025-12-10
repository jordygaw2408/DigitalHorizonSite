/**
 * Digital Horizon - PREMIUM 3D VERSION
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // LOADING SCREEN WITH PROGRESS BAR
    // ============================================
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    
    if (loadingScreen && loadingProgress) {
        document.body.style.overflow = 'hidden';
        
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                
                // Complete loading
                setTimeout(() => {
                    loadingScreen.classList.add('fade-out');
                    document.body.style.overflow = '';
                    
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 800);
                }, 500);
            }
            loadingProgress.style.width = progress + '%';
        }, 150);
    }

    // ============================================
    // PARTICLES.JS CONFIGURATION
    // ============================================
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#00D4FF'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00D4FF',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // ============================================
    // TYPED TEXT ANIMATION
    // ============================================
    const typedText = document.getElementById('typedText');
    
    if (typedText) {
        const words = [
            'Drive Growth.',
            'Convert Visitors.',
            'Stand Out.',
            'Generate Leads.',
            'Boost Sales.'
        ];
        
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 150;
        
        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typedText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 150;
            }
            
            if (!isDeleting && charIndex === currentWord.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 500;
            }
            
            setTimeout(type, typingSpeed);
        }
        
        setTimeout(() => {
            type();
        }, 3000);
    }

    // ============================================
    // GSAP ANIMATIONS
    // ============================================
    if (typeof gsap !== 'undefined') {
        // Hero animations
        gsap.from('.hero-badge-premium', {
            opacity: 0,
            y: -30,
            duration: 1,
            delay: 2.5
        });
        
        gsap.from('.hero-heading-premium', {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 2.7
        });
        
        gsap.from('.hero-subheading-premium', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 2.9
        });
        
        gsap.from('.hero-cta-group', {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 3.1
        });
        
        gsap.from('.device-showcase-3d', {
            opacity: 0,
            x: 100,
            duration: 1,
            delay: 3
        });
    } else {
        // FALLBACK: If GSAP doesn't load, ensure elements are visible
        console.warn('GSAP not loaded - showing elements without animation');
        const elements = [
            '.hero-badge-premium',
            '.hero-heading-premium',
            '.hero-subheading-premium',
            '.hero-cta-group',
            '.trust-indicators-premium',
            '.device-showcase-3d'
        ];
        elements.forEach(selector => {
            const el = document.querySelector(selector);
            if (el) {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
            }
        });
    }

    // ============================================
    // AOS INITIALIZATION
    // ============================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
        });
    }

    // ============================================
    // NAVBAR SCROLL
    // ============================================
    const navbar = document.getElementById('mainNav');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ============================================
    // 3D DEVICE TILT EFFECT
    // ============================================
    const deviceFrame = document.getElementById('deviceFrame');
    
    if (deviceFrame) {
        const deviceScreen = deviceFrame.querySelector('.device-screen-3d');
        
        deviceFrame.addEventListener('mousemove', (e) => {
            const rect = deviceFrame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            deviceScreen.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        deviceFrame.addEventListener('mouseleave', () => {
            deviceScreen.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }

    // ============================================
    // SERVICE CARD 3D TILT
    // ============================================
    const serviceCards = document.querySelectorAll('.service-card-premium');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            this.style.transform = `translateY(-15px) scale(1.02) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)';
        });
    });

    // ============================================
    // STATS COUNTER
    // ============================================
    const statNumbers = document.querySelectorAll('.stat-number-premium');
    
    if (statNumbers.length > 0) {
        const observerOptions = {
            threshold: 0.5
        };
        
        const animateCounter = (element) => {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    element.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target + '+';
                }
            };
            
            updateCounter();
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        statNumbers.forEach(stat => observer.observe(stat));
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // BUTTON RIPPLE EFFECT
    // ============================================
    const buttons = document.querySelectorAll('.btn-premium, .btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // PARALLAX EFFECT ON GRADIENT ORBS
    // ============================================
    const orbs = document.querySelectorAll('.orb');
    
    if (orbs.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            orbs.forEach((orb, index) => {
                const speed = 0.3 + (index * 0.1);
                const yPos = -(scrolled * speed);
                orb.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%c🚀 Digital Horizon Web Design', 'color: #00D4FF; font-size: 20px; font-weight: bold;');
    console.log('%cPremium 3D Edition - Built with cutting-edge technology', 'color: #0066FF; font-size: 14px;');
    console.log('%cParticles.js • GSAP • AOS • Custom 3D Effects', 'color: #667eea; font-size: 12px;');

})();

// ============================================
// HORIZON LABS PORTAL ENTRY (GLOBAL)
// ============================================
function enterLabsPortal() {
    const loadingScreen = document.getElementById('labsLoadingScreen');
    
    if (loadingScreen) {
        loadingScreen.style.opacity = '1';
        loadingScreen.style.visibility = 'visible';
        
        setTimeout(() => {
            window.location.href = 'horizon-labs.html';
        }, 2000);
    }
}