const btn = document.querySelector(".nav-menu-mobile");
const btnOpenMenu = document.querySelector(".menu_btn");
const btnClose = document.querySelector(".icon");

console.log(btnClose);
btnOpenMenu.addEventListener("click", () => {
  btn.classList.toggle("active");
  btnClose.classList.toggle("close_menu");
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLists = document.querySelectorAll(".nav_item a");
  navLists.forEach((item) => {
    linkRef = item.getAttribute("href") || "";
    if (linkRef === (currentPage == "index.html" ? "#" : currentPage)) {
      item.parentElement.classList.add("hovered");
    }
  });
});

function changeValue() {
  const contactinput = document.getElementById("contact-input");
  const isEmailChecked =
    document.querySelector("input[name='contact-input']:checked").value ===
    "email";
  if (isEmailChecked) {
    contactinput.placeholder = "Your Email Address";
  } else {
    contactinput.placeholder = "Your Phone Number";
  }
}
