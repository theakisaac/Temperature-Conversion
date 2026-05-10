const btn = document.querySelector(".btn");
const message = document.querySelector(".message");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  tempConvert();
});

function tempConvert() {
  const inputBox = Number(document.getElementById("input-box").value);
  const Cel2Fah = document.getElementById("Cel2Fah").checked;
  const Fah2Cel = document.getElementById("Fah2Cel").checked;
  const Cel2FahCalculation = inputBox * (9 / 5) + 32;
  const Fah2CelCalculation = (inputBox - 32) * (5 / 9);

  if (!Cel2Fah && !Fah2Cel) {
    message.textContent = "Kindly select a conversion type";
    return;
  }
  if (inputBox === "") {
    message.textContent = `Please enter a valid number.`;
    return;
  }

  if (Cel2Fah) {
    message.textContent = `${Cel2FahCalculation} \u2109`;
    return;
  }

  if (Fah2Cel) {
    message.textContent = `${Fah2CelCalculation} \u2103`;
    return;
  }
  message.textContent = `Please enter a valid number.`;
}
