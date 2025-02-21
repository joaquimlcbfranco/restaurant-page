function aboutLoad() {
    const background = document.querySelector('.background');
    background.classList.add('blur');

    const contentDiv = document.querySelector('#content');

    const about = document.createElement('div');
    about.classList.add('about');
    contentDiv.appendChild(about);

    const leftSection = document.createElement('div');
    leftSection.classList.add('left-section');
    about.appendChild(leftSection);

    const story = document.createElement('div');
    story.classList.add('story');
    leftSection.appendChild(story);

    const topHeader = document.createElement('h1');
    const topSpan = document.createElement('span');
    const topDescription = document.createElement('p');
    topHeader.textContent = 'A Brief Story';
    topDescription.textContent = 'Born from a love of authentic Japanese flavors, our ramen shop brings the warmth of a traditional noodle house with a modern twist. Every bowl tells a story of craftsmanship and passion.'
    story.appendChild(topHeader);
    story.appendChild(topSpan);
    story.appendChild(topDescription);

    const secret = document.createElement('div');
    secret.classList.add('secret');
    leftSection.appendChild(secret);

    const bottomHeader = document.createElement('h1');
    const bottomSpan = document.createElement('span');
    const bottomDescription = document.createElement('p');
    bottomHeader.textContent = 'What\'s Our Secret?'
    bottomDescription.textContent = 'We simmer our tonkotsu broth for 18 hours, handcraft our noodles daily, and use only the freshest ingredients for an unforgettable umami experience.'
    story.appendChild(bottomHeader);
    story.appendChild(bottomSpan);
    story.appendChild(bottomDescription);

    const rightSection = document.createElement('div');
    rightSection.classList.add('right-section');
    about.appendChild(rightSection);

}

export { aboutLoad }