/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// scroll spy
const makeActive = (link) => {
    sections[link].classList.add("your-active-class")
    menu_links[link].classList.add("your-active-class");
}
const removeActive = (link) => {
    sections[link].classList.remove("your-active-class")
    menu_links[link].classList.remove("your-active-class");
}
const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(section => {
    const navItem = `<li class="menu__link ${section.className}" data-link="${section.id}">${section.dataset.nav}</li>`
    navList.insertAdjacentHTML('beforeend', navItem);
})
const menu_links = document.querySelectorAll("#navbar__list li");

// Add class 'active' to section when near top of viewport
const sectionMargin = 300;
let currentActive = 0;

// listen for scroll events
window.addEventListener("scroll", () => {

    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1


    if (current !== sections.length) { // determine if current position is not in sections
        if (current !== currentActive) { // in sections
            removeAllActive();
            currentActive = current;
            makeActive(current);
        }
    }
});

// Scroll to anchor ID using scrollTO event
navList.addEventListener("click", e =>{
    e.preventDefault();
    const sectionToScrollInto = document.getElementById(e.target.dataset.link);
    sectionToScrollInto.scrollIntoView({block: 'end', behavior: 'smooth'})

})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

