const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_previous");
const next = document.querySelector(".control_next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

changeSlide();

prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
}

//

window.addEventListener("load", () => {
  const intro = document.getElementById("intro-animation");
  const logo = document.getElementById("logo-animation");
  const welcome = document.getElementById("welcome-text");

  // Animate logo and welcome text
  setTimeout(() => {
    logo.style.opacity = 1;
    logo.style.transform = "translateY(0px) scale(1)";
    welcome.style.opacity = 1;
    welcome.style.transform = "translateY(0)";
  }, 100);

  // After 3 seconds, move logo to top-left and remove welcome text
  setTimeout(() => {
    intro.classList.add("finish");
    // Hide overlay after transition
    setTimeout(() => {
      intro.style.display = "none";
    }, 1200);
  }, 3000);
});

const fadeElements = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});

const authModal = document.getElementById("auth-modal");

const signInBtn = document.getElementById("sign-in-btn");

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  authModal.style.display = "block";
});

document.querySelector(".close-modal").addEventListener("click", () => {
  authModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === authModal) {
    authModal.style.display = "none";
  }
});

function toggleForms() {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  if (loginForm.style.display === "none") {
    loginForm.style.display = "flex";
    registerForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  }
}

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Logged in successfully!");
  authModal.style.display = "none";
});

document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registered successfully!");
    authModal.style.display = "none";
  });