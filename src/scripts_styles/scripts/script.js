let headerUserMenuWrap = document.querySelector(".header__usermenu__wrap");
if (headerUserMenuWrap) {
  let userMenu = headerUserMenuWrap.querySelector(".header__usermenu__nav");
  let upDown = headerUserMenuWrap.querySelector(".up_down");
  upDown.addEventListener("click", function () {
    upDown.classList.toggle("open");
    userMenu.classList.toggle("header__usermenu__nav_open");
  });
}
