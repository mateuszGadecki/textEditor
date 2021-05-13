import { DOMstrings } from "./Modules/base.js";
import {
  addBullets,
  addBulletOnEnter,
  removeBullets,
} from "./Modules/bulletPoints.js";
import { download, upload } from "./Modules/fileHandlers.js";

// Toggling between the active class
const clickHandler = (btn, activeClass, effectClass) => {
  btn.addEventListener("click", function () {
    if (this.classList.contains(activeClass)) {
      this.classList.remove(activeClass);
      DOMstrings.board.classList.remove(effectClass);
    } else {
      this.classList.add(activeClass);
      DOMstrings.board.classList.add(effectClass);
    }
  });
};

clickHandler(
  DOMstrings.boldBtn,
  "controls__btn--active",
  "board__textarea--bold"
);
clickHandler(
  DOMstrings.italicBtn,
  "controls__btn--active",
  "board__textarea--italic"
);

// Toggling between bulletsBtn class, calling a function that adds/removes bulletPoints
DOMstrings.bulletsBtn.addEventListener("click", function () {
  if (this.classList.contains("controls__btn--active")) {
    this.classList.remove("controls__btn--active");
    removeBullets();
  } else {
    this.classList.add("controls__btn--active");
    addBullets();
    addBulletOnEnter();
  }
});

// Calling a function that saves a file with text and text style in json format
DOMstrings.downloadBtn.addEventListener(
  "click",
  function () {
    let [bold, italic] = [false, false];
    DOMstrings.boldBtn.classList.contains("controls__btn--active")
      ? (bold = true)
      : (bold = false);
    DOMstrings.italicBtn.classList.contains("controls__btn--active")
      ? (italic = true)
      : (italic = false);
    const details = {
      content: DOMstrings.board.value,
      bold: bold,
      italic: italic,
    };
    const jsonDetails = JSON.stringify(details);
    download("data.json", jsonDetails);
  },
  false
);

// Calling a function that reads a file placed by the user
DOMstrings.fileInput.addEventListener("change", function () {
  upload(this);
});

// Functions that allow to change the default appearance of the input type ='file'
DOMstrings.customBtn.addEventListener("click", () => {
  DOMstrings.realInputBtn.click();
});

DOMstrings.realInputBtn.addEventListener("change", () => {
  DOMstrings.realInputBtn.value
    ? (DOMstrings.customText.innerHTML = DOMstrings.realInputBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
      )[1])
    : (DOMstrings.customText.innerHTML = "Nie wybrano pliku");
});
