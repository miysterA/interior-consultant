// Menu Ham-burger displaying
const hamBurger = document.querySelector(".ham-burger");
const material = document.querySelector(".material-icons");

hamBurger.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");
    document.querySelector(".logo").classList.toggle("remove");
    document.querySelector(".brand-logo").classList.toggle("no-border");
    if(material.textContent == "menu"){
        material.textContent = "close";
    }else{
        material.textContent = "menu";
    }
})

//Navbar links
const navBar = document.querySelector(".navbar");
      links = navBar.querySelectorAll(".menu__link");


links.forEach(function(element) {
    element.addEventListener("click", function() {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("menu__link-active");
        }
        this.classList.add("menu__link-active");
        document.querySelector(".navbar").classList.toggle("show");
    })
})