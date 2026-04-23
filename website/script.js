// Koech Insights 5 - JavaScript Functionality

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
if (navMenu) {
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
}

// Update Active Nav Link
function updateActiveNavLink() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (currentLocation.includes(href) || 
            (currentLocation === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('load', updateActiveNavLink);

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const company = document.getElementById('company').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!name || !email || !service || !message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Prepare form data for submission
        const formData = {
            name: name,
            email: email,
            phone: phone,
            company: company,
            service: service,
            message: message,
            date: new Date().toISOString()
        };
        
        // In a real application, you would send this to a backend server
        // For now, we'll just show a success message and save to localStorage
        
        // Save to localStorage (for demonstration)
        let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
        submissions.push(formData);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        // Show success message
        showFormMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Optional: Send to a backend service like Formspree or similar
        // Uncomment and modify the URL below to integrate with a backend
        /*
        fetch('https://your-backend-endpoint.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
        })
        .catch(error => {
            showFormMessage('An error occurred. Please try again later.', 'error');
        });
        */
    });
}

// Show form message
function showFormMessage(message, type) {
    const messageDiv = document.getElementById('formMessage');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = `form-message ${type}`;
        
        // Auto-hide success message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                messageDiv.className = '';
            }, 5000);
        }
    }
}

// Scroll animations for cards
function animateOnScroll() {
    const cards = document.querySelectorAll('.service-card, .team-member, .value-card, .feature');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

window.addEventListener('load', animateOnScroll);

// Smooth scroll for anchor links
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

// Log initial page load
console.log('Koech Insights 5 Website Loaded Successfully');
