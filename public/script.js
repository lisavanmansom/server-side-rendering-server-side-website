let hamburger = document.querySelector('.hamburger')
let navMenu = document.querySelector('.navigatie')

hamburger.addEventListener("click", () => { 
 navMenu.classList.toggle('nav-active');
 navMenu.classList.toggle('navigatie');
 hamburger.classList.toggle('active-bar');


});

console.log("test")

