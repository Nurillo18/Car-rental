let elHamburger = document.querySelector(".header__hamburger-btn");
let elMenu = document.querySelector(".header__fixed");
let deleteIcon = document.querySelector(".modal__delete");
let realModal = document.querySelector(".modal");
let elOpenList = document.querySelector(".modal__inner-list");
let elOpenHelp = document.querySelector(".modalhelp__inner-list");
let elList = document.querySelector(".dream__cards");
let elBtnsCars = document.querySelectorAll(".button__list-btn");
let elCar1 = document.querySelector(".button__list-btn--btn-car1");
let elCar2 = document.querySelector(".button__list-btn--btn-car2");
let elCar3 = document.querySelector(".button__list-btn--btn-car3");
let viewAllBtn = document.querySelector(".button__list-btn-dream");
let loginBg = document.querySelector(".login__content");
let loginCard = document.querySelector(".Login");
let elInputPass = document.querySelector(".form__password");
let elINputEmail = document.querySelector(".form__email");
let elForm = document.querySelector(".form");
let elWrongEmail = document.querySelector(".form__wrong");
let elWrongPass = document.querySelector(".form__wrong-password");
let elSubmitBtn = document.querySelector(".form__login-btn");

let emailValid = false;
let passValid = false;

function checkValidatin(element, wrong, bool) {
  element.addEventListener("blur", function (evt) {
    if (evt.target.value === "") {
      element.classList.add("invalid");
      wrong.textContent = "Entered the wrong Email";
      bool = false;
    } else {
      element.classList.remove("invalid");
      wrong.textContent = "";
      bool = true;
    }
  });
}

checkValidatin(elINputEmail, elWrongEmail, emailValid);
checkValidatin(elInputPass, elWrongPass, passValid);
elSubmitBtn.addEventListener("click", function () {
  if (elINputEmail.value === "" && elInputPass.value === "") {
    elINputEmail.classList.add("invalid");
    elInputPass.classList.add("invalid");
    elWrongPass.textContent = "Entered the wrong Email";
    elWrongEmail.textContent = "Entered the wrong Email";
  }
  if (elINputEmail.value && elInputPass.value === "") {
    elInputPass.classList.add("invalid");
    elWrongPass.textContent = "Entered the wrong Email";
  }
  if (elINputEmail.value === "" && elInputPass.value) {
    elINputEmail.classList.add("invalid");
    elWrongEmail.textContent = "Entered the wrong Email";
  }
});

const handleChangeType = (evt) => {
  if (elInputPass.type === "password") {
    elInputPass.type = "text";
  } else {
    elInputPass.type = "password";
  }
};

function openForm() {
  loginBg.classList.toggle("open-form");
  loginCard.classList.toggle("open-bg");
}
loginCard.addEventListener("click", function (evt) {
  if (evt.target.id === "login-wrapper") {
    loginBg.classList.remove("open-form");
    loginCard.classList.remove("open-bg");
    elINputEmail.value = "";
    elInputPass.value = "";
  }
});

function validBlur(evt) {
  console.log(evt);
}

function handleFormDel() {
  loginBg.classList.remove("open-form");
  loginCard.classList.remove("open-bg");
}

const nextClick = () => {
  const widthItem = document.querySelector(".caruel-list__item").offsetWidth;
  document.querySelector(".caruel-list").scrollLeft += widthItem;
};
const prevClick = () => {
  const widthItem = document.querySelector(".caruel-list__item").offsetWidth;
  document.querySelector(".caruel-list").scrollLeft -= widthItem;
};
let newCars = [
  {
    name: "Ford Fiesta",
    type: "Economy Car",
    img: "./images/dream_img/ford.png",
  },
  {
    name: "Nissan Versa",
    type: "Compact Car",
    img: "./images/dream_img/nissan.png",
  },
  {
    name: "Toyota Corolla",
    type: "Mid-size Car",
    img: "./images/dream_img/tayotta.png",
  },
  {
    name: "Nissan Rogue",
    type: "Mid-size SUV",
    img: "./images/dream_img/nissan-rover.png",
  },
  {
    name: "Chevy Traverse",
    type: "Full-size SUV ",
    img: "./images/dream_img/checy.png",
  },
  {
    name: "Nissan Altima",
    type: "Full-size Car ",
    img: "./images/dream_img/altime.png",
  },
];
let sportCars = [
  {
    name: "Royce rolls ghost",
    type: "Full-size Car",
    img: "./images/dream_img/royce.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
  {
    name: "Mercedes s class",
    type: "Full-size Car",
    img: "./images/dream_img/mers.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
  {
    name: "Lamborghini urus",
    type: "Mid-size Car",
    img: "./images/dream_img/lambo.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
  {
    name: "Mercedes g63 amg",
    type: "Mid-size SUV",
    img: "./images/dream_img/mers-g.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
];
let FordCars = [
  {
    name: "15-Passenger Ford Transit ",
    type: "Full-size Car",
    img: "./images/dream_img/ford-full.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
  {
    name: "Chrysler Pacifica",
    type: "Full-size Car",
    img: "./images/dream_img/pafic.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
  {
    name: "Chevy Silverado 4500HD",
    type: "Mid-size Car",
    img: "./images/dream_img/checy-silver.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
  {
    name: "12-Passenger Ford Transit",
    type: "Mid-size SUV",
    img: "./images/dream_img/spinner-12.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
  {
    name: "15-Passenger Ford Transit ",
    type: "Full-size SUV ",
    img: "./images/dream_img/spinnger-15.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
  {
    name: "Mercedes-Benz Sprinter",
    type: "Mid-size SUV",
    img: "./images/dream_img/full-spinner.png",
    sets: "5 Seats",
    year: "21+ Years",
    typeCar: "Automatic",
    hight: "1-lit / 2.5 km",
  },
];
let allView = new Array(newCars, sportCars, FordCars);

const newCarRender = (arr, element) => {
  arr.map((item) => {
    let elItem = document.createElement("li");
    elItem.classList.add("dream__card");
    elItem.innerHTML = `
                            <div class="dream__car-information">
                                <h3 class="card__heading">${item.name}</h3>
                                <p class="card__description">${item.type}</p>
                            </div>
                            <img
                            class="card__image"
                            src=${item.img}
                            width="387"
                            height="220"
                            alt="beautiful car"
                            />
                            <dl class="card__info-list">
                                <dd class="card__info-data">
                                    <img
                                    class="card__info-image"
                                    src="./images/dream_img/User.svg"
                                    alt="user icon"
                                    />
                                    5 Seats
                                </dd>
                                <dd class="card__info-data">
                                    <img
                                    class="card__info-image"
                                    src="./images/dream_img/gear.svg"
                                    alt="user icon"
                                    />
                                    Automatic
                                </dd>
                                <dd class="card__info-data">
                                    <img
                                    class="card__info-image"
                                    src="./images/dream_img/File-user.svg"
                                    alt="user icon"
                                    />
                                    21 +Years
                                </dd>
                                <dd class="card__info-data">
                                    <img
                                    class="card__info-image"
                                    src="./images/dream_img/petrol.svg"
                                    alt="user icon"
                                    />1-lit/2.5 km
                                </dd>
                            </dl>
        `;
    element.appendChild(elItem);
  });
};
// newCarRender(newCars, elList);
elBtnsCars.forEach((item) => {
  item.addEventListener("click", function (evt) {
    if (true) {
      newCarRender(newCars, elList);
    }
    if (evt.target.textContent.trim() === "Compact") {
      elList.innerHTML = "";
      newCarRender(newCars, elList);
      elCar1.classList.add("active");
      elCar2.classList.remove("active");
      elCar3.classList.remove("active");
    }
    if (evt.target.textContent.trim() === "Sport cars") {
      elList.innerHTML = "";
      newCarRender(sportCars, elList);
      item.setAttribute("id", "active");
      elCar2.classList.add("active");
      elCar1.classList.remove("active");
      elCar3.classList.remove("active");
    }
    if (evt.target.textContent.trim() === "Vans") {
      elList.innerHTML = "";
      newCarRender(FordCars, elList);
      item.setAttribute("id", "active");
      elCar3.classList.add("active");
      elCar1.classList.remove("active");
      elCar2.classList.remove("active");
    }
  });
});
if (true) {
  newCarRender(newCars, elList);
}
viewAllBtn.addEventListener("click", function () {
  elList.innerHTML = "";
  newCarRender(allView.flat(), elList);
  elCar1.classList.remove("active");
  elCar2.classList.remove("active");
  elCar3.classList.remove("active");
});
elHamburger.addEventListener("click", function () {
  realModal.classList.toggle("show-modal");
  elMenu.classList.toggle("shadow");
  document.body.classList.add("dropping");
});
deleteIcon.addEventListener("click", function () {
  realModal.classList.remove("show-modal");
  elMenu.classList.remove("shadow");
  document.body.classList.remove("dropping");
});
elMenu.addEventListener("click", function (evt) {
  if (evt.target.id === "menu") {
    realModal.classList.remove("show-modal");
    elMenu.classList.remove("shadow");
    document.body.classList.remove("dropping");
  }
});
function handleClick() {
  elOpenList.classList.toggle("open");
}
function handleCLickHerl() {
  elOpenHelp.classList.toggle("open-secound");
}
