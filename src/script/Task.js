export default class Task {
  static dragged = null;
  constructor(inputSelector, templateSelector, counterTask ) {
    this._inputElement = document.querySelector(inputSelector);
    this._templateSelector = templateSelector;
    this._counterTask = counterTask;
  }

  _templateElement() {
    const taskElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".task__element")
      .cloneNode(true);
    return taskElement;
  }

  createElement() {
    this._elementContent = this._templateElement();
    this._taskText = this._elementContent.querySelector(".task__title");
    this._buttonDeleteTask = this._elementContent.querySelector(
      ".task__button-delete"
    );

    this._taskToggleCompleted =
      this._elementContent.querySelector(".task__control");

    this._setEventListeners();

    this._taskText.textContent = this._inputElement.value;
    return this._elementContent;
  }

  _CompletedTaskToggle(e) {
    e.preventDefault();
    this._taskToggleCompleted.classList.toggle("task__control_completed");
  }

  _clickRemoveTask() {
    this._elementContent.remove();
  }

  _dragStart(evt) {
    Task.dragged = evt.target.closest(".task__element");
  }

  _dragOver(evt) {
    evt.preventDefault();
  }

  _dragDrop(evt) {
    const taskDrop = evt.target.closest(".task__element");
    const marker = document.createElement("span");
    const { top, bottom } = taskDrop.getBoundingClientRect();
    if ((top + bottom) / 2 < evt.y) {
      taskDrop.after(marker);
    } else {
      taskDrop.before(marker);
    }
    marker.replaceWith(Task.dragged);
  }

  _setEventListeners() {
    this._buttonDeleteTask.addEventListener("click", () => {
      this._clickRemoveTask();
      this._counterTask();
    });
    this._elementContent.addEventListener("dragstart", (e) =>
      this._dragStart(e)
    );
    this._taskToggleCompleted.addEventListener("click", (e) =>
      this._CompletedTaskToggle(e)
    );
    this._elementContent.addEventListener("dragover", (e) => this._dragOver(e));
    this._elementContent.addEventListener("drop", (e) => this._dragDrop(e));
  }
}
