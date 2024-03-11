let hamburger = document.querySelector('.hamburger')
let navMenu = document.querySelector('.nav-menu')

hamburger.addEventlistener("click", hamburgertoggle)

function hamburgertoggle () {
    hamburger.classList.add('hamburger-button')
}

