var logoSection = document.querySelector(".logo-section")
var login = document.querySelector(".login")
var menuItems = document.querySelector(".menu-items")
var searchBox = document.querySelector(".search")
function toggle(){ 
    logoSection.classList.toggle("hide")
    login.classList.toggle("hide")
    menuItems.classList.toggle("hide")
    searchBox.classList.toggle("hide") 
}
// $('.navbar-collapse a').click(function(){
//     $(".navbar-collapse").collapse('hide');
// });