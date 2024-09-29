function formValidation(form) {
  let inputs = document.getElementsByTagName("input");
  let textareas = document.getElementsByTagName("textarea");
  isValidInput = true;

  for (let input of inputs) {
    if (form === "left") {
      for (let textarea of textareas) {
        if (textarea.value.trim() === "") {
          isValidInput = false;
        }
      }
      if (input.id !== "emailSignup" && input.value.trim() === "") {
        isValidInput = false;
      }
    } else if (form === "right") {
      if (input.id === "emailSignup" && input.value.trim() === "") {
        isValidInput = false;
      }
    }
  }
  return isValidInput;
} //end for

function showValidationError(element) {
  element.style.borderBottom = "2px solid red";
}

function confirmSignup() {
  if (formValidation("right")) {
    alert("Successfully Signed Up!");
  } else {
    alert("Please fill out the email field");
    showValidationError(document.querySelector("#emailSignup"));
  }
}

function confirmSubmission() {
  console.log(formValidation("left"));
  if (formValidation("left")) {
    alert("Successfully Submitted!");
  } else {
    alert("Please fill out the required fields");
    showValidationError(document.querySelector("#name"));
    showValidationError(document.querySelector("#email"));
    showValidationError(document.querySelector("#message"));
  }
}

document.getElementById("signup").addEventListener("click", confirmSignup);
document.getElementById("submit").addEventListener("click", confirmSubmission);
