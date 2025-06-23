const content = document.getElementById("exerciseContent");

function showExercise(type) {
  let html = "";

  switch (type) {
    case "breathing":
      html = `
        <div class="breathing-container">
  <h3>Дыхательное упражнение «Квадрат»</h3>

  <div class="circle-animation"></div>

  <p><strong>Инструкция:</strong></p>
  <div class="step-description">
    <p>1. Примите удобное положение — сидя или лёжа. Закройте глаза или сфокусируйте взгляд.<br>
    2. Вдохните через нос на 4 счёта.<br>
    3. Задержите дыхание на 4 счёта.<br>
    4. Медленно выдохните через рот на 4 счёта.<br>
    5. Задержите дыхание после выдоха ещё на 4 счёта.<br>
    6. Повторите цикл 4–6 раз.</p>
  </div>

  <p><strong>Зачем это нужно:</strong></p>
  <div class="step-description">
    <ul>
      <li>Снижает стресс и тревожность</li>
      <li>Улучшает концентрацию</li>
      <li>Стабилизирует эмоциональный фон</li>
      <li>Регулирует сердцебиение и дыхание</li>
      <li>Подходит для людей с депрессией и БАР</li>
    </ul>
  </div>

  <p style="text-align:center; margin-top: 20px;"><em>Синхронизируйте дыхание с анимацией круга выше: вдох – пауза – выдох – пауза.</em></p>
</div>`;
      break;

    case "grounding":
      html = `
        <div class="grounding-container">
  <h3>Заземление (5–4–3–2–1)</h3>

  <p><strong>Что делать:</strong></p>
  <div class="step-description">
    <ul>
      <li><strong>5</strong> предметов, которые вы видите</li>
      <li><strong>4</strong> звука, которые вы слышите</li>
      <li><strong>3</strong> вещи, которых вы можете коснуться</li>
      <li><strong>2</strong> запаха, которые вы ощущаете</li>
      <li><strong>1</strong> вкус, который вы чувствуете</li>
    </ul>
  </div>

  <p><strong>Зачем это нужно:</strong></p>
  <div class="step-description">
    <ul>
      <li>Помогает при тревоге, панике и диссоциации</li>
      <li>Возвращает в «здесь и сейчас»</li>
      <li>Переключает внимание с тревожных мыслей</li>
      <li>Успокаивает нервную систему</li>
      <li>Улучшает осознанность</li>
    </ul>
  </div>

  <p class="grounding-note">Не торопитесь — дайте себе время на каждый шаг.<br> Делайте упражнение вслух, про себя или записывая в блокнот.</p>
</div>`;
      break;

    case "stretching":
      html = `
        <h3>Растяжка тела</h3>
        <p>1. Медленно вытянитесь вверх руками.<br>
        2. Повернитесь вправо, затем влево.<br>
        3. Поверните шею влево и вправо.<br>
        4. Потянитесь к пальцам ног.<br>
        5. Дышите глубоко всё время.</p>`;
      break;
  }

  content.innerHTML = html;
}
