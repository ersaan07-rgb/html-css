// Дополнительное задание: сообщение при нажатии на кнопку «Купить»
const buyBtn = document.getElementById("buyBtn");

buyBtn.addEventListener("click", function () {
  alert("Товар «Беспроводные наушники» добавлен в корзину!");
  buyBtn.textContent = "В корзине ✓";
  buyBtn.classList.add("bought");
});
