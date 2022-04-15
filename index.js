// console.log(navLinks.style);
// console.log("1534")
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    if(navLinks.style.display === "none"){
        navLinks.style.display = "block";
    }
    else{
        navLinks.style.display = "none";
    }
}