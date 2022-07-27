let numero1 = 0;
let numero2 = 0;

document.getElementById("primerNumero").textContent = numero1;

document.getElementById("segundoNumero").textContent = numero2;

let resultadoCuenta = document.getElementById("resultado");

const sumar = () => (resultadoCuenta.textContent = numero1 + numero2);

const multiplicar = () => (resultadoCuenta.textContent = numero1 * numero2);

const dividir = () => (resultadoCuenta.textContent = numero1 / numero2);

const restar = () => (resultadoCuenta.textContent = numero1 - numero2);

const elegir = (numero) => {
  if (document.getElementById("primerNumero").textContent == 0) {
    document.getElementById("primerNumero").textContent = numero;
    numero1 = numero;
  } else {
    document.getElementById("segundoNumero").textContent = numero;
    numero2 = numero;
  }
};

const resetear = () => {
  numero1 = 0;
  numero2 = 0;
  document.getElementById("primerNumero").textContent = 0;
  document.getElementById("segundoNumero").textContent = 0;

  document.getElementById("resultado").textContent = 0;
};
