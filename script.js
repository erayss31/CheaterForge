// Language Management
let currentLanguage = 'tr';

const translations = {
    tr: {
        'Ana Sayfa': 'Ana Sayfa',
        'Özellikler': 'Özellikler',
        'Fiyatlandırma': 'Fiyatlandırma',
        'İletişim': 'İletişim',
        'Home': 'Ana Sayfa',
        'Features': 'Özellikler',
        'Pricing': 'Fiyatlandırma',
        'Contact': 'İletişim',
        'Hemen Satın Al': 'Hemen Satın Al',
        'Buy Now': 'Hemen Satın Al',
        'Hileyi İzle': 'Hileyi İzle',
        'Watch Cheat': 'Hileyi İzle',
        'Mutlu Müşteri': 'Mutlu Müşteri',
        'Happy Customers': 'Mutlu Müşteri',
        'Destek': 'Destek',
        'Support': 'Destek',
        'Güvenli': 'Güvenli',
        'Safe': 'Güvenli',
        'En gelişmiş hile özellikleri ile oyunu tamamen kontrol edin': 'En gelişmiş hile özellikleri ile oyunu tamamen kontrol edin',
        'Take complete control of the game with the most advanced cheat features': 'En gelişmiş hile özellikleri ile oyunu tamamen kontrol edin',
        'Aimbot': 'Aimbot',
        'Wallhack': 'Wallhack',
        'Speed Hack': 'Speed Hack',
        'Anti-Ban': 'Anti-Ban',
        'Auto Update': 'Auto Update',
        '7/24 Destek': '7/24 Destek',
        '24/7 Support': '7/24 Destek',
        'Otomatik nişan alma ile %100 isabet oranı': 'Otomatik nişan alma ile %100 isabet oranı',
        '100% accuracy with automatic aiming': 'Otomatik nişan alma ile %100 isabet oranı',
        'Duvarların arkasındaki düşmanları görün': 'Duvarların arkasındaki düşmanları görün',
        'See enemies behind walls': 'Duvarların arkasındaki düşmanları görün',
        'Ultra hızlı hareket ve kaçış': 'Ultra hızlı hareket ve kaçış',
        'Ultra fast movement and escape': 'Ultra hızlı hareket ve kaçış',
        '%100 güvenli, tespit edilmez': '%100 güvenli, tespit edilmez',
        '100% safe, undetectable': '%100 güvenli, tespit edilmez',
        'Otomatik güncellemeler ile her zaman güncel': 'Otomatik güncellemeler ile her zaman güncel',
        'Always up to date with automatic updates': 'Otomatik güncellemeler ile her zaman güncel',
        'Kesintisiz teknik destek': 'Kesintisiz teknik destek',
        'Uninterrupted technical support': 'Kesintisiz teknik destek',
        'Tek seferlik ödeme, ömür boyu erişim': 'Tek seferlik ödeme, ömür boyu erişim',
        'One-time payment, lifetime access': 'Tek seferlik ödeme, ömür boyu erişim',
        'Lifetime Lisans': 'Lifetime Lisans',
        'Lifetime License': 'Lifetime Lisans',
        '/Ömür Boyu': '/Ömür Boyu',
        '/Lifetime': '/Ömür Boyu',
        'Tüm hile özellikleri': 'Tüm hile özellikleri',
        'All cheat features': 'Tüm hile özellikleri',
        'Ömür boyu erişim': 'Ömür boyu erişim',
        'Lifetime access': 'Ömür boyu erişim',
        'Otomatik güncellemeler': 'Otomatik güncellemeler',
        'Automatic updates': 'Otomatik güncellemeler',
        '7/24 teknik destek': '7/24 teknik destek',
        '24/7 technical support': '7/24 teknik destek',
        'Anti-ban koruması': 'Anti-ban koruması',
        'Anti-ban protection': 'Anti-ban koruması',
        'Anında teslimat': 'Anında teslimat',
        'Instant delivery': 'Anında teslimat',
        'Ödeme Yöntemleri': 'Ödeme Yöntemleri',
        'Payment Methods': 'Ödeme Yöntemleri',
        'Sorularınız için bizimle iletişime geçin': 'Sorularınız için bizimle iletişime geçin',
        'Contact us for your questions': 'Sorularınız için bizimle iletişime geçin',
        'E-posta': 'E-posta',
        'Email': 'E-posta',
        'Adınız': 'Adınız',
        'Your Name': 'Adınız',
        'E-posta': 'E-posta',
        'Email': 'E-posta',
        'Mesajınız': 'Mesajınız',
        'Your Message': 'Mesajınız',
        'Gönder': 'Gönder',
        'Send': 'Gönder',
        'En gelişmiş oyun hileleri': 'En gelişmiş oyun hileleri',
        'The most advanced game cheats': 'En gelişmiş oyun hileleri',
        'Hızlı Linkler': 'Hızlı Linkler',
        'Quick Links': 'Hızlı Linkler',
        'Yasal': 'Yasal',
        'Legal': 'Yasal',
        'Kullanım Şartları': 'Kullanım Şartları',
        'Terms of Service': 'Kullanım Şartları',
        'Gizlilik Politikası': 'Gizlilik Politikası',
        'Privacy Policy': 'Gizlilik Politikası',
        'İade Politikası': 'İade Politikası',
        'Refund Policy': 'İade Politikası',
        'Tüm hakları saklıdır.': 'Tüm hakları saklıdır.',
        'All rights reserved.': 'Tüm hakları saklıdır.',
        'Ödeme': 'Ödeme',
        'Payment': 'Ödeme',
        'Topluluk': 'Topluluk',
        'Community': 'Topluluk',
        'Discord Sunucusu': 'Discord Sunucusu',
        'Discord Server': 'Discord Sunucusu',
        'E-posta Adresiniz (Zorunlu)': 'E-posta Adresiniz (Zorunlu)',
        'Your Email (Required)': 'E-posta Adresiniz (Zorunlu)',
        'Hile dosyası bu e-posta adresine gönderilecek': 'Hile dosyası bu e-posta adresine gönderilecek',
        'Cheat file will be sent to this email': 'Hile dosyası bu e-posta adresine gönderilecek',
        'Toplam:': 'Toplam:',
        'Total:': 'Toplam:',
        'Ödemeyi Tamamla': 'Ödemeyi Tamamla',
        'Complete Payment': 'Ödemeyi Tamamla'
    },
    en: {
        'Ana Sayfa': 'Home',
        'Özellikler': 'Features',
        'Fiyatlandırma': 'Pricing',
        'İletişim': 'Contact',
        'Home': 'Home',
        'Features': 'Features',
        'Pricing': 'Pricing',
        'Contact': 'Contact',
        'Hemen Satın Al': 'Buy Now',
        'Buy Now': 'Buy Now',
        'Hileyi İzle': 'Watch Cheat',
        'Watch Cheat': 'Watch Cheat',
        'Mutlu Müşteri': 'Happy Customers',
        'Happy Customers': 'Happy Customers',
        'Destek': 'Support',
        'Support': 'Support',
        'Güvenli': 'Safe',
        'Safe': 'Safe',
        'En gelişmiş hile özellikleri ile oyunu tamamen kontrol edin': 'Take complete control of the game with the most advanced cheat features',
        'Take complete control of the game with the most advanced cheat features': 'Take complete control of the game with the most advanced cheat features',
        'Aimbot': 'Aimbot',
        'Wallhack': 'Wallhack',
        'Speed Hack': 'Speed Hack',
        'Anti-Ban': 'Anti-Ban',
        'Auto Update': 'Auto Update',
        '7/24 Destek': '24/7 Support',
        '24/7 Support': '24/7 Support',
        'Otomatik nişan alma ile %100 isabet oranı': '100% accuracy with automatic aiming',
        '100% accuracy with automatic aiming': '100% accuracy with automatic aiming',
        'Duvarların arkasındaki düşmanları görün': 'See enemies behind walls',
        'See enemies behind walls': 'See enemies behind walls',
        'Ultra hızlı hareket ve kaçış': 'Ultra fast movement and escape',
        'Ultra fast movement and escape': 'Ultra fast movement and escape',
        '%100 güvenli, tespit edilmez': '100% safe, undetectable',
        '100% safe, undetectable': '100% safe, undetectable',
        'Otomatik güncellemeler ile her zaman güncel': 'Always up to date with automatic updates',
        'Always up to date with automatic updates': 'Always up to date with automatic updates',
        'Kesintisiz teknik destek': 'Uninterrupted technical support',
        'Uninterrupted technical support': 'Uninterrupted technical support',
        'Tek seferlik ödeme, ömür boyu erişim': 'One-time payment, lifetime access',
        'One-time payment, lifetime access': 'One-time payment, lifetime access',
        'Lifetime Lisans': 'Lifetime License',
        'Lifetime License': 'Lifetime License',
        '/Ömür Boyu': '/Lifetime',
        '/Lifetime': '/Lifetime',
        'Tüm hile özellikleri': 'All cheat features',
        'All cheat features': 'All cheat features',
        'Ömür boyu erişim': 'Lifetime access',
        'Lifetime access': 'Lifetime access',
        'Otomatik güncellemeler': 'Automatic updates',
        'Automatic updates': 'Automatic updates',
        '7/24 teknik destek': '24/7 technical support',
        '24/7 technical support': '24/7 technical support',
        'Anti-ban koruması': 'Anti-ban protection',
        'Anti-ban protection': 'Anti-ban protection',
        'Anında teslimat': 'Instant delivery',
        'Instant delivery': 'Instant delivery',
        'Ödeme Yöntemleri': 'Payment Methods',
        'Payment Methods': 'Payment Methods',
        'Sorularınız için bizimle iletişime geçin': 'Contact us for your questions',
        'Contact us for your questions': 'Contact us for your questions',
        'E-posta': 'Email',
        'Email': 'Email',
        'Adınız': 'Your Name',
        'Your Name': 'Your Name',
        'E-posta': 'Email',
        'Email': 'Email',
        'Mesajınız': 'Your Message',
        'Your Message': 'Your Message',
        'Gönder': 'Send',
        'Send': 'Send',
        'En gelişmiş oyun hileleri': 'The most advanced game cheats',
        'The most advanced game cheats': 'The most advanced game cheats',
        'Hızlı Linkler': 'Quick Links',
        'Quick Links': 'Quick Links',
        'Yasal': 'Legal',
        'Legal': 'Legal',
        'Kullanım Şartları': 'Terms of Service',
        'Terms of Service': 'Terms of Service',
        'Gizlilik Politikası': 'Privacy Policy',
        'Privacy Policy': 'Privacy Policy',
        'İade Politikası': 'Refund Policy',
        'Refund Policy': 'Refund Policy',
        'Tüm hakları saklıdır.': 'All rights reserved.',
        'All rights reserved.': 'All rights reserved.',
        'Ödeme': 'Payment',
        'Payment': 'Payment',
        'Topluluk': 'Community',
        'Community': 'Community',
        'Discord Sunucusu': 'Discord Server',
        'Discord Server': 'Discord Server',
        'E-posta Adresiniz (Zorunlu)': 'Your Email (Required)',
        'Your Email (Required)': 'Your Email (Required)',
        'Hile dosyası bu e-posta adresine gönderilecek': 'Cheat file will be sent to this email',
        'Cheat file will be sent to this email': 'Cheat file will be sent to this email',
        'Toplam:': 'Total:',
        'Total:': 'Total:',
        'Ödemeyi Tamamla': 'Complete Payment',
        'Complete Payment': 'Complete Payment'
    }
};

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-tr], [data-en]').forEach(element => {
        const translation = translations[lang][element.textContent.trim()] || 
                          translations[lang][element.dataset.tr] || 
                          translations[lang][element.dataset.en] ||
                          element.textContent.trim();
        element.textContent = translation;
    });
    
    // Update placeholders
    document.querySelectorAll('input[data-tr-placeholder], textarea[data-tr-placeholder]').forEach(element => {
        const placeholder = lang === 'tr' ? element.dataset.trPlaceholder : element.dataset.enPlaceholder;
        element.placeholder = placeholder;
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Language switcher event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.3)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Payment Modal
const modal = document.getElementById('paymentModal');
const buyButtons = document.querySelectorAll('.buy-btn, .btn-primary');
const closeBtn = document.querySelector('.close');

buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});



// Payment processing
document.querySelector('.modal-content .btn-primary').addEventListener('click', () => {
    const customerEmail = document.getElementById('customer-email').value.trim();
    
    if (!customerEmail) {
        showNotification('Lütfen e-posta adresinizi girin.', 'error');
        return;
    }
    
    if (!isValidEmail(customerEmail)) {
        showNotification('Geçerli bir e-posta adresi girin.', 'error');
        return;
    }
    
    showNotification('PayPal ödeme sayfasına yönlendiriliyorsunuz...', 'info');
    
    // Redirect to PayPal
    setTimeout(() => {
        window.open('https://www.paypal.com/instantcommerce/checkout/SPP9VCBUP5HLS', '_blank');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 1000);
    
    // Reset form
    document.getElementById('customer-email').value = '';
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



// Notification system
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.pricing-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Button click effects
document.querySelectorAll('.btn').forEach(button => {
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
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS
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

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});



// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            console.log('Swipe up detected');
        } else {
            console.log('Swipe down detected');
        }
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('tr');
});
