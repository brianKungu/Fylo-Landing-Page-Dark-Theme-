document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myform");
  const emailInput = document.getElementById("email");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", function (event) {
    if (!isValidEmail(emailInput.value)) {
      event.preventDefault(); //prevent form from submitting
      errorMsg.textContent = "Please enter a valid email address";
    }
  });

  emailInput.addEventListener("input", function () {
    if (isValidEmail(emailInput.value)) {
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Please enter a valid email address";
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
