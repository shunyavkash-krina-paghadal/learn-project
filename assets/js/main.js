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

// ABOUT-SECTION-JS---
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {},
  breakpoints: {
    1399: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

// SLICK-SLIDER

$(() => {
  var createSlick = () => {
    let slider = $(".slider");

    slider.not(".slick-initialized").slick({
      autoplay: false,
      infinite: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: {},
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            // adaptiveHeight: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  createSlick();

  $(window).on("resize orientationchange", createSlick);
});

// FANCYBOX

// toggle

let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.style.backgroundColor = "var(--green-dark)";
    header.style.transition = "background-color 0.3s ease, padding 0.1s ease";
    topbar.style.padding = "10px";
    header.style.padding = "20px";
  } else {
    header.style.backgroundColor = "";
    header.style.padding = "20px";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 70) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// COUNTER---

function animateCounters() {
  const counters = document.querySelectorAll(".count-number");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-to");
    let count = 0;

    function updateCounter() {

      if (count >= target) {
        counter.innerText = Math.floor(target);
      } else {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(updateCounter);
      } 
    }

    updateCounter();
  });
}
