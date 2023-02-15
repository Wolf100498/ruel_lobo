window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector("[data-preloader]").classList.add("hide");
  }, 1200);
});

const main = document.querySelector(".main");

main.addEventListener("scroll", function () {
  document
    .querySelector("[data-navbar]")
    .classList[main.scrollTop > 400 ? "add" : "remove"]("scrolled");
});

const navMobile = document.querySelector("#nav-mobile");

document.querySelector("[data-menu]").addEventListener("click", () => {
  navMobile.classList.toggle("active");
});

  main.addEventListener("scroll", () => {
    navMobile.classList.remove("active");
  });
