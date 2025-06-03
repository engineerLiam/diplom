const moodListEl = document.getElementById("moodList");
const moodData = JSON.parse(localStorage.getItem("moodData")) || [];

if (moodData.length === 0) {
  moodListEl.innerHTML = "<li>Пока нет записей настроения.</li>";
} else {
  moodData.forEach((entry) => {
    const li = document.createElement("li");
    const date = new Date(entry.timestamp).toLocaleString();
    li.textContent = `${date} — ${entry.mood}${
      entry.comment ? ": " + entry.comment : ""
    }`;
    moodListEl.appendChild(li);
  });

  renderChart(moodData);
}

function renderChart(data) {
  const ctx = document.getElementById("moodChart").getContext("2d");

  const labels = data.map((entry) =>
    new Date(entry.timestamp).toLocaleDateString()
  );
  const moods = data.map((entry) => moodToValue(entry.mood));

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Настроение",
          data: moods,
          borderColor: "#388e3c",
          backgroundColor: "rgba(56, 142, 60, 0.1)",
          tension: 0.3,
          fill: true,
          pointRadius: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          suggestedMin: 1,
          suggestedMax: 5,
          ticks: {
            stepSize: 1,
            callback: (value) => valueToMood(value),
          },
        },
      },
    },
  });
}

function moodToValue(mood) {
  switch (mood) {
    case "Отлично":
      return 5;
    case "Хорошо":
      return 4;
    case "Нормально":
      return 3;
    case "Плохо":
      return 2;
    case "Ужасно":
      return 1;
    default:
      return 0;
  }
}

function valueToMood(value) {
  switch (value) {
    case 5:
      return "Отлично";
    case 4:
      return "Хорошо";
    case 3:
      return "Нормально";
    case 2:
      return "Плохо";
    case 1:
      return "Ужасно";
    default:
      return "";
  }
}
