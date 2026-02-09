let count = 0;
let disabled = false;

const button_play = document.getElementById("clicker");
const button_speed_boost = document.getElementById("clicker_sp");
const countDisplay = document.getElementById("count");
const button_passive_points = document.getElementById("clicker_pas");
const button_prize_1 = document.getElementById("clicker_prize_1");
const button_prize_2 = document.getElementById("clicker_prize_2");
const button_prize_3 = document.getElementById("clicker_prize_3");
const button_god_mode = document.getElementById("clicker_god_mode");
let spn1 = document.getElementById("span_prize_1");
let spn2 = document.getElementById("span_prize_2");
let spn3 = document.getElementById("span_prize_3");
let spn4 = document.getElementById("span_god_mode");
let text_win = document.getElementById("text_window");

// призы
button_prize_1.addEventListener("click", () => {
  if (count >= 100) {
    count -= 100;
    setTimeout(() => {
      text_win.textContent =
        "Congratulations! You have won the First Special Prize!";
      text_win.style.color = "DarkViolet";
    }, 2000);
    setTimeout(() => {
      text_win.textContent =
        "You will get it in a few seconds (exactly 2 sec)!";
      text_win.style.color = "MediumBlue";
    }, 4000);
    // alert("Congratulations! You have won the First Special Prize!");
    // alert("You will get it in a few seconds (exactly 3)!");
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=ZnfUeVeMKjY";
    }, 6000);
    countDisplay.textContent = count;
    disabled = true;
  } else {
    text_win.textContent =
      "Not enough points to claim the First Special Prize!";
    text_win.style.color = "red";
  }
});

button_prize_2.addEventListener("click", async () => {
  if (disabled) return;

  if (count >= 500) {
    count -= 500;

    text_win.textContent =
      "Congratulations! You have won the Second Special Prize!";
    text_win.style.color = "DarkViolet";
    try {
      const res = await fetch("http://localhost:3000/videos");
      const videos = await res.json();

      if (!videos.length) {
        text_win.textContent = "No videos in DB. Add one via POST /videos";
        text_win.style.color = "red";
        count += 500; // вернули очки назад
        countDisplay.textContent = count;
        return;
      }

      await delay(2000);

      const a = document.createElement("a");
      a.href = `http://localhost:3000/videos/${videos[0]._id}/download`;
      a.click();

      countDisplay.textContent = count;
      disabled = true;
    } catch (e) {
      text_win.textContent =
        "Server error. Check if server is running on :3000";
      text_win.style.color = "red";
      count += 500; // вернули очки назад
      countDisplay.textContent = count;
    }
  } else {
    text_win.textContent =
      "Not enough points to claim the Second Special Prize!";
    text_win.style.color = "red";
  }
});

button_prize_3.addEventListener("click", () => {
  if (count >= 1000) {
    count -= 1000;
    setTimeout(() => {
      text_win.textContent =
        "Congratulations! You have won the Third Special Prize!";
      text_win.style.color = "DarkViolet";
    }, 2000);
    setTimeout(() => {
      text_win.textContent =
        "You will get it in a few seconds (exactly 3 sec)!";
      text_win.style.color = "MediumBlue";
    }, 4000);
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=NBkyth_KT3E";
    }, 7000);
    countDisplay.textContent = count;
    disabled = true;
  } else {
    text_win.textContent =
      "Not enough points to claim the Third Special Prize!";
    text_win.style.color = "red";
  }
});

// флаги (вот это и было нужно)
let button_sp_click = false;
let button_pas_click = false;

button_play.addEventListener("click", () => {
  button_play.classList.remove("blink");
  void button_play.offsetWidth;
  button_play.classList.add("blink");
  if (button_sp_click === true) {
    count += 2;
  } else {
    count++;
  }
  countDisplay.textContent = count;
});

button_speed_boost.addEventListener("click", () => {
  alert("You are trying to activate Special Clicker!");
  alert("You lost 15 but gained 2!");
  let confirmResult = confirm("Are you agree?, yes/no");

  if (confirmResult === true) {
    if (count >= 15) {
      count -= 15;
      button_sp_click = true; // теперь это реально флаг
      countDisplay.textContent = count;
      text_win.textContent = "Speed Boost Clicker Activated!";
      text_win.style.color = "green";
      button_speed_boost.disabled = true; // деактивируем кнопку после нажатия
      button_speed_boost.style.opacity = 0.5; // визуально показываем, что кнопка деактивирована
      button_speed_boost.style.cursor = "not-allowed"; // меняем курсор
      button_speed_boost.title = "Speed Boost Clicker Activated"; // добавляем подсказку
    } else {
      alert("Not enough points to use Special Clicker!");
      return;
    }
  }
});

button_passive_points.addEventListener("click", () => {
  alert("You are trying to activate Passive Clicker!");
  alert("You lost 50 but gained 1 every second!");
  let confirmResult = confirm("Are you agree?, yes/no");

  if (confirmResult === true) {
    if (count >= 50) {
      count -= 50;
      countDisplay.textContent = count;
      button_pas_click = true; // ставим один раз
      setInterval(() => {
        count++;
        countDisplay.textContent = count;
      }, 1000);
      text_win.textContent = "Passive Clicker Activated!";
      text_win.style.color = "yellow";
      button_passive_points.disabled = true; // деактивируем кнопку после нажатия
      button_passive_points.style.opacity = 0.5; // визуально показываем, что кнопка деактивирована
      button_passive_points.style.cursor = "not-allowed"; // меняем курсор
      button_passive_points.title = "Passive Clicker Activated"; // добавляем подсказку
    } else {
      alert("Not enough points to use Passive Clicker!");
      return;
    }
  }
});

button_god_mode.addEventListener("click", () => {
  alert("You are trying to activate God Mode!");
  let confirmResult = confirm("Do you want to turn on the mode?, yes/no");

  if (confirmResult === true) {
    button_play.disabled = true; // деактивируем кнопку после нажатия
    button_play.style.opacity = 0.5; // визуально показываем, что кнопка деактивирована
    button_play.style.cursor = "not-allowed"; // меняем курсор
    button_play.title = "God Mode Activated"; // добавляем подсказку
    button_passive_points.disabled = true; // деактивируем кнопку после нажатия
    button_passive_points.style.opacity = 0.5; // визуально показываем, что кнопка деактивирована
    button_passive_points.style.cursor = "not-allowed"; // меняем курсор
    button_passive_points.title = "God Mode Activated"; // добавляем подсказку
    button_speed_boost.disabled = true; // деактивируем кнопку после нажатия
    button_speed_boost.style.opacity = 0.5; // визуально показываем, что кнопка деактивирована
    button_speed_boost.style.cursor = "not-allowed"; // меняем курсор
    button_speed_boost.title = "God Mode Activated"; // добавляем подсказку
    text_win.textContent = "God Mode Activated! Enjoy infinite points!";
    text_win.style.color = "DeepPink";
    countDisplay.textContent = "∞"; // отображаем бесконечность
    // бесконечные очки
    setInterval(() => {
      count += 1000; // добавляем много очков каждую секунду
      countDisplay.textContent = "∞"; // сохраняем отображение бесконечности
    }, 100);
  }
});

button_prize_1.addEventListener("mouseover", () => {
  spn1.textContent = "Cost: 100 points";
});

button_prize_1.addEventListener("mouseout", () => {
  spn1.textContent = "Click me to get first special prize";
});

button_prize_2.addEventListener("mouseover", () => {
  spn2.textContent = "Cost: 500 points";
});

button_prize_2.addEventListener("mouseout", () => {
  spn2.textContent = "Click me to get second special prize";
});

button_prize_3.addEventListener("mouseover", () => {
  spn3.textContent = "Cost: 1000 points";
});

button_prize_3.addEventListener("mouseout", () => {
  spn3.textContent = "Click me to get third special prize";
});

button_god_mode.addEventListener("mouseover", () => {
  spn4.textContent = "Activate God Mode! = It is free!";
});

button_god_mode.addEventListener("mouseout", () => {
  spn4.textContent = "Turn on the God Mode";
});

// уведомления о достижениях

if (count === 100) {
  alert(
    "You have earned 100 points! You can activate your First Special Prize!",
  );
}
if (count === 500) {
  alert(
    "You have earned 500 points! You can activate your Second Special Prize!",
  );
}
if (count === 1000) {
  alert(
    "You have earned 1000 points! You can activate your Third Special Prize!",
  );
}
