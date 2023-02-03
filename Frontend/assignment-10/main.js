const bookmarkName = document.getElementById("bookmarkname");
const siteURL = document.getElementById("siteurl");
const form = document.getElementById("form");
const nameError = document.getElementById("nameError");
const urlError = document.getElementById("urlError");
const requiredError = document.getElementById("requiredError");
const tableBody = document.getElementById("tableBody");

const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

form.addEventListener("submit", addNewBookmark);
bookmarkName.addEventListener("input", validateInput);
siteURL.addEventListener("input", validateInput);

function addNewBookmark(e) {
  e.preventDefault();
  if (bookmarkName.validate && siteURL.validate) {
    const userInputs = {
      name: bookmarkName.value,
      url: siteURL.value,
    };
    bookmarks.unshift(userInputs);
    renderUI();
    updateInLocalStorage();
    clearInputs();
    return;
  }
  checkAllInputs();
}
function updateInLocalStorage() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
function renderUI() {
  let temp = "";
  bookmarks.forEach((book, i) => {
    temp += `
        <tr>
            <td>${book.name}</td>
            <td>${book.url}</td>
            <td>
            <a href="${book.url}" target="_blank" class="btn btn-primary btn-sm"
                >Visit</a
            >
            <button class="btn btn-danger btn-sm deleteBookmark" onclick="deleteBookmark(${i})">Delete</button>
            </td>
        </tr>
    `;
  });
  tableBody.innerHTML = temp;
}
function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  updateInLocalStorage();
  renderUI();
}
function checkAllInputs() {
  const inputs = [...form.elements];
  inputs.forEach((input) => {
    const id = input.id;
    if (id && !input.validate) {
      const _input = document.getElementById(id).nextElementSibling;
      _input.classList.remove("d-none");
      _input.classList.add("d-block");
    }
  });
}
function validateInput() {
  const regsx = {
    name: /^[A-z]+$/,
    url: /^http[s]?(:\/\/)www\.[A-z]{3,}\.[A-z]{2,3}$/,
  };
  const mesError = this.name === "name" ? nameError : urlError;
  const validate = regsx[this.name].test(this.value);
  const setStyle = validate ? "d-none" : "d-block";
  mesError.classList.remove("d-none");
  mesError.classList.add(setStyle);
  this.validate = validate;
}
function clearInputs() {
  bookmarkName.value = siteURL.value = "";
  bookmarkName.validate = siteURL.validate = false;
}

// Invoke functions
renderUI();
