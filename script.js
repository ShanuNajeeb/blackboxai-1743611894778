document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js for the hero section
    const typed = new Typed('#typed', {
        strings: ['AI solutions', 'automation tools', 'cloud security', 'future tech'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f0ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f0ff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
        <a href="#features" class="text-white hover:text-[var(--neon-blue)] transition-colors">Features</a>
        <a href="#tech" class="text-white hover:text-[var(--neon-pink)] transition-colors">Tech Stack</a>
        <a href="#testimonials" class="text-white hover:text-[var(--neon-green)] transition-colors">Testimonials</a>
        <a href="#contact" class="text-white hover:text-white bg-[var(--neon-blue)] px-4 py-2 rounded-full hover:bg-opacity-80 transition-all">Contact</a>
        <button class="absolute top-6 right-6 text-white text-2xl">
            <i class="fas fa-times"></i>
        </button>
    `;
    document.body.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    mobileMenu.querySelector('button').addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!email.includes('@')) {
                alert('Please enter a valid email address');
                return;
            }
            
            try {
                const response = await fetch('http://localhost:8000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message })
                });
                
                const data = await response.json();
                if (response.ok) {
                    alert('Thank you for your message! We will get back to you soon.');
                    form.reset();
                } else {
                    alert(data.error || 'Failed to send message');
                }
            } catch (err) {
                alert('Network error. Please try again later.');
            }
        });
    }

    // Login/Register UI (added to navbar)
    const authDiv = document.createElement('div');
    authDiv.className = 'hidden md:flex space-x-4 items-center';
    authDiv.innerHTML = `
        <a href="#" id="loginBtn" class="text-white hover:text-[var(--neon-pink)] transition-colors">Login</a>
        <a href="#" id="registerBtn" class="text-white hover:text-white bg-[var(--neon-green)] px-4 py-2 rounded-full hover:bg-opacity-80 transition-all">Register</a>
    `;
    document.querySelector('nav .container .flex').appendChild(authDiv);

    // Auth modals would be implemented here
});