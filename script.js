// Дополнительное задание: по нажатию на кнопку выводим сообщение пользователю
const button = document.getElementById("contactBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "Спасибо! Напишите мне на example@mail.com — я отвечу как можно скорее.";
  alert("Спасибо за интерес! Я скоро с вами свяжусь.");
});
