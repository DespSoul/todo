export default class Sorting {
  constructor(buttonAll, buttonUnfulfilled, buttonCompleted, elementClass) {
    this._buttonAll = document.querySelector(buttonAll);
    this._buttonUnfulfilled = document.querySelector(buttonUnfulfilled);
    this._buttonCompleted = document.querySelector(buttonCompleted);
    this._elementClass = elementClass;
  }

  _arrayElements(){
    this._elements = document.querySelectorAll(".task__element");
  }

  _sortingAll() {
    this._elements.forEach((element) => {
      element.classList.remove("task__element_hide");
    });
  }

  _sortingUnfulfilled() {
    this._arrayElements()
    this._elements.forEach((element) => {
      const _toggleControl = element.querySelector(".task__control");
      if (_toggleControl.classList.contains("task__control_completed")) {
        element.classList.add("task__element_hide");
      } else {
        element.classList.remove("task__element_hide");
      }
    });
  }

  _sortingCompleted() {
    this._arrayElements()
    this._elements.forEach((element) => {
      const _toggleControl = element.querySelector(".task__control");
      if (!_toggleControl.classList.contains("task__control_completed")) {
        element.classList.add("task__element_hide");
      } else {
        element.classList.remove("task__element_hide");
      }
    });
  }

  setEventListeners() {
    this._buttonAll.addEventListener("click", () => {
      this._sortingAll();
    });
    this._buttonUnfulfilled.addEventListener("click", () => {
      this._sortingUnfulfilled();
    });
    this._buttonCompleted.addEventListener("click", () => {
      this._sortingCompleted();
    });
  }
}
