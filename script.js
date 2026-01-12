// ==========================================
// LANGUAGE CONFIGURATION
// ==========================================
const translations = {
    en: {
        navWork: "Work",
        navAbout: "About", 
        navContact: "Contact",
        navCv: "DOWNLOAD CV",
        status: "AVAILABLE FOR FREELANCE",
        label: "DIGITAL OPERATIONS & AUTOMATION SPECIALIST",
        heroLine1: "Optimizing Workflows",
        heroLine2: "Through Intelligent",
        heroLine3: "Automation & AI",
        description: "I help businesses and individuals streamline their operations through custom automation solutions, AI integration, and efficient digital workflows. Based in Indonesia, working with clients worldwide.",
        viewProjects: "View Projects",
        getInTouch: "Get in Touch",
        scroll: "SCROLL TO EXPLORE",
        projects: "Projects Completed",
        years: "Years Experience",
        clients: "Happy Clients",
        efficiency: "Efficiency Rate",
        workTag: "PORTFOLIO",
        workTitle: "FEATURED WORK",
        workDesc: "A selection of my recent projects in automation, AI integration, and digital workflow optimization",
        project1Title: "Intelligent Document Automation System",
        project1Desc: "Developed a comprehensive document processing system that automates data extraction, formatting, and distribution. Integrated AI for intelligent categorization and error detection, reducing manual processing time by 85%.",
        project1Year: "2024 - Current",
        project2Title: "Enterprise Contact Management Platform",
        project2Desc: "Built a scalable contact management solution with automated validation, deduplication, and enrichment features. Includes real-time analytics dashboard and integration with major CRM platforms.",
        project2Year: "2023 - 2024",
        project3Title: "AI-Powered Workflow Optimization Suite",
        project3Desc: "Created an intelligent workflow analysis tool that identifies bottlenecks and recommends optimization strategies using machine learning algorithms. Continuously learns from user behavior to suggest improvements.",
        project3Year: "2024 - Current",
        aboutTag: "ABOUT ME",
        aboutTitle: "EXPERTISE & SKILLS",
        aboutSubtitle: "Transforming Operations Through Technology",
        aboutDesc1: "I specialize in creating intelligent automation solutions that bridge the gap between technical complexity and practical business needs.",
        aboutDesc2: "With a background in both technical development and operational management, I understand the challenges organizations face in digital transformation. My approach combines cutting-edge technology with user-friendly design to create solutions that are both powerful and accessible.",
        aboutDesc3: "Currently focused on AI integration, workflow optimization, and developing scalable automation systems for businesses of all sizes.",
        startProject: "Start a Project",
        skill1Title: "Automation & AI",
        skill2Title: "Development",
        skill3Title: "Business & Operations",
        contactTag: "GET IN TOUCH",
        contactTitle: "LET'S COLLABORATE",
        contactDesc: "Have a project in mind? Let's discuss how we can automate and optimize your workflows for maximum efficiency.",
        email: "Email Me",
        connect: "Connect Professionally",
        viewProjectsGit: "View My Projects",
        behindScenes: "Behind the Scenes",
        copyright: "© 2024 Fetrus Meilano Ilhamsyah. All rights reserved.",
        tagline: "Building efficient digital futures",
        subscribe: "Subscribe for updates",
        placeholderEmail: "Your email",
        designed: "Designed & Developed with ❤️ by Fetrus Meilano",
        cvDownloading: "CV downloading...",
        cvSuccess: "CV downloaded successfully!",
        subscribeSuccess: "Subscribed successfully!",
        loadMore: "Load More",
        watch: "Watch",
        videoError: "Video cannot be loaded"
    },
    
    id: {
        navWork: "Karya",
        navAbout: "Tentang",
        navContact: "Kontak",
        navCv: "UNDUH CV",
        status: "TERSEDIA UNTUK FREELANCE",
        label: "SPESIALIS OPERASI DIGITAL & OTOMASI",
        heroLine1: "Mengoptimalkan Alur Kerja",
        heroLine2: "Melalui Kecerdasan",
        heroLine3: "Otomasi & AI",
        description: "Saya membantu bisnis dan individu menyederhanakan operasi mereka melalui solusi otomasi khusus, integrasi AI, dan alur kerja digital yang efisien. Berbasis di Indonesia, bekerja dengan klien di seluruh dunia.",
        viewProjects: "Lihat Proyek",
        getInTouch: "Hubungi Saya",
        scroll: "GULIR UNTUK MENJELAJAHI",
        projects: "Proyek Selesai",
        years: "Tahun Pengalaman",
        clients: "Klien Puas",
        efficiency: "Tingkat Efisiensi",
        workTag: "PORTOFOLIO",
        workTitle: "KARYA PILIHAN",
        workDesc: "Pilihan proyek terbaru saya dalam otomasi, integrasi AI, dan optimasi alur kerja digital",
        project1Title: "Sistem Otomasi Dokumen Cerdas",
        project1Desc: "Mengembangkan sistem pemrosesan dokumen komprehensif yang mengotomasi ekstraksi data, pemformatan, dan distribusi. Mengintegrasikan AI untuk kategorisasi cerdas dan deteksi kesalahan, mengurangi waktu pemrosesan manual hingga 85%.",
        project1Year: "2024 - Sekarang",
        project2Title: "Platform Manajemen Kontak Perusahaan",
        project2Desc: "Membangun solusi manajemen kontak yang dapat diskalakan dengan fitur validasi otomatis, penghapusan duplikat, dan pengayaan data. Termasuk dashboard analitik real-time dan integrasi dengan platform CRM utama.",
        project2Year: "2023 - 2024",
        project3Title: "Suite Optimasi Alur Kerja Berbasis AI",
        project3Desc: "Membuat alat analisis alur kerja cerdas yang mengidentifikasi hambatan dan merekomendasikan strategi optimasi menggunakan algoritma machine learning. Terus belajar dari perilaku pengguna untuk menyarankan perbaikan.",
        project3Year: "2024 - Sekarang",
        aboutTag: "TENTANG SAYA",
        aboutTitle: "KEAHLIAN & KETERAMPILAN",
        aboutSubtitle: "Mentransformasi Operasi Melalui Teknologi",
        aboutDesc1: "Saya mengkhususkan diri dalam menciptakan solusi otomasi cerdas yang menjembatani kesenjangan antara kompleksitas teknis dan kebutuhan bisnis praktis.",
        aboutDesc2: "Dengan latar belakang dalam pengembangan teknis dan manajemen operasional, saya memahami tantangan yang dihadapi organisasi dalam transformasi digital. Pendekatan saya menggabungkan teknologi mutakhir dengan desain yang ramah pengguna untuk menciptakan solusi yang kuat dan mudah diakses.",
        aboutDesc3: "Saat ini fokus pada integrasi AI, optimasi alur kerja, dan pengembangan sistem otomasi yang dapat diskalakan untuk bisnis semua ukuran.",
        startProject: "Mulai Proyek",
        skill1Title: "Otomasi & AI",
        skill2Title: "Pengembangan",
        skill3Title: "Bisnis & Operasi",
        contactTag: "HUBUNGI SAYA",
        contactTitle: "MARI BERKOLABORASI",
        contactDesc: "Punya proyek dalam pikiran? Mari diskusikan bagaimana kita dapat mengotomasi dan mengoptimalkan alur kerja Anda untuk efisiensi maksimal.",
        email: "Email Saya",
        connect: "Terhubung Secara Profesional",
        viewProjectsGit: "Lihat Proyek Saya",
        behindScenes: "Dibalik Layar",
        copyright: "© 2024 Fetrus Meilano Ilhamsyah. Hak cipta dilindungi.",
        tagline: "Membangun masa depan digital yang efisien",
        subscribe: "Berlangganan pembaruan",
        placeholderEmail: "Email Anda",
        designed: "Dirancang & Dikembangkan dengan ❤️ oleh Fetrus Meilano",
        cvDownloading: "CV sedang diunduh...",
        cvSuccess: "CV berhasil diunduh!",
        subscribeSuccess: "Berhasil berlangganan!",
        loadMore: "Tampilkan Lebih Banyak",
        watch: "Tonton",
        videoError: "Video tidak dapat dimuat"
    }
};

// ==========================================
// DETECT USER LANGUAGE
// ==========================================
let currentLanguage = 'id';

function detectUserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('id') ? 'id' : 'en';
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageContent();
    loadMedia();
}

function updatePageContent() {
    const t = translations[currentLanguage];
    if (!t) return;
    
    updateText('.nav-link[href="#work"]', t.navWork);
    updateText('.nav-link[href="#about"]', t.navAbout);
    updateText('.nav-link[href="#contact"]', t.navContact);
    updateText('#downloadCV span', t.navCv);
    updateText('#footerDownloadCV', t.navCv);
    updateText('.status-badge span:nth-child(2)', t.status);
    updateText('.label', t.label);
    updateText('.hero-title .line:nth-child(1)', t.heroLine1);
    updateText('.hero-title .line:nth-child(2)', t.heroLine2);
    updateText('.hero-title .line:nth-child(3)', t.heroLine3);
    updateText('.hero-desc', t.description);
    updateText('.btn-main span', t.viewProjects);
    updateText('.btn-ghost', t.getInTouch);
    updateText('.scroll-indicator span', t.scroll);
    updateText('.stat:nth-child(1) span', t.projects);
    updateText('.stat:nth-child(2) span', t.years);
    updateText('.stat:nth-child(3) span', t.clients);
    updateText('.stat:nth-child(4) span', t.efficiency);
    updateText('.section-header .section-tag', t.workTag);
    updateText('.section-header .section-title', t.workTitle);
    updateText('.section-desc', t.workDesc);
    updateText('.project:nth-child(1) h3', t.project1Title);
    updateText('.project:nth-child(1) .year', t.project1Year);
    updateText('.project:nth-child(1) p', t.project1Desc);
    updateText('.project:nth-child(2) h3', t.project2Title);
    updateText('.project:nth-child(2) .year', t.project2Year);
    updateText('.project:nth-child(2) p', t.project2Desc);
    updateText('.project:nth-child(3) h3', t.project3Title);
    updateText('.project:nth-child(3) .year', t.project3Year);
    updateText('.project:nth-child(3) p', t.project3Desc);
    updateText('#about .section-tag', t.aboutTag);
    updateText('#about .section-title', t.aboutTitle);
    updateText('.about-text h3', t.aboutSubtitle);
    updateText('.about-text .large', t.aboutDesc1);
    updateText('.about-text p:nth-of-type(2)', t.aboutDesc2);
    updateText('.about-text p:nth-of-type(3)', t.aboutDesc3);
    updateText('.about-cta .btn-main span', t.startProject);
    updateText('.skill-group:nth-child(1) h4', t.skill1Title);
    updateText('.skill-group:nth-child(2) h4', t.skill2Title);
    updateText('.skill-group:nth-child(3) h4', t.skill3Title);
    updateText('#contact .section-tag', t.contactTag);
    updateText('#contact .section-title', t.contactTitle);
    updateText('#contact .section-desc', t.contactDesc);
    updateText('.contact-item:nth-child(1) strong', t.email);
    updateText('.contact-item:nth-child(2) strong', t.connect);
    updateText('.contact-item:nth-child(3) strong', t.viewProjectsGit);
    updateText('.contact-item:nth-child(4) strong', t.behindScenes);
    updateText('.footer-info p:first-child', t.copyright);
    updateText('.footer-tagline', t.tagline);
    updateText('.newsletter p', t.subscribe);
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) newsletterInput.placeholder = t.placeholderEmail;
    updateText('.footer-bottom p', t.designed);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

function updateText(selector, text) {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
}

// ==========================================
// MEDIA DATA - VIDEO & FOTO
// ==========================================
const mediaData = [
    { 
        type: 'youtube', 
        videoId: '8f71Aun2-a4', 
        title: 'Automation Demo',
        category: 'Automation'
    },
    { 
        type: 'youtube', 
        videoId: 'wvNrqNfqIxA', 
        title: 'FONTAGE DRONE',
        category: 'Workflow'
    },
    { 
        type: 'youtube', 
        videoId: 'F9RKmwmMwb8', 
        title: 'Automation Demo',
        category: 'AI'
    },
    { 
        type: 'image', 
        src: 'images/work1.jpg', 
        title: 'Dashboard Design',
        category: 'Automation',
        fallback: 'https://via.placeholder.com/800x500/1E3A8A/E6F1FF?text=Automation+Demo'
    },
    { 
        type: 'image', 
        src: 'images/work2.jpg', 
        title: 'WORKFLOWS N8N',
        category: 'Data',
        fallback: 'https://via.placeholder.com/800x500/112240/B9F3FC?text=Data+Processing'
    },
    { 
        type: 'image', 
        src: 'images/work3.jpg', 
        title: 'Dashboard Design',
        category: 'UI/UX',
        fallback: 'https://via.placeholder.com/800x500/4DABF7/0A192F?text=Dashboard+Design'
    },
];

// ==========================================
// PARTICLE BACKGROUND - SEMUA DEVICE
// ==========================================
function initParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 40;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 1.5 + 0.5;
            this.color = Math.random() > 0.5 ? 'rgba(77, 171, 247, 0.5)' : 'rgba(185, 243, 252, 0.5)';
            this.pulseSpeed = Math.random() * 0.02 + 0.01;
            this.pulse = 0;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            this.pulse += this.pulseSpeed;
        }
        
        draw() {
            ctx.beginPath();
            const pulseRadius = this.radius * (1 + 0.3 * Math.sin(this.pulse));
            ctx.arc(this.x, this.y, pulseRadius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
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
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        particles.forEach(p => {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
        });
    });
}

// ==========================================
// LOAD MEDIA GALLERY - SAMA DI SEMUA DEVICE
// ==========================================
function loadMedia() {
    const grid = document.getElementById('mediaGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    mediaData.forEach((media, i) => {
        const box = document.createElement('div');
        box.className = 'media-box';
        box.style.animationDelay = `${i * 0.1}s`;
        
        if (media.type === 'youtube') {
            box.innerHTML = `
                <div class="media-overlay">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                    <div class="media-info">
                        <span class="media-category">${media.category}</span>
                        <h3 class="media-title">${media.title}</h3>
                    </div>
                </div>
                <iframe 
                    src="https://www.youtube.com/embed/${media.videoId}?modestbranding=1&rel=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy"
                    title="${media.title}"
                    class="media-iframe"
                ></iframe>
            `;
        } else {
            box.innerHTML = `
                <div class="media-overlay">
                    <div class="image-icon">
                        <i class="fas fa-image"></i>
                    </div>
                    <div class="media-info">
                        <span class="media-category">${media.category}</span>
                        <h3 class="media-title">${media.title}</h3>
                    </div>
                </div>
                <img 
                    src="${media.src}" 
                    alt="${media.title}"
                    loading="lazy"
                    class="media-image"
                    onerror="this.onerror=null; this.src='${media.fallback}';"
                >
            `;
        }
        
        // Lightbox untuk semua device
        box.addEventListener('click', (e) => {
            if (!e.target.closest('a') && !e.target.closest('iframe')) {
                openMediaLightbox(media);
            }
        });
        
        grid.appendChild(box);
    });
}

// ==========================================
// LIGHTBOX FUNCTION - SAMA DI SEMUA DEVICE
// ==========================================
function openMediaLightbox(media) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">
                <i class="fas fa-times"></i>
            </button>
            ${media.type === 'youtube' 
                ? `<iframe src="https://www.youtube.com/embed/${media.videoId}?autoplay=1" frameborder="0" allowfullscreen></iframe>`
                : `<img src="${media.src}" alt="${media.title}">`
            }
            <div class="lightbox-info">
                <h3>${media.title}</h3>
                <span class="lightbox-category">${media.category}</span>
                <p>${currentLanguage === 'id' ? 'Klik di luar untuk menutup' : 'Click outside to close'}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.closest('.lightbox-close')) {
            lightbox.remove();
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            lightbox.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// ==========================================
// COUNTER ANIMATION
// ==========================================
function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 1500;
    const startTime = Date.now();
    
    const easeOutQuad = (t) => t * (2 - t);
    
    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const current = Math.floor(target * easedProgress);
        
        el.textContent = current;
        
        if (current === target) {
            el.textContent = target + '+';
        } else {
            requestAnimationFrame(update);
        }
    };
    update();
}

// ==========================================
// INTERSECTION OBSERVER
// ==========================================
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
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('[data-aos], .stat-num, .media-box, .skill-group').forEach(el => observer.observe(el));

// ==========================================
// PROFILE IMAGE FALLBACK
// ==========================================
const profileImg = document.getElementById('profileImg');
const fallback = document.getElementById('imageFallback');

if (profileImg && fallback) {
    profileImg.onload = function() {
        this.style.opacity = '1';
        fallback.style.display = 'none';
    };
    
    profileImg.onerror = function() {
        this.style.display = 'none';
        fallback.style.display = 'flex';
        fallback.innerHTML = '<span class="initials">FM</span>';
    };
}

// ==========================================
// CV DOWNLOAD
// ==========================================
[document.getElementById('downloadCV'), document.getElementById('footerDownloadCV')].forEach(btn => {
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'btn-ripple';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.style.width = '200px';
                ripple.style.height = '200px';
                ripple.style.opacity = '0';
            }, 10);
            
            setTimeout(() => ripple.remove(), 600);
            
            // Simulate download
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = 'files/CV_Fetrus_Meilano.pdf';
                link.download = 'CV_Fetrus_Meilano.pdf';
                link.click();
                
                // Show notification
                const notif = document.createElement('div');
                notif.className = 'notification';
                notif.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-check-circle"></i>
                        <span>${translations[currentLanguage]?.cvSuccess || 'CV downloaded successfully!'}</span>
                    </div>
                `;
                document.body.appendChild(notif);
                
                setTimeout(() => notif.classList.add('show'), 10);
                setTimeout(() => {
                    notif.classList.remove('show');
                    setTimeout(() => notif.remove(), 300);
                }, 3000);
            }, 300);
        });
    }
});

// ==========================================
// SMOOTH SCROLL
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
            
            // Close mobile menu if open
            if (window.innerWidth <= 968) {
                const menuToggle = document.getElementById('menuToggle');
                const navLinks = document.querySelector('.nav-links');
                if (menuToggle && navLinks) {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        }
    });
});

// ==========================================
// MOBILE MENU
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 968 && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.menu-toggle') &&
            navLinks.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
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
        nav.classList.add('scrolled');
        nav.style.background = 'rgba(10, 25, 47, 0.98)';
        nav.style.boxShadow = '0 4px 30px rgba(77, 171, 247, 0.15)';
    } else {
        nav.classList.remove('scrolled');
        nav.style.background = 'rgba(10, 25, 47, 0.9)';
        nav.style.boxShadow = 'none';
    }
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (currentScroll > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.visibility = 'visible';
        }
    }
    
    const scrollToTop = document.querySelector('.scroll-to-top');
    if (scrollToTop) {
        if (currentScroll > 500) {
            scrollToTop.classList.add('show');
        } else {
            scrollToTop.classList.remove('show');
        }
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// PARALLAX EFFECT - SEMUA DEVICE
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-grid');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px) scale(${1 - scrolled * 0.0001})`;
    }
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// ==========================================
// GLITCH TEXT EFFECT - SEMUA DEVICE
// ==========================================
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch-text');
    glitchElements.forEach(el => {
        el.setAttribute('data-text', el.textContent);
        
        setInterval(() => {
            el.classList.add('glitching');
            setTimeout(() => el.classList.remove('glitching'), 100);
        }, Math.random() * 5000 + 3000);
    });
}

// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================
const scrollToTopBtn = document.querySelector('.scroll-to-top');
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// NEWSLETTER SUBSCRIPTION
// ==========================================
function initNewsletter() {
    const newsletterBtn = document.querySelector('.newsletter-btn');
    const newsletterInput = document.querySelector('.newsletter-input');
    
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function() {
            const email = newsletterInput.value.trim();
            
            if (!email) {
                newsletterInput.style.borderColor = 'var(--accent)';
                setTimeout(() => {
                    newsletterInput.style.borderColor = '';
                }, 2000);
                return;
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                newsletterInput.style.borderColor = 'var(--accent)';
                setTimeout(() => {
                    newsletterInput.style.borderColor = '';
                }, 2000);
                return;
            }
            
            const notif = document.createElement('div');
            notif.className = 'notification';
            notif.textContent = translations[currentLanguage]?.subscribeSuccess || 'Subscribed successfully!';
            document.body.appendChild(notif);
            
            setTimeout(() => notif.classList.add('show'), 10);
            setTimeout(() => {
                notif.classList.remove('show');
                setTimeout(() => notif.remove(), 300);
            }, 3000);
            
            newsletterInput.value = '';
        });
        
        newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterBtn.click();
            }
        });
    }
}

// ==========================================
// LANGUAGE SWITCHER
// ==========================================
function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            document.querySelectorAll('.lang-btn').forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// ==========================================
// LOADING SCREEN
// ==========================================
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1000);
    }
});

// ==========================================
// INITIALIZATION
// ==========================================
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
    } else {
        currentLanguage = detectUserLanguage();
    }
    
    updatePageContent();
    initParticles();
    loadMedia();
    initGlitchEffect();
    initNewsletter();
    initLanguageSwitcher();
    
    document.body.style.opacity = '1';
    document.body.classList.add('loaded');
    
    console.log('Website initialized. Language:', currentLanguage);
});