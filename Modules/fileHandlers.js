import { DOMstrings } from "./base.js";

// Download file handler
export function download(filename, text) {
  const el = document.createElement("a");
  el.style.display = "none";
  el.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  el.setAttribute("download", filename);
  document.body.appendChild(el);
  el.click();
  document.body.removeChild(el);
}

// Upload file handler, fetching content from a user-uploaded json file
export function upload(uploader) {
  const reader = new FileReader();
  reader.readAsText(uploader.files[0], "UTF-8");
  reader.onload = function (event) {
    const response = JSON.parse(event.target.result);
    response.bold === true ? addStyles(DOMstrings.boldBtn, "bold") : null;
    response.italic === true ? addStyles(DOMstrings.italicBtn, "italic") : null;
    DOMstrings.board.value = response.content || event.target.result;
  };
  reader.onerror = function () {
    alert("Błąd wczytywania pliku!");
  };
}

function addStyles(btn, type) {
  btn.classList.add("controls__btn--active");
  DOMstrings.board.classList.add(`board__textarea--${type}`);
}
