"use strict";
const toggleButton = document.getElementById("theme-toggle"),
  body = document.body;
toggleButton.addEventListener("click", () => {
  body.classList.toggle("darkmode"), body.classList.toggle("lightmode");
});
const themeToggle = document.getElementById("theme-toggle"),
  moonIcon = document.getElementById("moon-icon");
themeToggle.addEventListener("click", () => {
  "moon" === moonIcon.getAttribute("name")
    ? moonIcon.setAttribute("name", "sunny")
    : moonIcon.setAttribute("name", "moon"),
    moonIcon.classList.toggle("rotate-icon");
});
const elementToggleFunc = function (e) {
    e.classList.toggle("active");
  },
  sidebar = document.querySelector("[data-sidebar]"),
  sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});
const select = document.querySelector("[data-select]"),
  selectItems = document.querySelectorAll("[data-select-item]"),
  selectValue = document.querySelector("[data-selecct-value]"),
  filterBtn = document.querySelectorAll("[data-filter-btn]");
select.addEventListener("click", function () {
  elementToggleFunc(this);
});
for (let i = 0; i < selectItems.length; i++)
  selectItems[i].addEventListener("click", function () {
    let e = this.innerText.toLowerCase();
    (selectValue.innerText = this.innerText),
      elementToggleFunc(select),
      filterFunc(e);
  });
const filterItems = document.querySelectorAll("[data-filter-item]"),
  filterFunc = function (e) {
    for (let t = 0; t < filterItems.length; t++)
      "all" === e
        ? filterItems[t].classList.add("active")
        : e === filterItems[t].dataset.category
        ? filterItems[t].classList.add("active")
        : filterItems[t].classList.remove("active");
  };
let lastClickedBtn = filterBtn[0];
for (let i = 0; i < filterBtn.length; i++)
  filterBtn[i].addEventListener("click", function () {
    let e = this.innerText.toLowerCase();
    (selectValue.innerText = this.innerText),
      filterFunc(e),
      lastClickedBtn.classList.remove("active"),
      this.classList.add("active"),
      (lastClickedBtn = this);
  });
const form = document.querySelector("[data-form]"),
  formInputs = document.querySelectorAll("[data-form-input]"),
  formBtn = document.querySelector("[data-form-btn]");
for (let i = 0; i < formInputs.length; i++)
  formInputs[i].addEventListener("input", function () {
    form.checkValidity()
      ? formBtn.removeAttribute("disabled")
      : formBtn.setAttribute("disabled", "");
  });
const navigationLinks = document.querySelectorAll("[data-nav-link]"),
  pages = document.querySelectorAll("[data-page]");
for (let i = 0; i < navigationLinks.length; i++)
  navigationLinks[i].addEventListener("click", function () {
    for (let e = 0; e < pages.length; e++)
      this.innerHTML.toLowerCase() === pages[e].dataset.page
        ? (pages[e].classList.add("active"),
          navigationLinks[e].classList.add("active"),
          window.scrollTo(0, 0))
        : (pages[e].classList.remove("active"),
          navigationLinks[e].classList.remove("active"));
  });
window.addEventListener("load", function () {
  document.body.classList.add("fade-in");
});
