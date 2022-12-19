const hamberger = document.querySelector("#hamburger-icon");
const hamburgerClose = document.querySelector("#hamburger-close-icon");
const navLinks = document.querySelector("#nav-links");
 
hamberger.addEventListener("click", () =>{

        navLinks.style = "right: 0";
        navLinks.classList.remove("animate-nav-links-out");
        navLinks.classList.add("animate-nav-links-in");
        hamberger.style = "display: none";
        hamburgerClose.style = "display: block";
        hamburgerClose.classList.add("hamburger-close-icon-in");
    }
);

hamburgerClose.addEventListener("click", ()=>{
        navLinks.style = "right: -62.5rem";
        navLinks.classList.toggle("animate-nav-links-out");
        navLinks.classList.remove("animate-nav-links-in");
        hamberger.style = "display: block";
        hamburgerClose.style = "display: none"

    }
)