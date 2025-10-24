var userName = document.getElementById("span");
var logoutBtn = document.getElementById("logout");

var currentUser = JSON.parse(localStorage.getItem("loginUser"));

if (currentUser) {
  userName.innerHTML = currentUser.name;
}

logoutBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Goodbye, " + currentUser.name + " 👋",
    text: "We hope to see you again soon!",
    imageUrl: "./imgs/logout.jpeg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    showCancelButton: false,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  }).then(() => {
    localStorage.removeItem("loginUser");
    window.location.href = "index.html";
  });
});
