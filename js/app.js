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
var sectionsList = document.querySelectorAll('section');
//stores the navbar
var narbarList = document.getElementById('navbar__list');
/**
 * End Global Variables

 * Begin Main Functions
 * 
*/
//building a document fragment and adding the navbar list items to it
var fragmentNav = document.createDocumentFragment();

sectionsList.forEach((sec) => {

 	var linkText = sec.getAttribute("data-nav");
 	var secId = sec.getAttribute("id");
 	var listItem = document.createElement("LI");

 	var secLink = document.createElement("a");
 	var link = document.createTextNode(linkText);
    // Scroll to section on link click
    secLink.addEventListener('click', function () {
    // Scroll to anchor ID using scrollTO event
    sec.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	});

    // Append the text node to anchor element. 
    secLink.appendChild(link);
    // Append anchor element to list Item
    listItem.appendChild(secLink);
    // Append the list Item to the document fragment
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
	var rect = sec.getBoundingClientRect();
	if (rect.top >= 0 && rect.top <= 150){
		sectionsList.forEach((secprev) => {secprev.classList.remove("your-active-class");});
		// Set section as active
		sec.classList.add("your-active-class");

		var linksListItems = document.querySelectorAll('a');
		//search for link with data nav equals the section
		linksListItems.forEach((linkItem) => {

			var linkText = linkItem.innerHTML;
			if(linkText == sec.getAttribute("data-nav")){
				linksListItems.forEach((linkprev) => {linkprev.classList.remove("your-active-link");});
				// set the link as active
				linkItem.classList.add("your-active-link");
			}
		});

	}
	});
});

