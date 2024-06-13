function l(){
    var s=sessionStorage.getItem("Proj");
    const head=document.querySelector(".heading");
    switch (s){
        case "ASD":
            head.innerHTML="Early Stage Detection of <span>Autism</span>";
            break;
        case "ADV":
            head.innerHTML="Adventure Rides <span>Website</span>";
            break;
        case "MOV":
            head.innerHTML="Movie Database <span>Website</span>";
            break;
        case "SAC":
            head.innerHTML="Sachin Tendulkar <span>Website</span>";
            break;
    }
    const img1=document.querySelector(".img1");
    img1.src="images/"+s+"1.jpg";
    const img2=document.querySelector(".img2");
    img2.src="images/"+s+"2.jpg";
    const img3=document.querySelector(".img3");
    img3.src="images/"+s+"3.jpg";
    const img4=document.querySelector(".img4");
    img4.src="images/"+s+"4.jpg";
    const img5=document.querySelector(".img5");
    img5.src="images/"+s+"5.jpg";
}

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1800,
    delay:200 
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

ScrollReveal().reveal('.pro', { origin: 'bottom' });
ScrollReveal().reveal('.heading', { origin: 'top' });
