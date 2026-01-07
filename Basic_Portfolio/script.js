document.addEventListener('DOMContentLoaded', function() {
    const texts = ['Web Developer.', 'Designer.', 'Creator.', 'Problem Solver.'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typed').textContent = letter;
        if (letter.length === currentText.length) {
            setTimeout(() => {
                erase();
            }, 1000);
        } else {
            setTimeout(type, 100);
        }
    }

    function erase() {
        letter = currentText.slice(0, --index);
        document.getElementById('typed').textContent = letter;
        if (letter.length === 0) {
            count++;
            index = 0;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 50);
        }
    }

    type();

    // --- Smooth Scrolling for Navbar Links & Mobile Toggle ---
    const navLinks = document.querySelectorAll('.navbar-links .nav-link');
    const navToggle = document.getElementById('nav-toggle');
    const navbarLinksContainer = document.querySelector('.navbar-links');

    // Mobile menu toggle
    if (navToggle && navbarLinksContainer) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
            navToggle.setAttribute('aria-expanded', expanded);
            navbarLinksContainer.classList.toggle('open');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navbarLinksContainer.classList.contains('open')) {
                if (!navbarLinksContainer.contains(e.target) && !navToggle.contains(e.target)) {
                    navbarLinksContainer.classList.remove('open');
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navbarLinksContainer.classList.contains('open')) {
                navbarLinksContainer.classList.remove('open');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            // Close mobile menu after clicking
            if (navbarLinksContainer && navbarLinksContainer.classList.contains('open')) {
                navbarLinksContainer.classList.remove('open');
                if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
            }

            if (targetElement) {
                const navHeight = document.getElementById('navbar').offsetHeight || 70;
                window.scrollTo({
                    top: targetElement.offsetTop - (navHeight + 10),
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    const navbarLinks = document.querySelectorAll('#navbar .nav-link');

    window.onscroll = () => {
        const navHeight = document.getElementById('navbar').offsetHeight || 70;
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - (navHeight + 10);
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navbarLinks.forEach(links => {
                    links.classList.remove('active');
                    links.removeAttribute('aria-current');
                });
                const activeLink = document.querySelector('#navbar .nav-link[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                    activeLink.setAttribute('aria-current', 'page');
                }
            };
        });
    };
});