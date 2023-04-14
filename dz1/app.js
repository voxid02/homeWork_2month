const PassToggle = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };
const PassTogggle = () => {
    const confirmPasswordInput = document.getElementById("confirm_password");
    if (confirmPasswordInput.type === "confirm_password") {
      confirmPasswordInput.type = "text";
    } else {
      confirmPasswordInput.type = "confirm_password";
    }
  };


  const validateForm = () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const passwordRegex = /^[1-9a-zA-Z]{8,}$/;

    if (!emailInput.value.includes("@")) {
      alert("Введите правильный адрес электронной почты, где есть @.");
      return false;
    }

    if (!passwordRegex.test(passwordInput.value)) {
      alert("Неправильный пароль!.");
      return false;
    }else (
        alert("Регистрация успешно выполнена!")
    )

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Подтвердите свой пароль.");
      return false;
    }

    return true;
  };



  const Block = document.getElementById("small-block");
let distance = 0;


function moveBlock() {
  distance += 6;
  Block.style.left = distance + "px";
  if (distance < 510) {
    setTimeout(moveBlock, 100);
  }
}
moveBlock();