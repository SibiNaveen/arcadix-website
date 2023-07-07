const mobile_nav = document.querySelector(".mobile_navbar_btn");
const nav_header = document.querySelector(".header")

const toggleNavbar = () =>{
    // alert("Hello World")
    nav_header.classList.toggle("mobile_menu_active");
};

mobile_nav .addEventListener('click', () => toggleNavbar());


// Tab
// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
  
// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


// Accordion Tab
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Mail

// function sendEmail(){
//   Email.send({
//       SecureToken : "2cfd6945-9fa5-4e61-a85a-5ffd32355c4a",

//       To : 'unsibin@gmail.com',
//       From : document.getElementById("email").value,
//       Subject : "Contact Page Form",
//       Body : "And this is the body"
//   }).then(
//   message => alert(message)
//   );
// }

// popup

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}