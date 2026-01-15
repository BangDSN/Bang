function showPage(pageName) {
    // Skjul alle sider
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    // Fjern aktiv styling fra menuen
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));

    // Vis den valgte side
    if (pageName === 'home') {
        document.getElementById('home-page').classList.add('active');
        document.getElementById('nav-home').classList.add('active');
    } else if (pageName === 'work') {
        document.getElementById('work-page').classList.add('active');
        document.getElementById('nav-work').classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}