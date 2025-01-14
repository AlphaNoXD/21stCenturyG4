document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelector('header nav a[href="#tech"]').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Click on Profiles to view Individual Activities!');
});