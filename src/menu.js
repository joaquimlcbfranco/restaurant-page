import sushi from "./menu-sushi.png";
import dumplings from "./menu-dumplings.png";
import miso from "./miso-ramen.png";
import tokotsu from "./tokotsu-ramen.png";
import tantanman from "./tantanman-ramen.png"

function menuLoad() {
    const background = document.querySelector('.background');
    background.classList.add('blur');

    const contentDiv = document.querySelector('#content');

    const carouselDiv = document.createElement('div');
    carouselDiv.classList.add('carousel');
    carouselDiv.setAttribute('data-carousel', '');
    contentDiv.appendChild(carouselDiv);

    const buttonPrev = document.createElement('button');
    buttonPrev.classList.add('carousel-button', 'prev');
    buttonPrev.innerHTML = '&#x27A4';
    buttonPrev.dataset.carouselButton = 'prev';
    carouselDiv.appendChild(buttonPrev);

    const buttonNext = document.createElement('button');
    buttonNext.classList.add('carousel-button', 'next');
    buttonNext.innerHTML = '&#10148';
    buttonNext.dataset.carouselButton = 'next';
    carouselDiv.appendChild(buttonNext);

    const list = document.createElement('ul');
    list.setAttribute('data-slides', '');
    for (let i = 0; i < 5; i++) {
        const item = document.createElement('li');
        item.classList.add('slide');
        list.appendChild(item);

        const image = document.createElement('img');
        item.appendChild(image);

        const firstSpan = document.createElement('span');
        item.appendChild(firstSpan);

        const header = document.createElement('h1');
        firstSpan.appendChild(header);

        const secondSpan = document.createElement('span');
        header.appendChild(secondSpan);

        const description = document.createElement('p');
        firstSpan.appendChild(description);
    }
    carouselDiv.appendChild(list);

    const items = [...list.children];
    items[0].setAttribute('data-active', '');
    items[0].querySelector('img').src = sushi;
    items[0].querySelector('img').alt = 'Menu photo of sushi';
    items[0].querySelector('span > h1').innerHTML = 'Sushi <span>Platter</span>';
    items[0].querySelector('span > p').textContent = "A beautifully arranged assortment of fresh sushi, including a mix of nigiri, sashimi, and specialty rolls.Made with premium seafood, perfectly seasoned rice, and delicate garnishes, this platter is perfect for sharing or indulging on your own.A true sushi lover's delight!";

    items[1].querySelector('img').src = dumplings;
    items[1].querySelector('img').alt = 'Menu photo of dumplings';
    items[1].querySelector('span > h1').innerHTML = 'Dumpling <span>Combo</span>';
    items[1].querySelector('span > p').textContent = "A delicious assortment of five handcrafted dumplings, each with a unique filling and flavor. Perfectly steamed or pan-fried to golden perfection. A must-try for dumpling lovers!";

    items[2].querySelector('img').src = miso;
    items[2].querySelector('img').alt = 'Menu photo of Miso ramen';
    items[2].querySelector('span > h1').innerHTML = 'Miso <span>Ramen</span>';
    items[2].querySelector('span > p').textContent = "A hearty and soul-warming ramen featuring a miso-based broth that’s both savory and slightly sweet. Paired with chewy wavy noodles, corn, butter, and tender slices of pork, this dish is packed with depth and flavor, perfect for warming up on a cold day.";

    items[3].querySelector('img').src = tokotsu;
    items[3].querySelector('img').alt = 'Menu photo of Tokotsu ramen';
    items[3].querySelector('span > h1').innerHTML = 'Tokotsu <span>Ramen</span>';
    items[3].querySelector('span > p').textContent = "A rich and silky pork bone broth, slow-simmered for hours to achieve a deep, creamy texture. Served with thin, straight noodles, melt-in-your-mouth chashu pork, green onions, and a soft-boiled egg, this classic bowl is pure comfort in every bite.";

    items[4].querySelector('img').src = tantanman;    
    items[4].querySelector('img').alt = 'Menu photo of Tantanman ramen';
    items[4].querySelector('span > h1').innerHTML = 'Tantanman <span>Ramen</span>';
    items[4].querySelector('span > p').textContent = "A hearty and soul-warming ramen featuring a miso-based broth that’s both savory and slightly sweet. Paired with chewy wavy noodles, corn, butter, and tender slices of pork, this dish is packed with depth and flavor, perfect for warming up on a cold day.";

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