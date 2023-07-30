const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();
  const { elements } = loginForm;
  const values = {};
  if (elements.password.value === "" || elements.email.value === "") {
    alert("Заповніть всі поля ");
  } else {
    values.email = elements.email.value;
    values.password = elements.password.value;
    console.log(values);
    loginForm.reset();
  }
}
