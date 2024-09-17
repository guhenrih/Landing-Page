// Função para o Menu Toggle (Mobile)
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Função de Animação nas Barras de Habilidade
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#habilidades');
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsTop < windowHeight) {
        const skillBars = document.querySelectorAll('.bar .percentage');
        skillBars.forEach(bar => {
            bar.style.animation = 'fillBar 2s forwards';
        });
    }
});

// Função para Scroll Suave
const smoothScroll = (target, duration) => {
    const targetSection = document.querySelector(target);
    const targetPosition = targetSection.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, 1000);
    });
});


