function convertir() {
  const centimetros = document.getElementById('centimetros').value;
  const resultado = document.getElementById('resultado');

  if (centimetros === "") {
    resultado.innerText = "Por favor, ingrese un valor.";
    return;
  }

  const metros = centimetros / 100;
  resultado.innerText = `${centimetros} cm = ${metros.toFixed(2)} m`;
}