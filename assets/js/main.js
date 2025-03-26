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

// HERO-SECTION-JS---
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

// COUNTER---
(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend(
        {},
        $.fn.countTo.defaults,
        {
          from: $(this).data("from"),
          to: $(this).data("to"),
          speed: $(this).data("speed"),
          refreshInterval: $(this).data("refresh-interval"),
          decimals: $(this).data("decimals"),
        },
        options
      );

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data("countTo") || {};

      $self.data("countTo", data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof settings.onUpdate == "function") {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData("countTo");
          clearInterval(data.interval);
          value = settings.to;

          if (typeof settings.onComplete == "function") {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1000,
    refreshInterval: 100,
    decimals: 0,
    formatter: formatter,
    onUpdate: null,
    onComplete: null,
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);

jQuery(function ($) {
  // custom formatting example
  $(".count-number").data("countToOptions", {
    formatter: function (value, options) {
      return value
        .toFixed(options.decimals)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    },
  });

  // start all the timers
  $(".timer").each(count);

  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data("countToOptions") || {});
    $this.countTo(options);
  }
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
