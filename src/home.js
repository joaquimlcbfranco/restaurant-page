function homepageLoad() {
    const contentDiv = document.querySelector('#content');
    console.log(contentDiv);

    const titleDiv = document.createElement('div');
    const leftTitle = document.createElement('h1');
    const rightTitle = document.createElement('h1');
    const description = document.createElement('p');

    titleDiv.classList.add('content-title');
    leftTitle.classList.add('left-title');
    rightTitle.classList.add('right-title');
    description.classList.add('content-description');

    leftTitle.textContent = "LOREM";
    rightTitle.textContent = "RAMEN";
    description.textContent = "Savor the rich flavors of authentic ramen, crafted with passion and the finest ingredients. From bold broths to perfectly cooked noodles, every bowl is a taste of Japan. Order now or visit us to experience ramen at its best!";

    contentDiv.appendChild(titleDiv);
    titleDiv.appendChild(leftTitle);
    titleDiv.appendChild(rightTitle);
    contentDiv.appendChild(description);
}

export { homepageLoad }