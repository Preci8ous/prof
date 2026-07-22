let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if(menu){
    menu.onclick = () =>{
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const typed = new Typed('.multiple-text', {
    strings: [
        'Business Analyst',
        'Business Process Analyst',
        'Systems Analyst'
    ],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

// Initialize EmailJS

emailjs.init({
    publicKey: "EL5-3zOOUs6Ksdd-z",
});


// Contact form submission

document.getElementById("contact-form")
.addEventListener("submit", function(event){

    event.preventDefault();


    emailjs.sendForm(
        "service_zhjxbxr",
        "template_08vwl0j",
        this
    )
    .then(() => {

        alert("Message sent successfully!");

        this.reset();

    }, 
    (error) => {

        alert("Failed to send message!");

        console.log(error);

    });

});