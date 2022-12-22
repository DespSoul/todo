export default class Task {
  constructor(text, templateSelector) {
    this._text = text;
    this._templateSelector = templateSelector;
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
    this._buttonDeleteTask = this._elementContent.querySelector(".task__button-delete");
    this._setEventListeners();
    
    this._taskText.textContent = this._text.textContent;

    return this._elementContent;
  }

  _clickRemoveTask(){
    this._elementContent.remove()
  }

  _setEventListeners() {
    this._buttonDeleteTask.setEventListeners("click", () => this._clickRemoveTask());
  }
}
