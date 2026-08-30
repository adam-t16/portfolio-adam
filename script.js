// Projects Data
const projects = [
    {
        title: "EchoWall / SilentGuard",
        description: "Smart monitoring system without cameras using multiple sensors to detect movement, falls and unusual events",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "Mini-market Management System",
        description: "Web-based management system designed around a real mini-market with stock, product and profit tracking",
        image: "https://images.unsplash.com/photo-1460925895917-adf4e9a9bb5f?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "FIZYX — E-commerce Streetwear",
        description: "Front-end e-commerce project with shopping cart, user interactions and responsive design",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "Automatic Barrier — Arduino",
        description: "Automation project using Arduino with C++ for barrier control using sensors and motors",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "Automatic Gate — Arduino",
        description: "Automated gate system in C++ with sensor detection and motor control for access management",
        image: "https://images.unsplash.com/photo-1518611505868-48510c8dfa93?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "Garage Website",
        description: "Responsive website for automotive garage with service presentation and mobile-friendly interface",
        image: "https://images.unsplash.com/photo-1487933480173-6d82b60b8d4e?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    }
];

// Populate Projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.live}" target="_blank" rel="noopener noreferrer">
                        <i class="lucide-external-link"></i> Demo
                    </a>
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                        <i class="lucide-github"></i> Code
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        themeIcon.classList.remove('lucide-moon');
        themeIcon.classList.add('lucide-sun');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        themeIcon.classList.add('lucide-moon');
        themeIcon.classList.remove('lucide-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('lucide-moon');
            themeIcon.classList.add('lucide-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('lucide-sun');
            themeIcon.classList.add('lucide-moon');
        }
    });
}

// Form Handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Log submission
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Message sent successfully! I will get back to you soon.');
            form.reset();
        });
    }
}

// Smooth scroll for navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    initThemeToggle();
    initContactForm();
    initNavigation();
});
