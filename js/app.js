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
//stores list of sections on webpage
const sectionsList = document.querySelectorAll('section');
//stores the navbar
const narbarList = document.getElementById('navbar__list');
/**
 * End Global Variables

 * Begin Main Functions
 * 
*/
//building a document fragment and adding the navbar list items to it
const fragmentNav = document.createDocumentFragment();

/*apply for each on all sections list and create a link then add it to the fragment list
and add an event listener to the link on click to scroll to clicked section*/
sectionsList.forEach((sec) => {

 	let linkText = sec.getAttribute("data-nav");
 	let secId = sec.getAttribute("id");
 	let listItem = document.createElement("LI");

 	let secLink = document.createElement("a");
 	let link = document.createTextNode(linkText);
    // Scroll to section on link click
    secLink.addEventListener('click', function () {
    sec.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	});

    secLink.appendChild(link);
    listItem.appendChild(secLink);
    fragmentNav.appendChild(listItem);
});
// build the nav by adding all sections anchors added to the document fragement to the navbar
narbarList.appendChild(fragmentNav);

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function(){
	sectionsList.forEach((sec) => {
	let rect = sec.getBoundingClientRect();
	if (rect.top >= 0 && rect.top <= 150){
		sectionsList.forEach((secprev) => {secprev.classList.remove("your-active-class");});
		// Set section as active
		sec.classList.add("your-active-class");

		const linksListItems = document.querySelectorAll('a');
		//search for link with data nav equals the section
		linksListItems.forEach((linkItem) => {

			let linkText = linkItem.innerHTML;
			if(linkText == sec.getAttribute("data-nav")){
				linksListItems.forEach((linkprev) => {linkprev.classList.remove("your-active-link");});
				linkItem.classList.add("your-active-link");
			}
		});

	}
	});
});

