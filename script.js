// =======================================================
// INNOMETRICS AUTOMATION & CONTROLS
// Optimized JavaScript File with Mobile Map Fixes
// =======================================================

// Configuration
const CONFIG = {
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzCdPevYrBkBlwXt7UweQD3Uh_EpHG86Rr8eZC90DRpdWEmyLUfYc-KQtPZHx5jQYls/exec',
    WHATSAPP_NUMBER: '919730013049',
    MAX_FILE_SIZE: 400 * 1024, // 400KB
    ALLOWED_FILE_TYPES: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ],
    SLIDE_INTERVAL: 5000, // 5 seconds
    OFFICE_LATITUDE: 28.40147989453743,
    OFFICE_LONGITUDE: 76.94422147446838,
    OFFICE_ADDRESS: 'SS Omnia Commercial, Sector 86, Gurugram, Haryana 122012'
};

// State management
let isSubmitting = false;
let currentSlide = 0;
let slideInterval;
let touchStartX = 0;
let touchEndX = 0;

// =======================================================
// 1. INITIALIZATION
// =======================================================

function initializePage() {
    console.log('🚀 Innometrics Automation & Controls - Initializing...');
    
    try {
        // First fix text visibility immediately
        fixTextVisibility();
        
        // Initialize components in optimal order
        initMobileOptimizations();
        initSlider();
        initContactForm();
        initSmoothScrolling();
        initAnimations();
        initStatsCounter();
        initWhatsApp();
        initFloatingButtons();
        initLazyLoading();
        initMaps(); // Initialize maps functionality
        
        // Update copyright year
        updateCopyrightYear();
        
        // Fix text visibility again after components load
        setTimeout(() => {
            fixTextVisibility();
            document.body.classList.add('page-loaded');
        }, 100);
        
        console.log('✅ Website fully initialized');
        
    } catch (error) {
        console.error('Initialization error:', error);
        showAlert('There was an error initializing the page. Please refresh.', 'error');
    }
}

// =======================================================
// 2. TEXT VISIBILITY FIXES
// =======================================================

function fixTextVisibility() {
    console.log('🔧 Fixing text visibility...');
    
    // Select all text elements that might have visibility issues
    const textElements = [
        'p',
        'li',
        'span:not(.navbar-brand span):not(.fa):not(.fab):not(.fas)',
        '.card-text',
        '.lead',
        '.small',
        '.text-muted',
        '.service-card p',
        '.industry-card h5',
        '.leader-card p',
        '.brand-list li',
        '#about p',
        '#about li',
        '.contact-section p',
        '.footer p',
        '.footer li',
        '.card-body',
        '.stat-text',
        '.sub-headline',
        '.short-text',
        '.hr-contact-alert p',
        '.career-form p'
    ];
    
    const selector = textElements.join(', ');
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        // Skip elements that already have good contrast
        if (element.classList.contains('text-warning') || 
            element.classList.contains('text-primary') ||
            element.classList.contains('text-success') ||
            element.classList.contains('text-danger')) {
            return;
        }
        
        // Force light text color
        element.style.color = '#f0f0f0';
        element.style.textShadow = '0 1px 3px rgba(0, 0, 0, 0.7)';
        
        // Increase opacity for better visibility
        if (element.tagName !== 'H1' && element.tagName !== 'H2' && element.tagName !== 'H3' && 
            element.tagName !== 'H4' && element.tagName !== 'H5' && element.tagName !== 'H6') {
            element.style.opacity = '0.95';
        }
    });
    
    // Fix specific problematic elements
    const problematicElements = [
        '.card-body',
        '.service-card',
        '.leader-card',
        '.brand-section',
        '.contact-form-container',
        '.career-form',
        '.stats-section',
        '.automation-services',
        '.industries-section',
        '.leadership-section'
    ];
    
    problematicElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // Make backgrounds more opaque for better text contrast
            el.style.backgroundColor = 'rgba(40, 40, 40, 0.9)';
            el.style.backdropFilter = 'blur(5px)';
        });
    });
    
    // Fix navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.style.color = '#ffffff';
        link.style.opacity = '0.9';
    });
    
    // Fix section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        title.style.color = '#ff7b00';
        title.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.5)';
    });
    
    // Fix slider text
    const sliderContent = document.querySelectorAll('.slider-content h1, .slider-content .sub-headline, .slider-content .short-text');
    sliderContent.forEach(text => {
        if (text.classList.contains('sub-headline')) {
            text.style.color = '#ff7b00';
        } else if (text.classList.contains('short-text')) {
            text.style.color = '#f0f0f0';
        } else {
            text.style.color = '#ffffff';
        }
        text.style.textShadow = '0 2px 4px rgba(0, 0, 0, 0.8)';
    });
    
    console.log(`✅ Fixed text visibility for ${elements.length} elements`);
}

// =======================================================
// 3. SLIDER/CAROUSEL FUNCTIONALITY
// =======================================================

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (slides.length === 0) return;
    
    // Slide navigation functions
    const showSlide = (index) => {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;
        
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });
        
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        setTimeout(() => {
            slides[index].style.opacity = '1';
        }, 50);
        
        dots[index].classList.add('active');
        
        currentSlide = index;
    };
    
    const nextSlide = () => {
        showSlide(currentSlide + 1);
    };
    
    const prevSlide = () => {
        showSlide(currentSlide - 1);
    };
    
    const goToSlide = (index) => {
        showSlide(index);
    };
    
    // Auto slide functionality
    const startAutoSlide = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, CONFIG.SLIDE_INTERVAL);
    };
    
    const stopAutoSlide = () => {
        clearInterval(slideInterval);
    };
    
    // Initialize
    showSlide(0);
    startAutoSlide();
    
    // Event Listeners for controls
    document.querySelectorAll('.slider-arrow.prev').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            prevSlide();
            startAutoSlide();
        });
    });
    
    document.querySelectorAll('.slider-arrow.next').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            nextSlide();
            startAutoSlide();
        });
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(index);
            startAutoSlide();
        });
    });
    
    // Pause on hover
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', stopAutoSlide);
        slider.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Touch support for mobile
    if ('ontouchstart' in window) {
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopAutoSlide();
        }, { passive: true });
        
        slider.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoSlide();
        }, { passive: true });
        
        const handleSwipe = () => {
            const minSwipeDistance = 50;
            const distance = touchStartX - touchEndX;
            
            if (Math.abs(distance) < minSwipeDistance) return;
            
            if (distance > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        };
    }
    
    // Make functions globally available
    window.changeSlide = (direction) => {
        if (direction > 0) nextSlide();
        else prevSlide();
    };
    
    window.goToSlide = goToSlide;
}

// =======================================================
// 4. GOOGLE MAPS FUNCTIONS (MOBILE FIX)
// =======================================================

function initMaps() {
    console.log('📍 Initializing maps functionality...');
    
    // Add click handlers to all map buttons
    document.querySelectorAll('.open-map-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openGoogleMaps();
        });
    });
    
    document.querySelectorAll('.open-directions-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openDirections();
        });
    });
    
    // Add touch events for mobile
    if ('ontouchstart' in window) {
        const staticMaps = document.querySelectorAll('.static-map');
        staticMaps.forEach(map => {
            map.addEventListener('touchstart', function(e) {
                e.preventDefault();
                // Add touch feedback
                this.style.opacity = '0.9';
            }, { passive: false });
            
            map.addEventListener('touchend', function(e) {
                this.style.opacity = '1';
            }, { passive: true });
            
            map.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, { passive: false });
        });
    }
    
    console.log('✅ Maps functionality initialized');
}

function openGoogleMaps() {
    const latitude = CONFIG.OFFICE_LATITUDE;
    const longitude = CONFIG.OFFICE_LONGITUDE;
    
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    let mapsUrl;
    
    if (isMobile) {
        // Open in native maps app
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // iOS - Apple Maps
            mapsUrl = `https://maps.apple.com/?q=${latitude},${longitude}&ll=${latitude},${longitude}&z=16`;
        } else {
            // Android - Google Maps
            mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        }
    } else {
        // Desktop - Google Maps Web
        mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=16`;
    }
    
    // Open in new tab
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
    
    // Show confirmation
    showAlert(
        '<div class="text-center">' +
        '<i class="fas fa-map-marked-alt fa-2x text-primary mb-2"></i>' +
        '<h5 class="mb-2">Opening Maps</h5>' +
        '<p>Opening location in maps application...</p>' +
        '</div>',
        'info'
    );
}

function openDirections() {
    const latitude = CONFIG.OFFICE_LATITUDE;
    const longitude = CONFIG.OFFICE_LONGITUDE;
    const encodedAddress = encodeURIComponent(CONFIG.OFFICE_ADDRESS);
    
    // Check if device is mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    let directionsUrl;
    
    if (isMobile) {
        // Mobile - Get directions
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            // iOS - Apple Maps Directions
            directionsUrl = `https://maps.apple.com/?daddr=${encodedAddress}&dirflg=d`;
        } else {
            // Android - Google Maps Directions
            directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&travelmode=driving`;
        }
    } else {
        // Desktop - Google Maps Web Directions
        directionsUrl = `https://www.google.com/maps/dir//${encodedAddress}/@${latitude},${longitude},16z`;
    }
    
    // Open in new tab
    window.open(directionsUrl, '_blank', 'noopener,noreferrer');
    
    // Show confirmation
    showAlert(
        '<div class="text-center">' +
        '<i class="fas fa-directions fa-2x text-warning mb-2"></i>' +
        '<h5 class="mb-2">Getting Directions</h5>' +
        '<p>Opening directions in maps application...</p>' +
        '</div>',
        'info'
    );
}

// Make functions globally available
window.openGoogleMaps = openGoogleMaps;
window.openDirections = openDirections;

// =======================================================
// 5. CONTACT FORM HANDLING
// =======================================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    console.log('Initializing contact form...');
    
    // Initialize form components
    initFileUpload();
    initCharacterCounter();
    setupFormValidation(contactForm);
    
    // Form submission handler
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (isSubmitting) {
            showAlert('Please wait, your form is being submitted...', 'warning');
            return;
        }
        
        if (!validateForm(this)) {
            showAlert('Please fill all required fields correctly.', 'error');
            return;
        }
        
        const fileInput = this.querySelector('#contactFile');
        if (fileInput && fileInput.files.length > 0) {
            const file = fileInput.files[0];
            if (!validateFile(file, true)) return;
        }
        
        await handleFormSubmission(this);
    });
    
    console.log('✅ Contact form initialized');
}

function initFileUpload() {
    const fileInput = document.getElementById('contactFile');
    const fileName = document.getElementById('contactFileName');
    
    if (!fileInput || !fileName) return;
    
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            const file = this.files[0];
            
            if (file.size > CONFIG.MAX_FILE_SIZE) {
                showAlert(
                    `File size exceeds 400KB limit!<br>
                    Your file: ${formatFileSize(file.size)}<br>
                    Maximum allowed: 400KB`,
                    'error'
                );
                this.value = '';
                fileName.textContent = 'PDF, DOC, JPG, PNG (max 400KB)';
                return;
            }
            
            if (!CONFIG.ALLOWED_FILE_TYPES.includes(file.type)) {
                showAlert(
                    `File type not allowed!<br>
                    Allowed types: JPG, PNG, PDF, DOC, DOCX`,
                    'error'
                );
                this.value = '';
                fileName.textContent = 'PDF, DOC, JPG, PNG (max 400KB)';
                return;
            }
            
            fileName.textContent = `${file.name} (${formatFileSize(file.size)})`;
        } else {
            fileName.textContent = 'PDF, DOC, JPG, PNG (max 400KB)';
        }
    });
}

function initCharacterCounter() {
    const textarea = document.getElementById('contactMessage');
    if (!textarea) return;
    
    const counter = textarea.nextElementSibling;
    if (!counter || !counter.classList.contains('char-counter')) return;
    
    const updateCounter = () => {
        const length = textarea.value.length;
        counter.textContent = `${length}/1000`;
        
        counter.className = 'char-counter';
        
        if (length > 900) {
            counter.classList.add('warning');
            counter.style.color = '#ff7b00';
        } else if (length >= 1000) {
            textarea.value = textarea.value.substring(0, 1000);
            counter.textContent = '1000/1000 (Maximum)';
            counter.classList.add('error');
            counter.style.color = '#e74c3c';
        } else {
            counter.classList.add('text-muted');
            counter.style.color = '#aaaaaa';
        }
    };
    
    updateCounter();
    textarea.addEventListener('input', updateCounter);
}

function setupFormValidation(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-invalid', 'is-valid');
            
            if (this.value.trim()) {
                if (this.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(this.value)) {
                        this.classList.add('is-valid');
                    }
                } else {
                    this.classList.add('is-valid');
                }
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('is-invalid');
            }
            
            if (this.type === 'email' && this.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(this.value)) {
                    this.classList.add('is-invalid');
                }
            }
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        field.classList.remove('is-invalid', 'is-valid');
        
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            if (field.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    field.classList.add('is-invalid');
                    isValid = false;
                } else {
                    field.classList.add('is-valid');
                }
            } else {
                field.classList.add('is-valid');
            }
        }
    });
    
    return isValid;
}

function validateFile(file, showAlert = false) {
    if (!file) return true;
    
    if (file.size > CONFIG.MAX_FILE_SIZE) {
        if (showAlert) {
            showAlert(`File exceeds 400KB limit (${formatFileSize(file.size)})`, 'error');
        }
        return false;
    }
    
    if (!CONFIG.ALLOWED_FILE_TYPES.includes(file.type)) {
        if (showAlert) {
            showAlert('Only JPG, PNG, PDF, DOC, and DOCX files are allowed.', 'error');
        }
        return false;
    }
    
    return true;
}

async function handleFormSubmission(form) {
    isSubmitting = true;
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    
    try {
        // Get form data
        const formData = {
            name: document.getElementById('contactName').value.trim(),
            email: document.getElementById('contactEmail').value.trim(),
            phone: document.getElementById('contactPhone').value.trim() || 'Not provided',
            company: document.getElementById('contactCompany').value.trim() || 'Not provided',
            subject: document.getElementById('contactSubject').value,
            message: document.getElementById('contactMessage').value.trim(),
            submission_id: `innometrics_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
        };
        
        // Create URL parameters
        const params = new URLSearchParams();
        Object.keys(formData).forEach(key => {
            params.append(key, formData[key]);
        });
        
        // Add timestamp
        params.append('timestamp', new Date().toISOString());
        
        // Create submission URL
        const submitUrl = `${CONFIG.GOOGLE_SCRIPT_URL}?${params.toString()}`;
        
        // Submit using fetch
        const response = await fetch(submitUrl, {
            method: 'GET',
            mode: 'no-cors',
            cache: 'no-cache'
        });
        
        console.log('✅ Form submitted successfully');
        
        // Show success message
        showAlert(
            '<div class="text-center">' +
            '<i class="fas fa-check-circle fa-2x text-success mb-2"></i>' +
            '<h5 class="mb-2">Thank You!</h5>' +
            '<p>Your message has been sent successfully.<br>We will contact you within 24 hours.</p>' +
            '</div>',
            'success'
        );
        
        // Reset form after delay
        setTimeout(() => {
            resetForm(form);
        }, 1500);
        
    } catch (error) {
        console.error('Form submission error:', error);
        
        showAlert(
            '<div class="text-center">' +
            '<i class="fas fa-exclamation-triangle fa-2x text-danger mb-2"></i>' +
            '<h5 class="mb-2">Submission Error</h5>' +
            '<p>There was an error sending your message.<br>Please try again or contact us directly.</p>' +
            '</div>',
            'error'
        );
        
    } finally {
        // Restore button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
        
        // Reset submission state
        setTimeout(() => {
            isSubmitting = false;
        }, 3000);
    }
}

function resetForm(form) {
    form.reset();
    form.classList.remove('was-validated');
    
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.classList.remove('is-invalid', 'is-valid');
    });
    
    const fileName = document.getElementById('contactFileName');
    if (fileName) {
        fileName.textContent = 'PDF, DOC, JPG, PNG (max 400KB)';
    }
    
    const textarea = document.getElementById('contactMessage');
    if (textarea) {
        textarea.value = '';
        const counter = textarea.nextElementSibling;
        if (counter && counter.classList.contains('char-counter')) {
            counter.textContent = '0/1000';
            counter.className = 'char-counter text-muted';
            counter.style.color = '#aaaaaa';
        }
    }
}

// =======================================================
// 6. ALERTS AND NOTIFICATIONS
// =======================================================

function showAlert(message, type = 'info') {
    // Remove existing alerts
    const existingAlerts = document.querySelectorAll('.global-alert');
    existingAlerts.forEach(alert => {
        if (alert.parentNode) {
            alert.parentNode.removeChild(alert);
        }
    });
    
    // Create alert element with good contrast
    const alertDiv = document.createElement('div');
    alertDiv.className = `global-alert alert alert-${type} alert-dismissible fade show`;
    alertDiv.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 9999;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        color: #ffffff;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        alertDiv.style.backgroundColor = 'rgba(40, 167, 69, 0.9)';
        alertDiv.style.borderColor = '#28a745';
    } else if (type === 'error' || type === 'danger') {
        alertDiv.style.backgroundColor = 'rgba(220, 53, 69, 0.9)';
        alertDiv.style.borderColor = '#dc3545';
    } else if (type === 'warning') {
        alertDiv.style.backgroundColor = 'rgba(255, 193, 7, 0.9)';
        alertDiv.style.borderColor = '#ffc107';
        alertDiv.style.color = '#212529';
    } else {
        alertDiv.style.backgroundColor = 'rgba(23, 162, 184, 0.9)';
        alertDiv.style.borderColor = '#17a2b8';
    }
    
    alertDiv.innerHTML = `
        <div class="d-flex align-items-start">
            <div class="flex-grow-1">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(alertDiv);
    
    // Auto-dismiss
    const dismissTime = type === 'success' ? 5000 : 8000;
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, dismissTime);
}

// =======================================================
// 7. SMOOTH SCROLLING AND NAVIGATION
// =======================================================

function initSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                // Close mobile navbar if open
                const navbar = document.getElementById('navbarNav');
                if (navbar && navbar.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbar);
                    if (bsCollapse) bsCollapse.hide();
                }
                
                // Calculate scroll position
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;
                
                // Smooth scroll
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                updateActiveNavLink(href);
            }
        });
    });
    
    // Update nav on scroll
    window.addEventListener('scroll', debounce(updateNavOnScroll, 100));
}

function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
            link.style.color = '#ff7b00';
        } else {
            link.style.color = '#ffffff';
        }
    });
}

function updateNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    if (currentSection) {
        updateActiveNavLink('#' + currentSection);
    }
}

// =======================================================
// 8. ANIMATIONS ON SCROLL
// =======================================================

function initAnimations() {
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('animated');
        });
    }
}

// =======================================================
// 9. STATS COUNTER ANIMATION
// =======================================================

function initStatsCounter() {
    const statItems = document.querySelectorAll('.stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                const targetValue = parseInt(statNumber.textContent);
                animateCounter(statNumber, targetValue);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statItems.forEach(item => observer.observe(item));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 30);
}

// =======================================================
// 10. WHATSAPP INTEGRATION
// =======================================================

function initWhatsApp() {
    window.openWhatsApp = function() {
        let message = "Hello Innometrics Automation Team,\n\n";
        message += "I'm interested in your industrial automation services.\n\n";
        
        const name = document.getElementById('contactName')?.value;
        const email = document.getElementById('contactEmail')?.value;
        const company = document.getElementById('contactCompany')?.value;
        
        if (name) message += `Name: ${name}\n`;
        if (email) message += `Email: ${email}\n`;
        if (company) message += `Company: ${company}\n`;
        
        message += "\nPlease contact me to discuss our automation requirements.";
        
        const encodedMessage = encodeURIComponent(message);
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        
        const whatsappUrl = isMobile
            ? `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`
            : `https://web.whatsapp.com/send?phone=${CONFIG.WHATSAPP_NUMBER}&text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };
}

// =======================================================
// 11. FLOATING ACTION BUTTONS
// =======================================================

function initFloatingButtons() {
    // Call button
    const callBtn = document.querySelector('.call-btn');
    if (callBtn) {
        callBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'tel:+919730013049';
        });
    }
    
    // WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openWhatsApp();
        });
    }
}

// =======================================================
// 12. LAZY LOADING FOR IMAGES
// =======================================================

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.1
        });
        
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// =======================================================
// 13. MOBILE OPTIMIZATIONS
// =======================================================

function initMobileOptimizations() {
    // Prevent iOS zoom on input focus
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.fontSize = '16px';
            });
            
            input.addEventListener('blur', function() {
                this.style.fontSize = '';
            });
        });
    }
    
    // Handle viewport height on mobile
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    
    // Fix mobile map interactions
    if ('ontouchstart' in window) {
        // Prevent default touch behavior on map containers
        document.querySelectorAll('.interactive-map, .static-map').forEach(element => {
            element.addEventListener('touchmove', function(e) {
                e.preventDefault();
            }, { passive: false });
        });
    }
}

// =======================================================
// 14. UTILITY FUNCTIONS
// =======================================================

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

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

function updateCopyrightYear() {
    const yearElements = document.querySelectorAll('#currentYear');
    if (yearElements.length > 0) {
        const currentYear = new Date().getFullYear();
        yearElements.forEach(el => {
            el.textContent = currentYear;
        });
    }
}

// =======================================================
// 15. ERROR HANDLING
// =======================================================

// Global error handler
window.addEventListener('error', function(e) {
    console.error('Page error:', e.error);
    
    // Fallback for slider
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        const activeSlide = document.querySelector('.slide.active');
        if (activeSlide) activeSlide.style.opacity = '1';
    }
    
    // Fix text visibility in case of error
    fixTextVisibility();
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
});

// =======================================================
// 16. START EVERYTHING
// =======================================================

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Re-initialize slider on resize
    if (document.querySelectorAll('.slide').length > 0) {
        clearInterval(slideInterval);
        initSlider();
    }
    
    // Fix text visibility on resize
    fixTextVisibility();
}, 250));

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        clearInterval(slideInterval);
    } else {
        if (document.querySelectorAll('.slide').length > 0) {
            initSlider();
        }
        // Fix text visibility when page becomes visible again
        fixTextVisibility();
    }
});

// Periodically check and fix text visibility (in case dynamic content loads)
setInterval(fixTextVisibility, 5000);

// =======================================================
// END OF SCRIPT
// =======================================================