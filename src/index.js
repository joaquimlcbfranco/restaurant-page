import "./styles.css";
import { homepageLoad } from "./home.js";
import { menuLoad } from "./menu.js";
import { aboutLoad } from "./about.js";

(function displayController() {
    const contentDiv = document.querySelector('#content');
    const navLinks = document.querySelectorAll('nav > button');
    navLinks.forEach((button) => {
        button.addEventListener('click', () => {
            contentDiv.style.opacity = "0"; 

            setTimeout(() => {
                while (contentDiv.firstChild) {
                    contentDiv.removeChild(contentDiv.firstChild);
                }

                if (button.id === 'home') homepageLoad();
                if (button.id === 'menu') menuLoad();
                if (button.id === 'about') aboutLoad();

                contentDiv.style.opacity = '1';

            }, 200);


        })
    })
})();

homepageLoad();

