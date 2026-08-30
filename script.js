// Projects Data
const projects = [
    {
        title: "EchoWall / SilentGuard",
        description: "Système de surveillance intelligent sans caméra utilisant des capteurs multiples pour détecter les chutes, mouvements et événements inhabituels",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "Système de Gestion Mini-marché",
        description: "Plateforme web de gestion conçue autour d'un vrai mini-marché avec gestion de stock, produits et calcul de profit",
        image: "https://images.unsplash.com/photo-1460925895917-adf4e9a9bb5f?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "FIZYX — E-commerce Streetwear",
        description: "Projet e-commerce front-end avec panier, interactions utilisateur et design responsive",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "Barrière Automatique — Arduino",
        description: "Projet d'automatisation Arduino utilisant capteurs et moteur pour contrôle de barrière",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "Portail Automatisé — Arduino",
        description: "Système de portail automatisé en C++ avec capteurs et moteur pour contrôle d'accès",
        image: "https://images.unsplash.com/photo-1518611505868-48510c8dfa93?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    },
    {
        title: "Site Garage",
        description: "Site web responsive pour garage automobile avec présentation des services et interface mobile-friendly",
        image: "https://images.unsplash.com/photo-1487933480173-6d82b60b8d4e?w=800&auto=format&fit=crop&q=60",
        live: "#",
        github: "https://github.com/adam-t16"
    }
];

// Populate Projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate-fade-in';
        
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
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('lucide-moon');
        themeIcon.classList.add('lucide-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
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
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Message envoyé avec succès!');
        form.reset();
    });
}

// Intersection Observer for animations
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.project-card, section h2, .about-content, .contact-content')
        .forEach(el => observer.observe(el));
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    initThemeToggle();
    initContactForm();
    initAnimations();
});