// header-js

document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.getElementById("close-btn");
  const menuOverlay = document.getElementById("menu-overlay");
  const menuItems = document.querySelectorAll(".menulist-a");
  const submenu = document.getElementById("submenu");
  const menuList = document.querySelector(".menu-list");
  const submenus = {
    wrekin: {
      items: [
        { name: "Homepage", link: "home.html" },
        { name: "Admissions", link: "admissionpages.html" },
        {
          name: "International Admissions",
          link: "internationaladmissions.html",
        },
        { name: "Academic", link: "academic.html" },
        { name: "Wrekin Life", link: "wrekinlife.html" },
        { name: "Year 7-8", link: "wrekinyear7-8.html" },
        { name: "Sixth Form", link: "wrekinsixthform.html" },
        { name: "Co-Curricular", link: "wrekincocurricular.html" },
      ],
      color: "#002A4D",
    },
    oldhall: {
      items: [
        { name: "Homepage", link: "index.html" },
        { name: "Admissions", link: "admissionpages.html" },
        { name: "Old Hall Life", link: "wrekinsixthform.html" },
        { name: "Academic", link: "academic.html" },
        { name: "Our Community", link: "wrekinourcommunity.html" },
        { name: "News & Events", link: "wrekinews.html" },
        { name: "Policies", link: "wrekininternational.html" },
        { name: "Get in touch", link: "contact.html" },
      ],
      color: "#7A2534",
    },
  };
  menuBtn.addEventListener("click", function () {
    menuOverlay.classList.add("active");
    menuOverlay.style.backgroundColor = "#4B4F61";
  });
  closeBtn.addEventListener("click", function () {
    menuOverlay.classList.remove("active");
    submenu.classList.remove("active");
    menuList.classList.remove("hidden");
    menuOverlay.style.backgroundColor = "#4B4F61";
  });
  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      menuItems.forEach((menu) => menu.classList.remove("active"));
      this.classList.add("active");
      const selectedMenu = this.getAttribute("data-menu");
      const submenuData = submenus[selectedMenu];
      if (submenuData) {
        submenu.innerHTML = submenuData.items
          .map((item) => `<li><a href="${item.link}">${item.name}</a></li>`)
          .join("");
        submenu.classList.add("active");
        menuList.classList.add("hidden");
        menuOverlay.style.backgroundColor = submenuData.color;
        if (!submenu.querySelector(".back-btn")) {
          let backBtn = document.createElement("button");
          backBtn.innerHTML = "← Back";
          backBtn.classList.add("back-btn");
          backBtn.onclick = function () {
            submenu.classList.remove("active");
            menuList.classList.remove("hidden");
            menuOverlay.style.backgroundColor = "#4B4F61";
          };
          submenu.prepend(backBtn);
        }
      } else {
        submenu.classList.remove("active");
        menuOverlay.style.backgroundColor = "#4B4F61";
      }
    });
  });
  window.addEventListener("resize", function () {
    if (menuOverlay.classList.contains("active")) {
      const activeItem = document.querySelector(".menulist-a.active");
      if (activeItem) {
        const selectedMenu = activeItem.getAttribute("data-menu");
        if (submenus[selectedMenu]) {
          menuOverlay.style.backgroundColor = submenus[selectedMenu].color;
        }
      }
    }
  });
});
window.addEventListener("scroll", function () {
  let headers = document.querySelectorAll(".header, .headers, .headerr");
  headers.forEach((header) => {
    if (header) {
      if (window.scrollY >= 40) {
        header.classList.add("scrolled");
        header.style.transition =
          "background-color 0.3s ease, padding 0.3s ease";
        header.style.padding = "10px 0";
        if (header.classList.contains("header")) {
          header.style.backgroundColor = "#002A4D";
        } else if (header.classList.contains("headers")) {
          header.style.backgroundColor = "white";
        } else if (header.classList.contains("headerr")) {
          header.style.backgroundColor = "#002A4D";
        }
      } else {
        header.classList.remove("scrolled");
        header.style.padding = "31px 0";
        if (header.classList.contains("header")) {
          header.style.backgroundColor = "transparent";
        } else if (header.classList.contains("headers")) {
          header.style.backgroundColor = "transparent";
        } else if (header.classList.contains("headerr")) {
          header.style.backgroundColor = "transparent";
        }
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModal");
  const myModal = document.getElementById("myModal");
  const closeModalBtn = myModal?.querySelector(".close");
  if (openModalBtn && myModal && closeModalBtn) {
    openModalBtn.addEventListener("click", function () {
      myModal.style.display = "flex";
      $("body").css("overflow", "hidden");
    });
    closeModalBtn.addEventListener("click", function () {
      myModal.style.display = "none";
      $("body").css("overflow", "auto");
    });
  }
});
