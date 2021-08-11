// Select current date at birthday
const date = new Date();
const currentDay = date.getDay();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

// document.querySelector("#birthday_day").value = currentDay;
// document.querySelector("#birthday_month").value = currentMonth;
// document.querySelector("#birthday_year").value = currentYear;

console.log(`${currentDay} ${currentMonth} ${currentYear}`);

const modal = document.querySelector(".js-modal");
modal.addEventListener("click", closeModal);

const modalContainer = document.querySelector(".js-modal-container");
// Click outside of modal
modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

const openModalBtn = document.querySelector(".js-open-modal");
openModalBtn.addEventListener("click", openModal);

const closeModalBtn = document.querySelector(".js-close-modal");
closeModalBtn.addEventListener("click", closeModal);

const lastNameWarning = document.querySelector(".js-last-name-warning");
const firstNameWarning = document.querySelector(".js-first-name-warning");
const phoneEmailWarning = document.querySelector(".js-phone-email-warning");
const passwordWarning = document.querySelector(".js-password-warning");
const birthdayWarning = document.querySelector(".js-birthday-warning");
const genderWarning = document.querySelector(".js-gender-warning");

// Get value of input

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", getInput);

function openModal() {
  modal.classList.add("open");
}

function closeModal() {
  console.log("close");
  modal.classList.remove("open");
}

function getInput() {
  const lastName = document.querySelector("#last-name");
  if (!lastName.value) {
    lastName.style.border = "1px solid red";
    document.querySelector(".js-last-name-warning").classList.remove("hidden");
  }

  const firstName = document.querySelector("#first-name");
  if (!firstName.value) {
    firstName.style.border = "1px solid red";
    document.querySelector(".js-first-name-warning").classList.remove("hidden");
  }

  const phoneEmail = document.querySelector("#phone-email");
  if (!phoneEmail.value) {
    phoneEmail.style.border = "1px solid red";
    document
      .querySelector(".js-phone-email-warning")
      .classList.remove("hidden");
  }

  const password = document.querySelector("#password");
  if (!password.value) {
    password.style.border = "1px solid red";
    document.querySelector(".js-password-warning").classList.remove("hidden");
  }

  const day = document.querySelector("#day");
  const month = document.querySelector("#month");
  const year = document.querySelector("#year");

  if (!validateBirthday(day.value, month.value, year.value)) {
    console.log("ko duoc");
    document.querySelector(".js-birthday-warning").classList.remove("hidden");
  }
  // const gender = document.querySelector('input[name="gender"]:checked').value;
}

function validateBirthday(day, month, year) {
  console.log(`${day} ${month} ${year}`);
  if (day === 0 || month === 0 || year === 0) {
    console.log("thieu");
    return false;
  }
  return true;
}

function notify() {
  console.log("ahhi");
}

function showWarning(input) {
  if (!input.value) {
    input.style.border = "1px solid red";
  }
}

function validateInput() {
  const document = document.querySelector(".js-");
}
