// ==========================================
// MEDIA DATA - VIDEO & FOTO
// ==========================================
const mediaData = [
    { type: 'youtube', videoId: '8f71Aun2-a4', title: 'Video 1' },
    { type: 'youtube', videoId: 'wvNrqNfqIxA', title: 'Video 2' },
    { type: 'youtube', videoId: 'F9RKmwmMwb8', title: 'Video 3' },
    { type: 'image', src: 'images/work1.jpg', title: 'Work 1' },
    { type: 'image', src: 'images/work2.jpg', title: 'Work 2' },
    { type: 'image', src: 'images/work3.jpg', title: 'Work 3' },
];

// ==========================================
// CUSTOM CURSOR
// ==========================================
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

if (cursorDot && cursorOutline) {
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        }, 50);
    });

    document.querySelectorAll('a, button, .social-icon, .contact-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(2)';
            cursorOutline.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.transform = 'scale(1)';
        });
    });
}

// ==========================================
// PARTICLE BACKGROUND
// ==========================================
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 50;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 136, 0.5)';
        ctx.fill();
    }
}

for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    
    // Connect particles
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 * (1 - dist / 150)})`;
                ctx.lineWidth = 1;
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ==========================================
// LOAD MEDIA GALLERY
// ==========================================
function loadMedia() {
    const grid = document.getElementById('mediaGrid');
    if (!grid) return;

    mediaData.forEach((media, i) => {
        const box = document.createElement('div');
        box.className = 'media-box';
        box.style.animationDelay = `${i * 0.1}s`;

        if (media.type === 'youtube') {
            box.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${media.videoId}" 
                    frameborder="0" 
                    allowfullscreen
                    loading="lazy">
                </iframe>
            `;
        } else {
            box.innerHTML = `<img src="${media.src}" alt="${media.title}" loading="lazy">`;
        }

        grid.appendChild(box);
    });
}

// ==========================================
// COUNTER ANIMATION
// ==========================================
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const update = () => {
        current += increment;
        if (current < target) {
            el.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            el.textContent = target + '+';
        }
    };
    update();
}

// ==========================================
// INTERSECTION OBSERVER
// ==========================================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            
            if (entry.target.classList.contains('stat-num')) {
                animateCounter(entry.target);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos], .stat-num').forEach(el => observer.observe(el));

// ==========================================
// PROFILE IMAGE FALLBACK
// ==========================================
const profileImg = document.getElementById('profileImg');
const fallback = document.getElementById('imageFallback');

if (profileImg && fallback) {
    profileImg.onerror = function() {
        this.style.display = 'none';
        fallback.style.display = 'flex';
    };
}

// ==========================================
// CV DOWNLOAD
// ==========================================
[document.getElementById('downloadCV'), document.getElementById('footerDownloadCV')].forEach(btn => {
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = 'files/CV_Fetrus_Meilano.pdf';
            link.download = 'CV_Fetrus_Meilano.pdf';
            link.click();
            
            // Show notification
            const notif = document.createElement('div');
            notif.className = 'notification';
            notif.textContent = 'CV downloading...';
            document.body.appendChild(notif);
            setTimeout(() => notif.classList.add('show'), 10);
            setTimeout(() => {
                notif.classList.remove('show');
                setTimeout(() => notif.remove(), 300);
            }, 3000);
        });
    }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ==========================================
// MOBILE MENU
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// ==========================================
// NAV SCROLL EFFECT
// ==========================================
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.boxShadow = '0 4px 30px rgba(0, 255, 136, 0.1)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.8)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// PARALLAX EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ==========================================
// INIT
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    loadMedia();
    document.body.style.opacity = '1';
});