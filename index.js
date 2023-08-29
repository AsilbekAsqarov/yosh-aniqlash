const input = document.getElementById("input");
const txt = document.getElementById("txt");

const now = new Date();
const yil = now.getFullYear();
let test = yil - 1996;
input.placeholder = `${test} yoki 1996 yozing !`;

input.addEventListener("input", (e) => {
  e.preventDefault
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
});
