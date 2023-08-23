const input = document.getElementById("input");
const txt = document.getElementById("txt");
const button = document.querySelector("button");

const now = new Date();
const yil = now.getFullYear();
let test = yil - 1996;
input.placeholder = `${test} yoki 1996 yozing !`;

const baza = () => {
  let korsat = input.value;
  let natija = yil - Number(korsat);
  if (korsat == 0) {
    txt.innerHTML = `<b>Iltimos yoshingizni yoki tug'ilgan yilingizni yozing !</b>`;
  } else if (korsat > yil) {
    txt.innerHTML = `<b>${korsat} lar hali tug'ilmadi ku...</b>`;
  } else if (korsat == yil) {
    txt.innerHTML = `<b>${korsat} lar tug'ilish jarayonida</b>`;
  } else if (natija > 999) {
    txt.innerHTML = `<b>Siz tug'ilgan yil ${natija}</b>`;
  } else if (natija < 999) {
    txt.innerHTML = `<b>Sizning yoshingiz</b> ${natija} <b>da</b>`;
  } else {
    txt.innerHTML = `<b>Iltimos tekst yozmang !</b>`;
  }
  setTimeout(() => {
    txt.innerHTML = "";
    input.value = "";
  }, 8000);
};
button.addEventListener("click", () => {
  baza();
});
document.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    baza();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.which == 8) {
    txt.innerHTML = "";
  }
});
