const mobile_nav = document.querySelector(".mobile_navbar_btn");
const nav_header = document.querySelector(".header")

const toggleNavbar = () =>{
    // alert("Hello World")
    nav_header.classList.toggle("mobile_menu_active");
};

mobile_nav .addEventListener('click', () => toggleNavbar());