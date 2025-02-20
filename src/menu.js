function menuLoad() {
    

    const buttons = document.querySelectorAll('[data-carousel-button]');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.dataset.carouselButton === 'next' ? 1 : -1;
            const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

            const activeSlide = slides.querySelector('[data-active]');
            let newIndex = [...slides.children].indexOf(activeSlide) + value;
            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex > slides.children.length - 1) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        });
    });
}

export { menuLoad }