        // Advanced JavaScript Functions

        // Loading Screen
        window.addEventListener('load', function() {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 2000);
        });

        // Particle Background
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Typing Animation
        function initTypingAnimation() {
            const typingElement = document.getElementById('typing-text');
            const texts = [
                'Web Developer',
                'UI/UX Designer',
                'Full Stack Developer',
                'Creative Coder',
                'Problem Solver'
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            function typeWriter() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typingElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }

                if (!isDeleting && charIndex === currentText.length) {
                    setTimeout(() => isDeleting = true, 2000);
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                }

                const speed = isDeleting ? 50 : 100;
                setTimeout(typeWriter, speed);
            }

            setTimeout(typeWriter, 1000);
        }

        // Smooth Scrolling
        function initSmoothScrolling() {
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
        }

        // Navigation Active State
        function updateActiveNavLink() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }

        // Navbar Scroll Effect
        function handleNavbarScroll() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Scroll Animations
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe all animation elements
            document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
                observer.observe(el);
            });
        }

        // Skills Animation
        function animateSkills() {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const skillsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const width = progressBar.getAttribute('data-width');
                        setTimeout(() => {
                            progressBar.style.width = width + '%';
                        }, 500);
                    }
                });
            }, { threshold: 0.5 });

            skillBars.forEach(bar => {
                skillsObserver.observe(bar);
            });
        }

        // Contact Form
        function initContactForm() {
            const form = document.getElementById('contactForm');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(form);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                if (name && email && subject && message) {
                    // Simulate form submission
                    const submitBtn = form.querySelector('.submit-btn');
                    const originalText = submitBtn.textContent;
                    
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        alert('Thank you for your message! I\'ll get back to you soon.');
                        form.reset();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                    }, 2000);
                } else {
                    alert('Please fill in all fields.');
                }
            });
        }

        // Project Lightbox
        function openLightbox(projectId) {
            alert(`Opening ${projectId} demo! (This would open a lightbox or redirect to the project)`);
        }

        // Parallax Effect
        function initParallaxEffect() {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.hero');
                
                parallaxElements.forEach(element => {
                    const speed = 0.5;
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        }

        // Mouse Movement Effect
        function initMouseEffect() {
            document.addEventListener('mousemove', (e) => {
                const particles = document.querySelectorAll('.particle');
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                particles.forEach((particle, index) => {
                    const speed = (index % 5 + 1) * 0.5;
                    const xPos = x * speed;
                    const yPos = y * speed;
                    
                    particle.style.transform = `translate(${xPos}px, ${yPos}px)`;
                });
            });
        }



        // Initialize all functions
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            initTypingAnimation();
            initSmoothScrolling();
            initScrollAnimations();
            animateSkills();
            initContactForm();
            initParallaxEffect();
            initMouseEffect();
        });

        // Scroll event listeners
        window.addEventListener('scroll', function() {
            updateActiveNavLink();
            handleNavbarScroll();
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Press 'H' to go to home
            if (e.key === 'h' || e.key === 'H') {
                document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            }
            // Press 'C' to go to contact
            if (e.key === 'c' || e.key === 'C') {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Easter egg - Konami code
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

        document.addEventListener('keydown', function(e) {
            konamiCode.push(e.code);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join(',') === konamiSequence.join(',')) {
                document.body.style.filter = 'hue-rotate(180deg)';
                alert('🎉 Easter egg activated! You found the secret!');
                setTimeout(() => {
                    document.body.style.filter = 'none';
                }, 5000);
                konamiCode = [];
            }
        });