// ==========================================
// PARTICLE ANIMATION BACKGROUND
// ==========================================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79, 70, 229, 0.3)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    // Draw connections
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(79, 70, 229, ${0.15 * (1 - distance / 100)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ==========================================
// NAVIGATION ACTIVE STATE
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// SMOOTH SCROLL FOR NAVIGATION
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// COUNTER ANIMATION
// ==========================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (target >= 100 ? '+' : '');
        }
    };

    updateCounter();
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate counters
            if (entry.target.classList.contains('stat-value')) {
                animateCounter(entry.target);
            }

            // Add reveal animation
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe stat values
document.querySelectorAll('.stat-value').forEach(el => {
    observer.observe(el);
});

// Observe cards and sections
document.querySelectorAll('.expertise-card, .project-item, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// ==========================================
// CV DOWNLOAD FUNCTIONALITY
// ==========================================
const downloadButtons = [
    document.getElementById('downloadCV'),
    document.getElementById('footerDownloadCV')
];

downloadButtons.forEach(button => {
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // GANTI PATH INI dengan path CV lo
            const cvPath = 'files/CV_Fetrus_Meilano.pdf';
            
            // Create temporary link and trigger download
            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'CV_Fetrus_Meilano.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show success message (optional)
            showNotification('CV download started!');
        });
    }
});

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #10B981;
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// MEDIA GALLERY - YouTube & Images
// ==========================================
const mediaData = [
    { 
        type: 'youtube', 
        videoId: 'F9RKmwmMwb8',  // GANTI INI
        title: 'Drone Aerial Footage', 
    },
    { 
        type: 'youtube', 
        videoId: 'wvNrqNfqIxA',  // GANTI INI
        title: 'Automation Bot Demo', 
    },
    { 
        type: 'youtube', 
        videoId: '8f71Aun2-a4',  // GANTI INI
        title: 'Behind The Scenes', 
    },
    
    // Images - GANTI dengan path foto lo!
    { 
        type: 'image', 
        src: 'images/work1.jpg',  // GANTI INI
        title: 'Project Screenshot', 
    },
    { 
        type: 'image', 
        src: 'images/work2.jpg',  // GANTI INI
        title: 'Drone Photography', 
    },
    { 
        type: 'image', 
        src: 'images/work3.jpg',  // GANTI INI
        title: 'Video Editing Work', 
    },
];

function loadMediaGallery() {
    const gallery = document.getElementById('mediaGallery');
    if (!gallery) return;

    gallery.innerHTML = '';

    mediaData.forEach((media, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

        if (media.type === 'youtube') {
            item.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${media.videoId}?rel=0&modestbranding=1" 
                    style="width: 100%; height: 100%; border: none;"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    loading="lazy"
                    title="${media.title}">
                </iframe>
            `;
        } else if (media.type === 'image') {
            item.innerHTML = `
                <img 
                    src="${media.src}" 
                    alt="${media.title}" 
                    loading="lazy"
                    style="width: 100%; height: 100%; object-fit: cover;"
                    onerror="this.parentElement.style.display='none'"
                >
            `;
        }

        gallery.appendChild(item);

        // Trigger animation
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 50);
    });
}

// ==========================================
// PROFILE IMAGE ERROR HANDLING
// ==========================================
const profileImage = document.querySelector('.profile-image');
const profilePlaceholder = document.querySelector('.profile-placeholder');

if (profileImage && profilePlaceholder) {
    profileImage.addEventListener('error', function() {
        this.style.display = 'none';
        profilePlaceholder.style.display = 'flex';
    });

    profileImage.addEventListener('load', function() {
        profilePlaceholder.style.display = 'none';
    });

    // Check if image src is empty or invalid
    if (!profileImage.src || profileImage.src.includes('undefined')) {
        profileImage.style.display = 'none';
        profilePlaceholder.style.display = 'flex';
    }
}

// ==========================================
// PARALLAX EFFECT ON SCROLL
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual, .profile-card');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==========================================
// TYPING EFFECT (Optional - untuk hero subtitle)
// ==========================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment ini kalau mau typing effect di hero
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     const originalText = heroSubtitle.textContent;
//     typeWriter(heroSubtitle, originalText, 30);
// }

// ==========================================
// LAZY LOAD IMAGES
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// INITIALIZE ON PAGE LOAD
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    loadMediaGallery();
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease';
            heroContent.style.opacity = '1';
        }, 100);
    }
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Debounce function for scroll events
function debounce(func, wait) {
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

// Apply debounce to scroll handlers
const debouncedScrollHandler = debounce(() => {
    // Your scroll logic here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
