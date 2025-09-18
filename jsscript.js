// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Modal functions
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.modal__form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
            closeModal();
            form.reset();
        });
    }
});

// Sticky header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// Mobile menu toggle (for future mobile version)
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const menuToggle = document.createElement('button');
    menuToggle.innerHTML = '☰';
    menuToggle.className = 'menu-toggle';
    menuToggle.style.display = 'none';
    
    document.querySelector('.header__content').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('nav--open');
    });
    
    // Check if mobile
    function checkMobile() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
            nav.style.display = 'none';
        } else {
            menuToggle.style.display = 'none';
            nav.style.display = 'block';
        }
    }
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});