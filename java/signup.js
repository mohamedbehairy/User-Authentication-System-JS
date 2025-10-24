var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var nameAlert = document.getElementById("nameAlert");
var emailAlert = document.getElementById("emailAlert");
var passwordAlert = document.getElementById("passwordAlert");

var btn = document.getElementById("btn");
// btn.classList.add("disabled");

var users = JSON.parse(localStorage.getItem("users")) || [];

//$ Create User
btn.addEventListener("click", function () {
  users = JSON.parse(localStorage.getItem("users")) || [];

  if (fullName.value === "" || email.value === "" || password.value === "") {
    Swal.fire({
      title: "Invalid Form",
      text: "Please fill in all fields correctly before submitting.",
      imageUrl: "./imgs/Invalid Form.webp",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      showConfirmButton: false,
    });
    return;
  }
  //& Check if name or email already exists
  var nameExists = users.some(function (user) {
    return user.name.toLowerCase() === fullName.value.toLowerCase();
  });
  var emailExists = users.some(function (user) {
    return user.email.toLowerCase() === email.value.toLowerCase();
  });

  if (nameExists && emailExists) {
    Swal.fire({
      title: "Duplicate Name & Email",
      text: "Both the name and email are already registered. Please use different ones.",
      imageUrl: "./imgs/Duplicate Name & Email.jpeg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      showConfirmButton: false,
    });
    return;
  } else if (nameExists) {
    Swal.fire({
      title: "Duplicate Name",
      text: "This name already exists. Please choose a different name.",
      imageUrl: "./imgs/Duplicate Name.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      showConfirmButton: false,
    });
    return;
  } else if (emailExists) {
    Swal.fire({
      title: "Duplicate Email",
      text: "This email is already registered. Please use another email address.",
      imageUrl: "./imgs/Duplicate Email.jpeg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      showConfirmButton: false,
    });
    return;
  }

  var user = {
    name: fullName.value,
    email: email.value,
    password: password.value,
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  Swal.fire({
    title: "User Added Successfully 🎉",
    showConfirmButton: false,
    imageUrl: "./imgs/bravo.jpeg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    showCancelButton: false,
    showConfirmButton: false,
    timer: 1700,
  }).then(() => {
    window.location.href = "index.html";
  });

  clearForm();
});

//$ Validate operations
var regex = {
  name: /^[A-Za-z]{3,}( [A-Za-z]{3,})+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  password: /^[A-Za-z0-9]{6,}$/,
};

//# Name handle
fullName.addEventListener("input", function () {
  if (fullName.value === "") {
    fullName.classList.remove("is-valid", "is-invalid");
    nameAlert.classList.add("d-none");
  } else if (!regex.name.test(fullName.value)) {
    fullName.classList.remove("is-valid");
    fullName.classList.add("is-invalid");
    nameAlert.classList.remove("d-none");
  } else {
    fullName.classList.remove("is-invalid");
    fullName.classList.add("is-valid");
    nameAlert.classList.add("d-none");
  }
  checkAllInputs();
});

//# Email handle
email.addEventListener("input", function () {
  if (email.value === "") {
    email.classList.remove("is-valid", "is-invalid");
    emailAlert.classList.add("d-none");
  } else if (!regex.email.test(email.value)) {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    emailAlert.classList.remove("d-none");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    emailAlert.classList.add("d-none");
  }
  checkAllInputs();
});

//# Password handle
password.addEventListener("input", function () {
  if (password.value === "") {
    password.classList.remove("is-valid", "is-invalid");
    passwordAlert.classList.add("d-none");
  } else if (!regex.password.test(password.value)) {
    password.classList.remove("is-valid");
    password.classList.add("is-invalid");
    passwordAlert.classList.remove("d-none");
  } else {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    passwordAlert.classList.add("d-none");
  }
  checkAllInputs();
});

//@ handle button
function checkAllInputs() {
  if (
    fullName.classList.contains("is-valid") &&
    email.classList.contains("is-valid") &&
    password.classList.contains("is-valid")
  ) {
    btn.classList.remove("disabled");
  } else {
    btn.classList.add("disabled");
  }
}

//$ Clear Form
function clearForm() {
  fullName.value = "";
  email.value = "";
  password.value = "";

  fullName.classList.remove("is-valid");
  email.classList.remove("is-valid");
  password.classList.remove("is-valid");
}
