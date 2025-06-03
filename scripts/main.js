document.getElementById("mood-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const mood = document.getElementById("mood").value;
  const comment = document.getElementById("comment").value;

  if (!mood) return;

  const entry = {
    id: generateRandomId(),
    mood,
    comment,
    timestamp: new Date().toISOString(),
  };

  // Сохраняем в LocalStorage временно
  let moodData = JSON.parse(localStorage.getItem("moodData")) || [];
  moodData.push(entry);
  localStorage.setItem("moodData", JSON.stringify(moodData));

  document.getElementById("mood-feedback").textContent =
    "Настроение сохранено!";

  // Сброс формы
  document.getElementById("mood-form").reset();
});

// Генерация случайного ID (для анонимного пользователя или записи)
function generateRandomId() {
  return "id-" + Math.random().toString(36).substr(2, 9);
}
