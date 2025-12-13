document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Testimonial Slider
    const testimonials = [
        {
            quote: "He is an excellent teacher he teaches what the student wants and acc to each students understanding",
            author: "Sanat Agrawal"
        },
        {
            quote: "Well well well! Amit sir is the best teacher for chemistry, the way he explains the concepts and make chemistry easy that is awesome. I joined him for class 11 and class 12 and opted him for my sister's NEET exam and she was able to score 686 marks in 2024. I would surely recommend Amit sir!",
            author: "Prashant Mall"
        },
        {
            quote: "If you are looking for the best for Chemistry, your search ends here. The hold on the core of the subject and the way it is explained is simply awesome. The most complex concepts are taught in an easy and fun way. Join him without a doubt.",
            author: "Mukesh Khatri"
        },
        {
            quote: "Amit sir, is a great teacher and a wonderful person, he have a indepth knowledge about his subject and have very interactive classes which would help a student amplify his performance in the subject. One will never regret the decision of taking classes from him, only because of his dedication towards his work.",
            author: "Manan Nautiyal"
        }
    ];

    // Initialize testimonial slider
    const testimonialContainer = document.querySelector('.testimonial-slider');
    const dotsContainer = document.querySelector('.dots');
    let currentSlide = 0;

    // Create dots for testimonials
    testimonials.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showTestimonial(index));
        dotsContainer.appendChild(dot);
    });

    // Navigation buttons
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showTestimonial(currentSlide);
        });
    }

    // Auto-rotate testimonials
    let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showTestimonial(currentSlide);
    }, 5000);

    // Pause auto-rotation on hover
    if (testimonialContainer) {
        testimonialContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        testimonialContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % testimonials.length;
                showTestimonial(currentSlide);
            }, 5000);
        });
    }

    function showTestimonial(index) {
        const testimonial = testimonials[index];
        const testimonialSlide = document.querySelector('.testimonial-slide');
        
        if (testimonialSlide) {
            testimonialSlide.innerHTML = `
                <div class="testimonial-content">
                    <i class="fas fa-quote-left"></i>
                    <p>"${testimonial.quote}"</p>
                    <div class="testimonial-author">
                        <h4>${testimonial.author}</h4>
                    </div>
                </div>
            `;
        }
        
        // Update active dot
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }

    // Courses Data
    const courses = [
        {
            title: "JEE Advanced",
            category: "Engineering",
            duration: "12 Months",
            students: "150+",
            image: "assets/JA.jpg",
            description: "Master Chemistry for JEE Advanced with expert teaching, comprehensive theory, and personalized attention to excel in the toughest engineering entrance exam."
        },
        {
            title: "JEE Main",
            category: "Engineering",
            duration: "12 Months",
            students: "180+",
            image: "assets/JM.jpg",
            description: "Excel in Chemistry for JEE Main with in-depth concepts, practice tests, and doubt-solving sessions designed to boost your chemistry scores."
        },
        {
            title: "NEET",
            category: "Medical",
            duration: "12 Months",
            students: "120+",
            image: "assets/neet.jpg",
            description: "Ace Chemistry for NEET with comprehensive study material, test series, and expert guidance to secure top ranks in medical entrance exams."
        },
        {
            title: "12th Boards",
            category: "School",
            duration: "10 Months",
            students: "200+",
            image: "assets/12th.jpg",
            description: "Score high in 12th Board Chemistry (CBSE/State Board) with chapter-wise tests, revisions, and expert teaching for excellent results."
        }
    ];

    // Populate courses
    const coursesGrid = document.querySelector('.courses-grid');
    if (coursesGrid) {
        coursesGrid.innerHTML = courses.map(course => `
            <div class="course-card">
                <div class="course-img">
                    <div class="course-category">${course.category}</div>
                    <img src="${course.image}" alt="${course.title}">
                </div>
                <div class="course-content">
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '#!') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // Calculate position accounting for navbar height
                const navbarHeight = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Explicit handler for Explore Courses button
    const exploreCoursesBtn = document.querySelector('a[href="#courses"]');
    if (exploreCoursesBtn) {
        exploreCoursesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const coursesSection = document.getElementById('courses');
            if (coursesSection) {
                // Calculate position accounting for navbar height
                const navbarHeight = 80;
                const elementPosition = coursesSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'var(--white)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Animation on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate-fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simple validation
            if (!formValues.name || !formValues.email || !formValues.message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formValues);
            
            // Show success message
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            
            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 3000);
            }, 1500);
        });
    }

    // Enroll Modal Functionality
    const enrollModal = document.getElementById('enrollModal');
    const enrollNowButtons = document.querySelectorAll('.enroll-now-btn');
    const enrollModalClose = document.querySelector('.enroll-modal-close');

    // Open modal when Enroll Now is clicked
    enrollNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (enrollModal) {
                enrollModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when X is clicked
    if (enrollModalClose) {
        enrollModalClose.addEventListener('click', function() {
            if (enrollModal) {
                enrollModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }

    // Close modal when clicking outside
    if (enrollModal) {
        enrollModal.addEventListener('click', function(e) {
            if (e.target === enrollModal) {
                enrollModal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && enrollModal && enrollModal.classList.contains('active')) {
            enrollModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});
