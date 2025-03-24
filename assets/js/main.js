const switchBtn = document.getElementById("switch");
const navMenu = document.querySelector(".nav-menu");

// Toggle Navigation on Click
switchBtn.addEventListener("change", function () {
  if (this.checked) {
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
  }
});
