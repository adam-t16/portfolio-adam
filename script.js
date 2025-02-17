// Projects Data
const projects = [
    {
        title: "خُطوة نحو الطريق المستقيم",
        description: "Site web éducatif et spirituel pour guider vers le droit chemin",
        image: "خُطوة نحو الطريق المستقيم.jpg",
        live: "https://adam-t16.github.io/pasversdieu/",
        github: "https://github.com/adam-t16/pasversdieu"
    },
    /*
{
    title: "خُطوة نحو التوبة",
    description: "Site web spirituel pour l'accompagnement vers la repentance",
    image: "التوبة.jpg",
    github: "https://github.com/adam-t16/pasversdieu"
},
*/

    {
        title: "Card Matching Game",
        description: "Jeu de mémoire interactif avec des cartes à associer",
        image: "Card Matching Game.jpg",
        live: "https://adam-t16.github.io/CARD_MATCHING/",
        github: "https://github.com/adam-t16/CARD_MATCHING"
    },
    {
        title: "Labyrinthe des Idées",
        description: "Jeu de labyrinthe interactif avec des éléments de résolution de problèmes",
        image: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/Labyrinthe-des-Idees/",
        github: "https://github.com/adam-t16/Labyrinthe-des-Idees"
    },
    {
        title: "Les Recettes de Maman",
        description: "Collection de recettes familiales traditionnelles",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/LESRECETTES-DE-MAMAN/",
        github: "https://github.com/adam-t16/LESRECETTES-DE-MAMAN"
    },
    {
        "title": "متتبع القرآن",
        "description": "Une plateforme pour suivre la mémorisation et la révision du Coran",
        "image": "متتبع القرآن.jpg",
        "live": "https://adam-t16.github.io/-/#home",
        "github": "https://github.com/adam-t16/-"
    },
    
    {
        title: "Calculateur d'Épargne",
        description: "Outil de calcul d'épargne et de planification financière",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/epargne2/",
        github: "https://github.com/adam-t16/epargne2"
    },
    {
        title: "Easy Visa",
        description: "Guide et assistance pour les procédures de visa",
        image: "https://images.unsplash.com/photo-1540126034813-121bf29033d2?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/easy-visa/",
        github: "https://github.com/adam-t16/easy-visa"
    },
    {
        title: "Journal de Recettes",
        description: "Application de suivi des recettes culinaires",
        image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/journal-reccette/",
        github: "https://github.com/adam-t16/journal-reccette"
    },
    {
        title: "Todo App",
        description: "Application de gestion de tâches simple et efficace",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop&q=60",
        live: "https://adam-t16.github.io/todo/",
        github: "https://github.com/adam-t16/todo"
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