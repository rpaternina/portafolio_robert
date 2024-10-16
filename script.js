document.querySelector('.cta').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.opacity = '0.8';
    } else {
        header.style.opacity = '1';
    }
});
