// change background color + img
let imgIcons = document.querySelectorAll(".landing .icons img");
let img = document.querySelector(".img");
if (window.localStorage.getItem("color")) {
  document.body.style.backgroundColor = window.localStorage.getItem("color");
}
if (window.localStorage.getItem("src")) {
  img.src = window.localStorage.getItem("src");
}

imgIcons.forEach((e) => {
  e.addEventListener("click", function () {
    document.body.style.backgroundColor = this.dataset.color;
    window.localStorage.setItem("color", this.dataset.color);
    window.localStorage.setItem("src", this.src);
    img.src = this.src;
  });
});
// respornsive
let MenuIcon = document.querySelectorAll(".menu i");
let menu = document.querySelector(".menu");
let navcon = document.querySelectorAll(".nav i");
console.log(MenuIcon);
navcon.forEach((e) => {
  e.addEventListener("click", function () {
    menu.style.display = "flex";
  });
});

MenuIcon.forEach((e) => {
  e.addEventListener("click", function () {
    menu.style.display = "none";
  });
});
