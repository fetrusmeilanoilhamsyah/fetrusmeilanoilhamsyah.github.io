// ==========================================
// MOBILE DETECTION
// ==========================================
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// ==========================================
// LANGUAGE CONFIGURATION
// ==========================================
const translations = {
    en: {
        // Navigation
        navWork: "Work",
        navAbout: "About", 
        navContact: "Contact",
        navCv: "DOWNLOAD CV",
        
        // Hero Section
        status: "AVAILABLE FOR FREELANCE",
        label: "DIGITAL OPERATIONS & AUTOMATION SPECIALIST",
        heroLine1: "Optimizing Workflows",
        heroLine2: "Through Intelligent",
        heroLine3: "Automation & AI",
        description: "I help businesses and individuals streamline their operations through custom automation solutions, AI integration, and efficient digital workflows. Based in Indonesia, working with clients worldwide.",
        viewProjects: "View Projects",
        getInTouch: "Get in Touch",
        scroll: "SCROLL TO EXPLORE",
        
        // Stats
        projects: "Projects Completed",
        years: "Years Experience",
        clients: "Happy Clients",
        efficiency: "Efficiency Rate",
        
        // Work Section
        workTag: "PORTFOLIO",
        workTitle: "FEATURED WORK",
        workDesc: "A selection of my recent projects in automation, AI integration, and digital workflow optimization",
        
        // Projects
        project1Title: "Intelligent Document Automation System",
        project1Desc: "Developed a comprehensive document processing system that automates data extraction, formatting, and distribution. Integrated AI for intelligent categorization and error detection, reducing manual processing time by 85%.",
        project1Year: "2024 - Current",
        project2Title: "Enterprise Contact Management Platform",
        project2Desc: "Built a scalable contact management solution with automated validation, deduplication, and enrichment features. Includes real-time analytics dashboard and integration with major CRM platforms.",
        project2Year: "2023 - 2024",
        project3Title: "AI-Powered Workflow Optimization Suite",
        project3Desc: "Created an intelligent workflow analysis tool that identifies bottlenecks and recommends optimization strategies using machine learning algorithms. Continuously learns from user behavior to suggest improvements.",
        project3Year: "2024 - Current",
        
        // About Section
        aboutTag: "ABOUT ME",
        aboutTitle: "EXPERTISE & SKILLS",
        aboutSubtitle: "Transforming Operations Through Technology",
        aboutDesc1: "I specialize in creating intelligent automation solutions that bridge the gap between technical complexity and practical business needs.",
        aboutDesc2: "With a background in both technical development and operational management, I understand the challenges organizations face in digital transformation. My approach combines cutting-edge technology with user-friendly design to create solutions that are both powerful and accessible.",
        aboutDesc3: "Currently focused on AI integration, workflow optimization, and developing scalable automation systems for businesses of all sizes.",
        startProject: "Start a Project",
        
        // Skills
        skill1Title: "Automation & AI",
        skill2Title: "Development",
        skill3Title: "Business & Operations",
        
        // Contact Section
        contactTag: "GET IN TOUCH",
        contactTitle: "LET'S COLLABORATE",
        contactDesc: "Have a project in mind? Let's discuss how we can automate and optimize your workflows for maximum efficiency.",
        email: "Email Me",
        connect: "Connect Professionally",
        viewProjectsGit: "View My Projects",
        behindScenes: "Behind the Scenes",
        
        // Footer
        copyright: "© 2024 Fetrus Meilano Ilhamsyah. All rights reserved.",
        tagline: "Building efficient digital futures",
        subscribe: "Subscribe for updates",
        placeholderEmail: "Your email",
        designed: "Designed & Developed with ❤️ by Fetrus Meilano",
        
        // Notifications
        cvDownloading: "CV downloading...",
        cvSuccess: "CV downloaded successfully!",
        subscribeSuccess: "Subscribed successfully!",
        loadMore: "Load More",
        watch: "Watch",
        videoError: "Video cannot be loaded"
    },
    
    id: {
        // Navigation
        navWork: "Karya",
        navAbout: "Tentang",
        navContact: "Kontak",
        navCv: "UNDUH CV",
        
        // Hero Section
        status: "TERSEDIA UNTUK FREELANCE",
        label: "SPESIALIS OPERASI DIGITAL & OTOMASI",
        heroLine1: "Mengoptimalkan Alur Kerja",
        heroLine2: "Melalui Kecerdasan",
        heroLine3: "Otomasi & AI",
        description: "Saya membantu bisnis dan individu menyederhanakan operasi mereka melalui solusi otomasi khusus, integrasi AI, dan alur kerja digital yang efisien. Berbasis di Indonesia, bekerja dengan klien di seluruh dunia.",
        viewProjects: "Lihat Proyek",
        getInTouch: "Hubungi Saya",
        scroll: "GULIR UNTUK MENJELAJAHI",
        
        // Stats
        projects: "Proyek Selesai",
        years: "Tahun Pengalaman",
        clients: "Klien Puas",
        efficiency: "Tingkat Efisiensi",
        
        // Work Section
        workTag: "PORTOFOLIO",
        workTitle: "KARYA PILIHAN",
        workDesc: "Pilihan proyek terbaru saya dalam otomasi, integrasi AI, dan optimasi alur kerja digital",
        
        // Projects
        project1Title: "Sistem Otomasi Dokumen Cerdas",
        project1Desc: "Mengembangkan sistem pemrosesan dokumen komprehensif yang mengotomasi ekstraksi data, pemformatan, dan distribusi. Mengintegrasikan AI untuk kategorisasi cerdas dan deteksi kesalahan, mengurangi waktu pemrosesan manual hingga 85%.",
        project1Year: "2024 - Sekarang",
        project2Title: "Platform Manajemen Kontak Perusahaan",
        project2Desc: "Membangun solusi manajemen kontak yang dapat diskalakan dengan fitur validasi otomatis, penghapusan duplikat, dan pengayaan data. Termasuk dashboard analitik real-time dan integrasi dengan platform CRM utama.",
        project2Year: "2023 - 2024",
        project3Title: "Suite Optimasi Alur Kerja Berbasis AI",
        project3Desc: "Membuat alat analisis alur kerja cerdas yang mengidentifikasi hambatan dan merekomendasikan strategi optimasi menggunakan algoritma machine learning. Terus belajar dari perilaku pengguna untuk menyarankan perbaikan.",
        project3Year: "2024 - Sekarang",
        
        // About Section
        aboutTag: "TENTANG SAYA",
        aboutTitle: "KEAHLIAN & KETERAMPILAN",
        aboutSubtitle: "Mentransformasi Operasi Melalui Teknologi",
        aboutDesc1: "Saya mengkhususkan diri dalam menciptakan solusi otomasi cerdas yang menjembatani kesenjangan antara kompleksitas teknis dan kebutuhan bisnis praktis.",
        aboutDesc2: "Dengan latar belakang dalam pengembangan teknis dan manajemen operasional, saya memahami tantangan yang dihadapi organisasi dalam transformasi digital. Pendekatan saya menggabungkan teknologi mutakhir dengan desain yang ramah pengguna untuk menciptakan solusi yang kuat dan mudah diakses.",
        aboutDesc3: "Saat ini fokus pada integrasi AI, optimasi alur kerja, dan pengembangan sistem otomasi yang dapat diskalakan untuk bisnis semua ukuran.",
        startProject: "Mulai Proyek",
        
        // Skills
        skill1Title: "Otomasi & AI",
        skill2Title: "Pengembangan",
        skill3Title: "Bisnis & Operasi",
        
        // Contact Section
        contactTag: "HUBUNGI SAYA",
        contactTitle: "MARI BERKOLABORASI",
        contactDesc: "Punya proyek dalam pikiran? Mari diskusikan bagaimana kita dapat mengotomasi dan mengoptimalkan alur kerja Anda untuk efisiensi maksimal.",
        email: "Email Saya",
        connect: "Terhubung Secara Profesional",
        viewProjectsGit: "Lihat Proyek Saya",
        behindScenes: "Dibalik Layar",
        
        // Footer
        copyright: "© 2024 Fetrus Meilano Ilhamsyah. Hak cipta dilindungi.",
        tagline: "Membangun masa depan digital yang efisien",
        subscribe: "Berlangganan pembaruan",
        placeholderEmail: "Email Anda",
        designed: "Dirancang & Dikembangkan dengan ❤️ oleh Fetrus Meilano",
        
        // Notifications
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
let currentLanguage = 'id'; // Default to Indonesian

function detectUserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('id')) {
        return 'id';
    } else {
        return 'en';
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageContent();
    loadMedia(); // Reload media with new language
}

function updatePageContent() {
    const t = translations[currentLanguage];
    if (!t) return;
    
    // Navigation
    updateText('.nav-link[href="#work"]', t.navWork);
    updateText('.nav-link[href="#about"]', t.navAbout);
    updateText('.nav-link[href="#contact"]', t.navContact);
    updateText('#downloadCV span', t.navCv);
    updateText('#footerDownloadCV', t.navCv);
    
    // Hero Section
    updateText('.status-badge span:nth-child(2)', t.status);
    updateText('.label', t.label);
    updateText('.hero-title .line:nth-child(1)', t.heroLine1);
    updateText('.hero-title .line:nth-child(2)', t.heroLine2);
    updateText('.hero-title .line:nth-child(3)', t.heroLine3);
    updateText('.hero-desc', t.description);
    updateText('.btn-main span', t.viewProjects);
    updateText('.btn-ghost', t.getInTouch);
    updateText('.scroll-indicator span', t.scroll);
    
    // Stats
    updateText('.stat:nth-child(1) span', t.projects);
    updateText('.stat:nth-child(2) span', t.years);
    updateText('.stat:nth-child(3) span', t.clients);
    updateText('.stat:nth-child(4) span', t.efficiency);
    
    // Work Section
    updateText('.section-header .section-tag', t.workTag);
    updateText('.section-header .section-title', t.workTitle);
    updateText('.section-desc', t.workDesc);
    
    // Projects
    updateText('.project:nth-child(1) h3', t.project1Title);
    updateText('.project:nth-child(1) .year', t.project1Year);
    updateText('.project:nth-child(1) p', t.project1Desc);
    updateText('.project:nth-child(2) h3', t.project2Title);
    updateText('.project:nth-child(2) .year', t.project2Year);
    updateText('.project:nth-child(2) p', t.project2Desc);
    updateText('.project:nth-child(3) h3', t.project3Title);
    updateText('.project:nth-child(3) .year', t.project3Year);
    updateText('.project:nth-child(3) p', t.project3Desc);
    
    // About Section
    updateText('#about .section-tag', t.aboutTag);
    updateText('#about .section-title', t.aboutTitle);
    updateText('.about-text h3', t.aboutSubtitle);
    updateText('.about-text .large', t.aboutDesc1);
    updateText('.about-text p:nth-of-type(2)', t.aboutDesc2);
    updateText('.about-text p:nth-of-type(3)', t.aboutDesc3);
    updateText('.about-cta .btn-main span', t.startProject);
    
    // Skills
    updateText('.skill-group:nth-child(1) h4', t.skill1Title);
    updateText('.skill-group:nth-child(2) h4', t.skill2Title);
    updateText('.skill-group:nth-child(3) h4', t.skill3Title);
    
    // Contact Section
    updateText('#contact .section-tag', t.contactTag);
    updateText('#contact .section-title', t.contactTitle);
    updateText('#contact .section-desc', t.contactDesc);
    
    // Contact Items
    updateText('.contact-item:nth-child(1) strong', t.email);
    updateText('.contact-item:nth-child(2) strong', t.connect);
    updateText('.contact-item:nth-child(3) strong', t.viewProjectsGit);
    updateText('.contact-item:nth-child(4) strong', t.behindScenes);
    
    // Footer
    updateText('.footer-info p:first-child', t.copyright);
    updateText('.footer-tagline', t.tagline);
    updateText('.newsletter p', t.subscribe);
    const newsletterInput = document.querySelector('.newsletter-input');
    if (newsletterInput) newsletterInput.placeholder = t.placeholderEmail;
    updateText('.footer-bottom p', t.designed);
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

function updateText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
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
// CUSTOM CURSOR - Blue Theme
// ==========================================
const cursorDot = document.getElementById('cursorDot');
const cursorOutline = document.getElementById('cursorOutline');

// Only enable cursor on desktop
if (!isMobile && cursorDot && cursorOutline) {
    document.addEventListener('mousemove', (e) => {
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorOutline.style.left = e.clientX + 'px';
            cursorOutline.style.top = e.clientY + 'px';
        }, 50);
    });

    document.querySelectorAll('a, button, .social-icon, .contact-item, .nav-link, .media-box, .project, .skill-group').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover');
            cursorDot.style.transform = 'scale(1.5)';
            cursorOutline.style.transform = 'scale(1.3)';
            cursorOutline.style.borderColor = 'var(--accent)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover');
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.transform = 'scale(1)';
            cursorOutline.style.borderColor = 'var(--frost-blue)';
        });
    });
} else if (cursorDot && cursorOutline) {
    // Disable on mobile
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
}

// ==========================================
// PARTICLE BACKGROUND - Blue Theme
// ==========================================
const canvas = document.getElementById('particleCanvas');
if (canvas && !isMobile) { // Only enable particles on desktop
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = isMobile ? 15 : 60; // Fewer particles on mobile

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.3;
            this.vy = (Math.random() - 0.5) * 0.3;
            this.radius = Math.random() * 1.5 + 0.5;
            this.color = Math.random() > 0.5 ? 'rgba(77, 171, 247, 0.6)' : 'rgba(185, 243, 252, 0.6)';
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
            
            // Glow effect (only on desktop)
            if (!isMobile) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, pulseRadius * 3, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, pulseRadius,
                    this.x, this.y, pulseRadius * 3
                );
                gradient.addColorStop(0, this.color.replace('0.6', '0.3'));
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(10, 25, 47, 0.1)');
        gradient.addColorStop(1, 'rgba(16, 35, 64, 0.1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        // Connect particles with glowing lines (only on desktop)
        if (!isMobile) {
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const opacity = 0.1 * (1 - dist / 120);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(99, 230, 190, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });
        }
        
        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Reposition particles
        particles.forEach(p => {
            p.x = Math.random() * canvas.width;
            p.y = Math.random() * canvas.height;
        });
    });
} else if (canvas) {
    // Hide canvas on mobile
    canvas.style.display = 'none';
}

// ==========================================
// LOAD MEDIA GALLERY
// ==========================================
function loadMedia() {
    const grid = document.getElementById('mediaGrid');
    if (!grid) {
        console.error('Element #mediaGrid not found!');
        return;
    }

    // Clear existing content
    grid.innerHTML = '';

    // Use lightweight loading for mobile
    if (isMobile && window.innerWidth < 768) {
        loadLightweightMedia();
        return;
    }

    mediaData.forEach((media, i) => {
        const box = document.createElement('div');
        box.className = 'media-box';
        box.dataset.aos = 'fade-up';
        box.dataset.aosDelay = `${(i % 3) * 100}`;
        box.style.animationDelay = `${i * 0.1}s`;

        if (media.type === 'youtube') {
            box.innerHTML = `
                <div class="media-overlay">
                    <div class="play-button">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="19" fill="var(--frost-blue)" fill-opacity="0.9"/>
                            <path d="M16 12L28 20L16 28V12Z" fill="var(--dark)"/>
                        </svg>
                    </div>
                    <div class="media-info">
                        <span class="media-category">${media.category}</span>
                        <h3 class="media-title">${media.title}</h3>
                    </div>
                </div>
                <iframe 
                    src="https://www.youtube.com/embed/${media.videoId}?modestbranding=1&rel=0&showinfo=0&controls=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy"
                    title="${media.title}"
                    class="media-iframe"
                    onerror="this.style.display='none'; this.parentElement.querySelector('.media-fallback').style.display='block';"
                ></iframe>
                <div class="media-fallback" style="display: none;">
                    <div class="fallback-content">
                        <i class="fas fa-video"></i>
                        <p>${translations[currentLanguage]?.videoError || 'Video cannot be loaded'}</p>
                        <a href="https://youtube.com/watch?v=${media.videoId}" target="_blank" class="fallback-link">
                            ${translations[currentLanguage]?.watch || 'Watch on YouTube'}
                        </a>
                    </div>
                </div>
            `;
        } else {
            box.innerHTML = `
                <div class="media-overlay">
                    <div class="image-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="19" fill="var(--frost-blue)" fill-opacity="0.9"/>
                            <path d="M30 12H10C8.9 12 8 12.9 8 14V26C8 27.1 8.9 28 10 28H30C31.1 28 32 27.1 32 26V14C32 12.9 31.1 12 30 12ZM30 26H10V14H30V26ZM20 19C18.3 19 17 20.3 17 22C17 23.7 18.3 25 20 25C21.7 25 23 23.7 23 22C23 20.3 21.7 19 20 19Z" fill="var(--dark)"/>
                        </svg>
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

        // Add click handler for lightbox effect (only on desktop)
        if (!isMobile) {
            box.addEventListener('click', function(e) {
                if (!e.target.closest('a')) {
                    openMediaLightbox(media);
                }
            });
        }

        grid.appendChild(box);
    });

    // Initialize AOS for media items
    initAOS();
}

// ==========================================
// LIGHTWEIGHT MEDIA LOADING FOR MOBILE
// ==========================================
function loadLightweightMedia() {
    const grid = document.getElementById('mediaGrid');
    if (!grid) return;

    // Hanya load 3 item pertama di mobile
    const mobileMedia = mediaData.slice(0, 3);
    
    mobileMedia.forEach((media, i) => {
        const box = document.createElement('div');
        box.className = 'media-box';
        
        if (media.type === 'youtube') {
            // Di mobile, gunakan thumbnail dulu
            box.innerHTML = `
                <div class="mobile-media-thumbnail">
                    <img src="https://img.youtube.com/vi/${media.videoId}/hqdefault.jpg" 
                         alt="${media.title}"
                         loading="lazy"
                         decoding="async">
                    <div class="play-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="mobile-media-info">
                    <h3>${media.title}</h3>
                    <button class="watch-btn" onclick="window.open('https://youtube.com/watch?v=${media.videoId}', '_blank')">
                        ${translations[currentLanguage]?.watch || 'Watch'}
                    </button>
                </div>
            `;
        } else {
            // Gunakan placeholder yang lebih kecil
            box.innerHTML = `
                <img src="${media.src}" 
                     alt="${media.title}"
                     loading="lazy"
                     decoding="async"
                     onerror="this.onerror=null; this.src='${media.fallback}';">
                <div class="mobile-media-info">
                    <h3>${media.title}</h3>
                </div>
            `;
        }
        
        grid.appendChild(box);
    });
    
    // Tombol "Load More" untuk mobile
    if (mediaData.length > 3) {
        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.className = 'load-more-btn';
        loadMoreBtn.textContent = translations[currentLanguage]?.loadMore || 'Load More';
        loadMoreBtn.addEventListener('click', () => {
            loadMoreBtn.remove();
            // Load semua media
            mediaData.slice(3).forEach(media => {
                const box = document.createElement('div');
                box.className = 'media-box';
                
                if (media.type === 'youtube') {
                    box.innerHTML = `
                        <div class="mobile-media-thumbnail">
                            <img src="https://img.youtube.com/vi/${media.videoId}/hqdefault.jpg" 
                                 alt="${media.title}"
                                 loading="lazy">
                            <div class="play-overlay">
                                <i class="fas fa-play"></i>
                            </div>
                        </div>
                        <div class="mobile-media-info">
                            <h3>${media.title}</h3>
                            <button class="watch-btn" onclick="window.open('https://youtube.com/watch?v=${media.videoId}', '_blank')">
                                ${translations[currentLanguage]?.watch || 'Watch'}
                            </button>
                        </div>
                    `;
                } else {
                    box.innerHTML = `
                        <img src="${media.src}" 
                             alt="${media.title}"
                             loading="lazy"
                             onerror="this.onerror=null; this.src='${media.fallback}';">
                        <div class="mobile-media-info">
                            <h3>${media.title}</h3>
                        </div>
                    `;
                }
                
                grid.appendChild(box);
            });
        });
        grid.appendChild(loadMoreBtn);
    }
}

// ==========================================
// LIGHTBOX FUNCTION
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

    // Close on click outside or close button
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.closest('.lightbox-close')) {
            lightbox.remove();
            document.body.style.overflow = '';
        }
    });

    // Close with ESC key
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            lightbox.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
}

// ==========================================
// INITIALIZE AOS
// ==========================================
function initAOS() {
    const mediaBoxes = document.querySelectorAll('.media-box');
    
    mediaBoxes.forEach((box, index) => {
        const delay = box.dataset.aosDelay || (index * 100);
        
        box.style.opacity = '0';
        box.style.transform = 'translateY(30px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        box.style.transition = 'all 0.6s ease';
                        box.style.opacity = '1';
                        box.style.transform = 'translateY(0)';
                        observer.unobserve(box);
                    }, parseInt(delay));
                }
            });
        }, { threshold: 0.1 });

        observer.observe(box);
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
        
        // Add glow effect when reaching target
        if (current === target) {
            el.style.textShadow = '0 0 20px var(--frost-blue)';
            setTimeout(() => {
                el.style.textShadow = 'none';
            }, 1000);
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
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
            
            if (entry.target.classList.contains('stat-num')) {
                animateCounter(entry.target);
            }
            
            // Add special effects for different elements
            if (entry.target.classList.contains('project')) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

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
                
                // Show notification with blue theme
                const notif = document.createElement('div');
                notif.className = 'notification';
                notif.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                                  stroke="var(--dark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
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
            // Add active class to nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
            
            // Smooth scroll
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
        
        // Add backdrop blur effect
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking outside
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
    
    // Hide/show scroll indicator
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
    
    // Show/hide scroll to top button
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
// PARALLAX EFFECT (only on desktop)
// ==========================================
if (!isMobile) {
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
}

// ==========================================
// GLITCH TEXT EFFECT (only on desktop)
// ==========================================
function initGlitchEffect() {
    if (!isMobile) {
        const glitchElements = document.querySelectorAll('.glitch-text');
        glitchElements.forEach(el => {
            el.setAttribute('data-text', el.textContent);
            
            // Random glitch intervals
            setInterval(() => {
                el.classList.add('glitching');
                setTimeout(() => el.classList.remove('glitching'), 100);
            }, Math.random() * 5000 + 3000);
        });
    }
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
            
            // Simple email validation
            if (!email.includes('@') || !email.includes('.')) {
                newsletterInput.style.borderColor = 'var(--accent)';
                setTimeout(() => {
                    newsletterInput.style.borderColor = '';
                }, 2000);
                return;
            }
            
            // Show success message
            const notif = document.createElement('div');
            notif.className = 'notification';
            notif.textContent = translations[currentLanguage]?.subscribeSuccess || 'Subscribed successfully!';
            document.body.appendChild(notif);
            
            setTimeout(() => notif.classList.add('show'), 10);
            setTimeout(() => {
                notif.classList.remove('show');
                setTimeout(() => notif.remove(), 300);
            }, 3000);
            
            // Clear input
            newsletterInput.value = '';
        });
        
        // Allow Enter key
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
    // Language switcher already in HTML, just add event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Update active button
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
    // Set initial language
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLanguage = savedLang;
    } else {
        currentLanguage = detectUserLanguage();
    }
    
    // Update page content with current language
    updatePageContent();
    
    // Initialize components
    loadMedia();
    initGlitchEffect();
    initNewsletter();
    initLanguageSwitcher();
    
    // Set body loaded
    document.body.style.opacity = '1';
    document.body.classList.add('loaded');
    
    // Add mobile class if needed
    if (isMobile) {
        document.body.classList.add('mobile-device');
    }
    
    // Initialize stats animation
    const stats = document.querySelectorAll('.stat-num');
    stats.forEach(stat => {
        observer.observe(stat);
    });
    
    console.log('Website initialized. Mobile:', isMobile, 'Language:', currentLanguage);
});