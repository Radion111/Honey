let myslider1 = new Swiper(".myslider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  observer: true,

  observeParent: true,

  observeSlideChildren: true,

  autoHeight: true,

  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 120,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    522: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 100,
    },
    986: {
      slidesPerView: 3,
    },
  },
});

let allheadertop = document.querySelectorAll(".header-top__a");

allheadertop.forEach((item) => {
  item.addEventListener("click", function headerTop(event) {
    event.preventDefault();
    burgermenu.classList.remove("active");
    document
      .querySelector(".header-top__ulmainrowmainnav")
      .classList.remove("active");
  });
});

let sertificate = document.querySelector(".compoundandcost__dopelement");
sertificate.addEventListener("click", function sertiFicate(event) {
  event.preventDefault();
  sertificate.classList.add("active");
  document
    .querySelector(".compoundandcost__hidenelement")
    .classList.toggle("active");
});

let burgermenu = document.querySelector(".burger-menu");
burgermenu.addEventListener("click", function burgerMenu() {
  burgermenu.classList.toggle("active");
  document
    .querySelector(".header-top__ulmainrowmainnav")
    .classList.toggle("active");
  document.getElementsByTagName("body")[0].classList.toggle("lock");

  return true;
});

// Метод для картинок ibg
function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

let scroll = document.querySelectorAll(".header-top__a");

scroll.forEach((item) => {
  item.addEventListener("click", function Scrollnear(event) {
    event.preventDefault();
    let id = item.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});
