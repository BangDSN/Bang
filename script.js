function showPage(pageName) {
    // Skjul alle sider og fjern aktiv styling fra links
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));

    // Vis den valgte side og aktiver linket
    if (pageName === 'home') {
        document.getElementById('home-page').classList.add('active');
        document.getElementById('nav-home').classList.add('active');
    } else if (pageName === 'work') {
        document.getElementById('work-page').classList.add('active');
        document.getElementById('nav-work').classList.add('active');
    }

    // Scroll altid til toppen ved skift
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Enkel reveal-animation ved scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));