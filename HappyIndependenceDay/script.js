let countdown = (number, callback) => {
    let displayElement = document.getElementById("countdown");
    let updateDisplay = () => {
      displayElement.innerHTML = number;
    };
    let nextCountdown = () => {
      if (number > 0) {
        updateDisplay();
        number--;
        setTimeout(nextCountdown, 1000);
      } else {
        updateDisplay();
        setTimeout(callback, 1000);
      }
    };
    nextCountdown();
  };
  let happyIndependenceDay = () => {
    let displayElement = document.getElementById("countdown");
    displayElement.innerHTML = "Happy Independence Day";
  };
  countdown(10, happyIndependenceDay);
  