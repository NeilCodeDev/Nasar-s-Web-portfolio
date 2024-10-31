const burgerBtn = document.querySelector(".side-menuBtn")
const burgerMenu = document.querySelector('.burgerMenu')
const nav3El = document.querySelector(".nav3El")
const iconsContainer = document.querySelector(".iconsContainer")
const navbar = document.querySelector(".navbar")

const liProjekte = document.querySelector(".liProjekte")
const liStartseite = document.querySelector(".liStartseite")

const fullContainer = document.querySelector(".nav3El-Icons")

const Nicon = document.querySelector(".Nicon")
const Name = document.querySelector(".Name")



const liEl = document.querySelector(".liEl")




const whatsApp = document.querySelector(".whatsApp")
const instagram = document.querySelector(".instagram")
const telegram = document.querySelector(".telegram")

const html = document.documentElement;

burgerBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    burgerMenu.classList.toggle("burgerMenuActive")
    burgerBtn.classList.toggle("burgerBtn-Active")
    html.classList.toggle("no-scroll")



    nav3El.classList.toggle("alt-hover")
    /*---making navbar elements appear in burgerMenu---*/

    whatsApp.classList.toggle("whatsApp-hamburger")
    instagram.classList.toggle("instagram-hamburger")
    telegram.classList.toggle("telegram-hamburger")

    burgerMenu.appendChild(nav3El)
    burgerMenu.appendChild(iconsContainer)

    nav3El.classList.toggle("nav3El-Burger")
    nav3El.classList.toggle("nav3El")

    iconsContainer.classList.toggle("iconsContainer-Burger")
    iconsContainer.classList.toggle("iconsContainer")

    liStartseite.classList.toggle("liStartseite-Burger")
    liProjekte.classList.toggle("liProjekte-Burger")


    Nicon.classList.toggle("Nicon-Burger")
    Name.classList.toggle("Name-Burger")

})

function burgerMenuBack(){
    nav3El.classList.remove("alt-hover")
    
    burgerMenu.classList.remove("burgerMenuActive")
    burgerBtn.classList.remove("burgerBtn-Active")
    html.classList.remove("no-scroll")

    nav3El.classList.add("nav3El")
    iconsContainer.classList.add("iconsContainer")

    nav3El.classList.remove("nav3El-Burger")
    iconsContainer.classList.remove("iconsContainer-Burger")

    whatsApp.classList.remove("whatsApp-hamburger")
    instagram.classList.remove("instagram-hamburger")
    telegram.classList.remove("telegram-hamburger")


    liStartseite.classList.remove("liStartseite-Burger")
    liProjekte.classList.remove("liProjekte-Burger")

    Nicon.classList.remove("Nicon-Burger")
    Name.classList.remove("Name-Burger")
}

const myQueryMin = window.matchMedia("(min-width: 961px)")

function changeWidthMin() {
    if (myQueryMin.matches) {

        burgerMenuBack()

        navbar.appendChild(nav3El)
        navbar.appendChild(iconsContainer)
    }
}

/*-------scrolling down buttons--------*/

const uberSeite = document.querySelector(".uberSeite")
const startSeiteBtn = document.querySelector(".startSeite")
const projekteBtnBig = document.querySelector(".projekteBtn")
const startSeite = document.querySelector(".startSeite")

const uberBtn = document.querySelector(".liUber")



const uberBtnBig = document.querySelector(".uberBtn")

const projektSeite = document.querySelector(".projektenSeite")
const projektBtn = document.querySelector(".liProjekte")



uberBtnBig.addEventListener("click", scrollToUberSeite)
uberBtn.addEventListener("click", scrollToUberSeite)
liStartseite.addEventListener("click", scrollToStartSeite)
projekteBtnBig.addEventListener("click", scrollToProjekteSeite)
projektBtn.addEventListener("click", scrollToProjekteSeite)


function scrollToProjekteSeite() {
    projektSeite.scrollIntoView({ behavior:"smooth"})
    burgerMenuBack()
}

function scrollToUberSeite() {
    uberSeite.scrollIntoView({ behavior:"smooth"})
    burgerMenuBack()
}

function scrollToStartSeite() {
    startSeite.scrollIntoView({ behavior:"smooth"})
    burgerMenuBack()
}


changeWidthMin()

myQueryMin.addEventListener("change", function() {
    changeWidthMin()
})