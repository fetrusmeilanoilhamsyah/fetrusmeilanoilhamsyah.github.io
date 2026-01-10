// Media data
const mediaData = [
    { type: 'youtube', videoId: '8f71Aun2-a4', title: 'BOT TXT TO VCF' },
    { type: 'youtube', videoId: 'wvNrqNfqIxA', title: 'DRONE FONTAGE' },
    { type: 'youtube', videoId: 'F9RKmwmMwb8', title: 'BOT JPG TO PDF' },
];

// Load media
function loadMedia() {
    const grid = document.getElementById('mediaGrid');
    if (!grid) return;

    mediaData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'media-item';

        if (item.type === 'youtube') {
            div.innerHTML = `
                <iframe 
                    src="https://www.youtube.com/embed/${item.videoId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            `;
        } else {
            div.innerHTML = `<img src="${item.src}" alt="${item.title}" loading="lazy">`;
        }

        grid.appendChild(div);
    });
}

// Profile image fallback
const profileImg = document.getElementById('profileImg');
const fallback = document.getElementById('imageFallback');

if (profileImg && fallback) {
    profileImg.onerror = function() {
        this.style.display = 'none';
        fallback.style.display = 'flex';
    };

    if (!profileImg.src || profileImg.src.includes('undefined')) {
        profileImg.style.display = 'none';
        fallback.style.display = 'flex';
    }
}

// CV Download
const cvButtons = [
    document.getElementById('downloadCV'),
    document.getElementById('footerDownloadCV')
];

cvButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = 'files/CV_Fetrus_Meilano.pdf';
            link.download = 'CV_Fetrus_Meilano.pdf';
            link.click();
        });
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Init
window.addEventListener('DOMContentLoaded', loadMedia);