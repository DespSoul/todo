export default class Section{
  constructor(item){
    this._item = item;
    this._sectionSelector = document.querySelector(".task__elements");
  }

  addItem(task){
    this._sectionSelector.prepend(task)
  }
}