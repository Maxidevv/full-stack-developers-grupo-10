document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("jh-contact-form");
  const successMessage = document.getElementById("jh-success-message");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");

    limpiarErrores();

    let esValido = true;

    if (nombreInput.value.trim() === "") {
      mostrarError("error-nombre", "Por favor, ingresá tu nombre completo.");
      marcarInputInvalido(nombreInput);
      esValido = false;
    }

    const emailValor = emailInput.value.trim();
    if (emailValor === "") {
      mostrarError("error-email", "Por favor, ingresá tu correo electrónico.");
      marcarInputInvalido(emailInput);
      esValido = false;
    } else if (!validarEmail(emailValor)) {
      mostrarError("error-email", "Ingresá un correo electrónico válido.");
      marcarInputInvalido(emailInput);
      esValido = false;
    }

    if (mensajeInput.value.trim() === "") {
      mostrarError("error-mensaje", "Por favor, escribí un mensaje.");
      marcarInputInvalido(mensajeInput);
      esValido = false;
    }

    if (esValido) {
      form.reset();
      form.style.display = "none";
      successMessage.style.display = "block";
    }
  });

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function mostrarError(elementId, mensaje) {
    const errorSpan = document.getElementById(elementId);
    if (errorSpan) {
      errorSpan.textContent = mensaje;
      errorSpan.style.display = "block";
    }
  }

  function marcarInputInvalido(input) {
    input.classList.add("jh-form__input--error");
  }

  function limpiarErrores() {
    const errores = document.querySelectorAll(".jh-form__error");
    errores.forEach((error) => {
      error.textContent = "";
      error.style.display = "none";
    });

    const inputs = document.querySelectorAll(
      ".jh-form__input, .jh-form__textarea",
    );
    inputs.forEach((input) => {
      input.classList.remove("jh-form__input--error");
    });
  }
});
