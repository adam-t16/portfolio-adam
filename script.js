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
    },
    {
        title: "خُطوة نحو الطريق المستقيم",
        description: "Educational and spiritual website guiding towards the right path",
        image: "https://images.unsplash.com/photo-1516534775068-bb57100d4f10?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/pasversdieu/",
        github: "https://github.com/adam-t16/pasversdieu"
    },
    {
        title: "Card Matching Game",
        description: "Interactive memory game with matching cards",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/CARD_MATCHING/",
        github: "https://github.com/adam-t16/CARD_MATCHING"
    },
    {
        title: "Labyrinthe des Idées",
        description: "Interactive maze game with problem-solving elements",
        image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/Labyrinthe-des-Idees/",
        github: "https://github.com/adam-t16/Labyrinthe-des-Idees"
    },
    {
        title: "Les Recettes de Maman",
        description: "Collection of traditional family recipes",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/LESRECETTES-DE-MAMAN/",
        github: "https://github.com/adam-t16/LESRECETTES-DE-MAMAN"
    },
    {
        title: "متتبع القرآن",
        description: "Platform for tracking Quran memorization and revision",
        image: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/-/#home",
        github: "https://github.com/adam-t16/-"
    },
    {
        title: "Calculateur d'Épargne",
        description: "Savings calculator and financial planning tool",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/epargne2/",
        github: "https://github.com/adam-t16/epargne2"
    },
    {
        title: "Easy Visa",
        description: "Guide and assistance for visa procedures",
        image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/easy-visa/",
        github: "https://github.com/adam-t16/easy-visa"
    },
    {
        title: "Journal de Recettes",
        description: "Application for tracking culinary recipes",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/journal-reccette/",
        github: "https://github.com/adam-t16/journal-reccette"
    },
    {
        title: "Todo App",
        description: "Simple and effective task management application",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/todo/",
        github: "https://github.com/adam-t16/todo"
    }
];

// Populate Projects
function populateProjects() {
    const featuredProjectsGrid = document.querySelector('#featured-projects');
    const allProjectsGrid = document.querySelector('#all-projects');
    
    // Show first 6 as featured
    const featuredProjects = projects.slice(0, 6);
    const otherProjects = projects.slice(6);
    
    featuredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        featuredProjectsGrid.appendChild(projectCard);
    });
    
    // Show remaining as "All Projects"
    otherProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        allProjectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
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
    
    return projectCard;
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
