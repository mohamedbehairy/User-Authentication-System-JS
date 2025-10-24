var email = document.getElementById("email");
var password = document.getElementById("password");
var loginBtn = document.getElementById("login");

var currentUsers = JSON.parse(localStorage.getItem("users")) || [];
console.log(currentUsers, `currentUsers`);

loginBtn.addEventListener("click", function () {
  if (email.value.trim() === "" || password.value.trim() === "") {
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

  var userFound = currentUsers.find(function (user) {
    return user.email === email.value.trim();
  });

  if (!userFound) {
    Swal.fire({
      title: "Invalid Email",
      text: "We couldn’t find an account with this email address. Please check and try again.",
      imageUrl: "./imgs/Invalid Email.jpeg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
    return;
  }

  if (userFound.password !== password.value.trim()) {
    Swal.fire({
      title: "Incorrect Password",
      text: "The password you entered is incorrect. Please try again.",
      imageUrl: "./imgs/Incorrect Password.jpeg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      showCancelButton: true,
      showConfirmButton: false,
    });
    return;
  }

  var loginUser = {
    name: userFound.name,
    email: userFound.email,
  };

  localStorage.setItem("loginUser", JSON.stringify(loginUser));

  Swal.fire({
    title: "Login Successful 🎉",
    text: `Welcome back, ${userFound.name}! You have successfully signed in.`,
    imageUrl: "./imgs/login.jpeg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    showCancelButton: false,
    showConfirmButton: false,
    timer: 2000,
  }).then(() => {
    window.location.href = "home.html";
  });
});
