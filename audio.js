function attachClickHandler(buttonId, soundFile) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
      const audio = new Audio(soundFile);
      audio.play();
    });
  }
  
  attachClickHandler("clickButton1", "click.mp3");
  attachClickHandler("clickButton2", "click.mp3");
  attachClickHandler("clickButton3", "click.mp3");
  attachClickHandler("clickButton4", "click.mp3");
  attachClickHandler("clickButton5", "click.mp3");
  attachClickHandler("clickButton6", "click.mp3");
  attachClickHandler("clickButton7", "click.mp3");
  attachClickHandler("clickButton8", "click.mp3");
  attachClickHandler("clickButton9", "click.mp3");
  attachClickHandler("clickButton0", "click.mp3");
  attachClickHandler("clickButtonc", "remove.mp3");
  attachClickHandler("clickButton+", "click.mp3");
  attachClickHandler("clickButton-", "click.mp3");
  attachClickHandler("clickButton*", "click.mp3");
  attachClickHandler("clickButton/", "click.mp3");
  attachClickHandler("clickButtond", "delete.mp3");
  attachClickHandler("clickButton=", "barazi.mp3");