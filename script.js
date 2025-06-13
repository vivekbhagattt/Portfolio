document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('mouseenter', () => {
            sidebar.classList.add('open');
        });

        sidebar.addEventListener('mouseleave', () => {
            sidebar.classList.remove('open');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is an anchor link
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                // Close the sidebar after clicking a link
                if (sidebar.classList.contains('open')) {
                    sidebar.classList.remove('open');
                }
            }
        });
    });

    // Fade-in animation for hero text
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.opacity = 0;
        heroText.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            heroText.style.opacity = 1;
        }, 500);
    }
});