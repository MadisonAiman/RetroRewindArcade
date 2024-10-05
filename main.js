document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior

        const targetId = this.getAttribute('href').substring(1); // Remove the # from href
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            block: 'start' // Align with the top of the viewport
        });
    });
});

const contactButton = document.querySelector('footer button');

contactButton.addEventListener('mouseover', function () {
    contactButton.classList.add('pulse');
});

contactButton.addEventListener('mouseout', function () {
    contactButton.classList.remove('pulse');
});
