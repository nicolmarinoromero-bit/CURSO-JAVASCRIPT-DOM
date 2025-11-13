function convertir() {
  const celsius = document.getElementById('celsius').value;
  const resultado = document.getElementById('resultado');

  if (celsius === "") {
    resultado.innerText = "Por favor, ingrese un valor.";
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  resultado.innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}