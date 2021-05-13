import { DOMstrings } from "./base.js";

// Adding a bullets to each line that contains text
export function addBullets() {
  if (DOMstrings.board.value !== "•") {
    const lines = DOMstrings.board.value.split("\n");
    const updatedBoard = lines.map((el) => {
      const line = [...el];
      line.length > 0 && line[0] !== "•" ? line.unshift("•") : null;
      return line.join("");
    });
    DOMstrings.board.value = updatedBoard.join("\n");
  }
}

export function addBulletOnEnter() {
  // Adding a bullet if the board is empty
  DOMstrings.board.value.trim() === "" ? (DOMstrings.board.value = "•") : null;
  // Adding a bullet by pressing the 'Enter' key
  DOMstrings.board.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
      const lines = DOMstrings.board.value.split("\n");
      const lastLine = [...lines[lines.length - 1]];
      lastLine[0] === "•" ? null : (DOMstrings.board.value += "•");
    }
  });
}

// Removing a bullets to each line that contains text
export function removeBullets() {
  const lines = DOMstrings.board.value.split("\n");
  const updatedBoard = lines.map((el) => {
    const line = [...el];
    if (line.length > 0 && line[0] === "•") {
      line.shift();
    }
    return line.join("");
  });
  DOMstrings.board.value = updatedBoard.join("\n");
}
