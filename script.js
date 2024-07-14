document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.control.prev');
    const nextButton = document.querySelector('.control.next');
    let currentIndex = 0;

    function showTestimonial(index) {
        const height = testimonials[0].clientHeight;
        const offset = -index * height;
        carouselInner.style.transform = `translateY(${offset}px)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    });

    // Initial display
    showTestimonial(currentIndex);
});

