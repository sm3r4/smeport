window.addEventListener("load",() => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.classList.add("loader-hidden");

        loader.addEventListener("transitionend",() => {
            document.body.removeChild("loader");
        })
    },1000);
})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1800,
    delay:200 
});

ScrollReveal().reveal('.home-content h1,.home-content .text-animate, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-sci, .btn, .skills-column, .project-box, .input-box, .textarea-field ', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-img, .education-column1', { origin: 'left' });
ScrollReveal().reveal('.about .about-content h3,.about .about-content p, .education-column2', { origin: 'right' });

function ASD()
{
    sessionStorage.clear();
    sessionStorage.setItem("Proj","ASD");
}
function ADV()
{
    sessionStorage.clear();
    sessionStorage.setItem("Proj","ADV");
}
function MOV()
{
    sessionStorage.clear();
    sessionStorage.setItem("Proj","MOV");
}
function SAC()
{
    sessionStorage.clear();
    sessionStorage.setItem("Proj","SAC");
}