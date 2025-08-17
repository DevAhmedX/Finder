//swiper
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//menuToggle
const themeBtn = document.querySelector(".theme");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-btn");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

//theme
const theme = document.querySelector(".theme");
let currentTheme = localStorage.getItem("site-theme") || "light";
const themeIcon = theme.querySelector("i");

function applyTheme(themeMode) {
  if (themeMode === "dark") {
    document.body.style.backgroundColor = "#111827";
    document.body.style.color = "#ffffff";
    document.querySelector("nav").style.backgroundColor = "#111827";
    document.querySelector(".menu-toggle").style.color = "#ffffff";
    document.querySelector(".mobile-menu").style.backgroundColor = "#111827";
    document.querySelector(".customize-btn").style.backgroundColor = "#111827";
    document.querySelector("#sidebarContent").style.backgroundColor = "#111827";
    document.querySelector(".toggle").style.backgroundColor = "#1d2735";
    document
      .querySelectorAll(".color-code")
      .forEach((el) => (el.style.backgroundColor = "#1d2735"));
    document
      .querySelectorAll("a:not(footer a)")
      .forEach((el) => (el.style.color = "#ffffff"));
    document
      .querySelectorAll(".types_img:not(footer .types_img)")
      .forEach((el) => (el.style.backgroundColor = "#333d4c"));
    document
      .querySelectorAll(".near_left:not(footer .near_left)")
      .forEach((el) => (el.style.backgroundColor = "#1d2735"));
    document
      .querySelectorAll(".near_u_shape:not(footer .near_u_shape)")
      .forEach((el) => (el.style.visibility = "hidden"));
    document
      .querySelectorAll("span:not(footer span)")
      .forEach((el) => (el.style.color = "#ffffff"));
    document
      .querySelectorAll(".book_btn:not(footer .book_btn)")
      .forEach((el) => (el.style.borderColor = "#ffffff"));
    document
      .querySelectorAll(".expert_advice:not(footer .expert_advice)")
      .forEach((el) => (el.style.backgroundColor = "#1d2735"));
    document
      .querySelectorAll(
        ".expert_advice .advices .advice .right div:not(footer div)"
      )
      .forEach((el) => (el.style.color = "#333d4c"));
    document
      .querySelectorAll("p:not(footer p),h3:not(footer h3),h4:not(footer h4)")
      .forEach((el) => (el.style.color = "#ffffff"));

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#1d2735";
    document
      .querySelectorAll(
        "nav,.mobile-menu,.customize-btn,#sidebarContent,.toggle"
      )
      .forEach((el) => (el.style.backgroundColor = ""));
    document
      .querySelectorAll("a:not(footer a),.menu-toggle")
      .forEach((el) => (el.style.color = ""));
    document
      .querySelectorAll(
        ".types_img:not(footer .types_img), .near_left:not(footer .near_left), .expert_advice:not(footer .expert_advice), span:not(footer span), p:not(footer p), h3:not(footer h3), h4:not(footer h4),.color-code"
      )
      .forEach((el) => {
        el.style.backgroundColor = "";
        el.style.color = "";
      });
    document
      .querySelectorAll(".book_btn:not(footer .book_btn)")
      .forEach((el) => (el.style.borderColor = ""));
    document
      .querySelectorAll(".near_u_shape:not(footer .near_u_shape)")
      .forEach((el) => (el.style.visibility = ""));

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }

  currentTheme = themeMode;
  localStorage.setItem("site-theme", themeMode);
}

applyTheme(currentTheme);

theme.addEventListener("click", (e) => {
  e.preventDefault();
  applyTheme(currentTheme === "light" ? "dark" : "light");
});

const customizeBtn = document.getElementById("customize-btn");
const sidebarContent = document.getElementById("sidebarContent");
const close = document.getElementById("close-btn");
const colors = document.querySelectorAll(".color-item");

window.addEventListener("DOMContentLoaded", () => {
  const savedBase = localStorage.getItem("fn-primary");
  const savedHover = localStorage.getItem("fn-primary-hover");

  if (savedBase && savedHover) {
    document.documentElement.style.setProperty("--fn-primary", savedBase);
    document.documentElement.style.setProperty(
      "--fn-primary-text-emphasis",
      savedHover
    );
  }
});

//customizeBtn
customizeBtn.addEventListener("click", () => {
  sidebarContent.classList.remove("hidden");
  sidebarContent.classList.add("open");
});

close.addEventListener("click", () => {
  sidebarContent.classList.remove("open");
  sidebarContent.classList.add("hidden");
});

colors.forEach((item) => {
  item.addEventListener("click", () => {
    const baseColor = item.querySelector(".color-code").textContent.trim();
    const hoverColor = darkenColor(baseColor, 20);

    document.documentElement.style.setProperty("--fn-primary", baseColor);
    document.documentElement.style.setProperty(
      "--fn-primary-text-emphasis",
      hoverColor
    );

    localStorage.setItem("fn-primary", baseColor);
    localStorage.setItem("fn-primary-hover", hoverColor);
  });
});

function darkenColor(hex, amount) {
  let col = hex.substring(1);
  let num = parseInt(col, 16);
  let r = (num >> 16) - amount;
  let g = ((num >> 8) & 0x00ff) - amount;
  let b = (num & 0x0000ff) - amount;

  r = Math.max(0, r);
  g = Math.max(0, g);
  b = Math.max(0, b);

  return `rgb(${r}, ${g}, ${b})`;
}

//toggleBtn
const toggleBtn = document.querySelector(".toggle-nav-btn");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hide");

  const icon = toggleBtn.querySelector("i");
  if (navLinks.classList.contains("hide")) {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});
