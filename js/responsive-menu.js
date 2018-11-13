function dropMenu(){
  var menuListElement = document.getElementById("button-list");
  menuListElement.classList.toggle("responsive");
}

document.getElementById("mobile-menu-icon").addEventListener("click", dropMenu);
