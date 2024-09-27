const idRegex = /^[a-zA-Z][a-zA-Z0-9]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,11}$/;

let salesIdInput = document.querySelector("#text");
let passwordInput = document.querySelector("#password");
let confirmInput = document.querySelector("#confirm");

const handleSubmit = (event) => {
  event.preventDefault();

  let text = salesIdInput.value;
  let password = passwordInput.value;
  let confirm = confirmInput.value;

  let hasError = 0;

  let obj = { text, password, confirm };

  if (!idRegex.test(text)) {
    alert("Invalid ID");
    hasError++;
  }

  if (!passwordRegex.test(password)) {
    alert("Invalid Password");
    hasError++;
  }

  if (password !== confirm) {
    alert("Password Do Not Match");
    hasError++;
  }

  if (hasError > 0) {
    alert("Fix Problems");
  } else {
    alert("Email registered successfuly");
    window.location.href = "./index.html";
  }

  console.log(obj);

  let sallerString = localStorage.getItem("sallers");
  let sallersarry = [];

  if (sallerString) {
    sallersarry = JSON.parse(sallerString);
    let idIndex = sallersarry.findIndex((el, index) => {
      return el.text === text && el.password === password;
    });

    if (idIndex !== -1) {
      alert("this ID is already registered");
    } else {
      sallersarry.push(obj);
    }
  } else {
    sallersarry.push(obj);
  }

  if (sallersarry.length > 0) {
    localStorage.setItem("sallers", JSON.stringify(sallersarry));
  }
};
