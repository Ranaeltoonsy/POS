const idRegex = /^[a-zA-Z][a-zA-Z0-9]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,11}$/;

let salesIdInput = document.querySelector("#text");
let passwordInput = document.querySelector("#password");

const handleSubmit = (event) => {
  event.preventDefault();

  let text = salesIdInput.value;
  let password = passwordInput.value;

  let hasError = 0;

  if (!idRegex.test(text)) {
    alert("Invalid ID");
    hasError++;
  }

  if (hasError > 0) {
    alert("Fix Problems");
  } else {
    alert("Form is Good");
  }

  let sallerString = localStorage.getItem("sallers");
  let sallersarry = [];

  if (sallerString) {
    sallersarry = JSON.parse(sallerString);
    let idIndex = sallersarry.findIndex((el, index) => {
      return el.text === text && el.password === password;
    });

    if (idIndex !== -1) {
      window.location.href = "./Cats.html";
      // alert("Welcome");
    } else {
      alert("Wrong ID or Password");
    }
  } else {
    alert("You don't have an account");
  }
};
