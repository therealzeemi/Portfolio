/////////////////////
// Header Navigation

const input = document.querySelector(".header__mblnav--input");
const headernav = document.querySelector(".header__nav");

// Mobile Navigation Button
input.addEventListener("change", function (e) {
  headernav.classList.toggle("active");
});

const nav = document.querySelector(".header__nav");
const pages = document.querySelectorAll("[data-page]");

nav.addEventListener("click", function (e) {
  const btn = e.target.closest(".header__nav--link")?.innerHTML.toLowerCase();
  if (!btn) return;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].dataset.page == btn) {
      pages[i].classList.add("active");
      headernav.classList.toggle("active");
      input.checked = false;
    } else {
      pages[i].classList.remove("active");
    }
  }
});

const headerLogo = document.querySelector(".header__logo");
headerLogo.addEventListener("click", function () {
  for (let i = 0; i < pages.length; i++) {
    pages[i].classList.remove("active");
    document.querySelector(".home").classList.add("active");
  }
});

//////////////////////////////
// Portfolio Filter Navigation

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const projects = document.querySelectorAll("[data-category]");

document.querySelector(".filter__list").addEventListener("click", function (e) {
  const filterBtn = e.target.closest("[data-filter-btn]")?.innerHTML.toLowerCase();
  if (!filterBtn) return;

  for (let i = 0; i < projects.length; i++) {
    if (projects[i].dataset.category.toLowerCase() === filterBtn) {
      projects[i].classList.add("active");
    } else if ("all" === filterBtn) {
      projects[i].classList.add("active");
    } else {
      projects[i].classList.remove("active");
    }
  }
});

// Portfolio Select Box
const selectBox = document.querySelector(".filter__select-box");
const selectBoxItems = document.querySelectorAll("[data-select-item]");

selectBox.addEventListener("click", function (e) {
  e.target.closest(".filter__select-box").classList.toggle("active");

  const selectField = e.target.closest("[data-select-item]");
  if (!selectField) return;
  console.log(selectField);

  // Changing title of select box
  document.querySelector(".filter__select--value").textContent = selectField.innerHTML;

  // Matching Projects
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].dataset.category.toLowerCase() === selectField.innerHTML.toLowerCase()) {
      console.log("working");
      projects[i].classList.add("active");
    } else if ("all" === selectField.innerHTML.toLowerCase()) {
      projects[i].classList.add("active");
    } else {
      projects[i].classList.remove("active");
    }
  }
});

///////////////////////
// Light - Dark Mode

const clrBtn = document.querySelector(".header__clrbtn");
clrBtn.addEventListener("click", function (e) {
  document.body.classList.toggle("dark-mode");
});

///////////////////////
// Home Page Navigation
const commonLinks = document.querySelectorAll(".common__link");
console.log(commonLinks);

document.querySelector(".home__content").addEventListener("click", function (e) {
  const page = e.target.closest(".common__link")?.dataset.page.toLowerCase();
  if (!page) return;

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].dataset.page == page) {
      pages[i].classList.add("active");
    } else {
      pages[i].classList.remove("active");
    }
  }
});
