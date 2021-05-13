import { DOMstrings } from "./Modules/base.js";
import {
  addBullets,
  addBulletOnEnter,
  removeBullets,
} from "./Modules/bulletPoints.js";

// Switching between the active class
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
