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

//  Для форми

let registration = document.querySelector(".comments__button");
let password = document.querySelector(".popup-pasword");

// let str = "аааааА23";
// console.log(/(?=.*[0-9])(?=.*[а-я])(?=.*[А-Я])[0-9а-яА-Я]{6,16}/g.test(str));
// !интересная конструкция нужно изучить ))) ?=

registration.addEventListener("click", function Check(event) {
  let name = document.querySelector(".comments__name");
  let age = document.querySelector(".comments__age");
  let city = document.querySelector(".comments__city");
  let textArea = document.querySelector(".comments__textarea");
  let tel = document.querySelector(".comments__number");
  let email = document.querySelector(".comments__email");
  // Для имени
  if (name.value.length < 3) {
    event.preventDefault();
    name.classList.add("active");
  } else if (name.value.length >= 3) {
    name.classList.remove("active");
  }
  if (age.value.length <= 1) {
    event.preventDefault();
    age.classList.add("active");
  } else if (name.value.length >= 3) {
    age.classList.remove("active");
  }
  if (city.value.length <= 3) {
    event.preventDefault();
    city.classList.add("active");
  } else if (city.value.length >= 3) {
    city.classList.remove("active");
  }

  if (textArea.value.length <= 10) {
    event.preventDefault();
    textArea.classList.add("active");
  } else if (tex.value.length >= 3) {
    textArea.classList.remove("active");
  }

  if (tel.value.search(/[a-z]/g) != -1 || tel.value.search(/[а-я]/g) != -1) {
    event.preventDefault();
    tel.classList.add("active");
  } else if (tel.value.length != 13) {
    event.preventDefault();
    tel.classList.add("active");
  } else if (
    tel.value.length == 13 &&
    (tel.value.search(/[a-z]/g) == -1 || tel.value.search(/[а-я]/g != -1))
  ) {
    tel.classList.remove("active");
  }

  // Для емайла

  if (email.value.search(/\S*\@\w*\.\w*/gim) == -1) {
    event.preventDefault();
    email.classList.add("active");
  } else {
    email.classList.remove("active");
  }
});
