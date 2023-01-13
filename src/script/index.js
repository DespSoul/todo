import Task from "./Task.js";
import Section from "./Section.js";
import Counter from "./Counter.js";
import Sorting from "./Sorting.js";
import { formCreateTask, inputFormElement } from "./const.js";


  const sorting = new Sorting(
    ".navigation__button-all",
    ".navigation__button-unfulfilled",
    ".navigation__button-completed",
    ".task__element"
  );
  sorting.setEventListeners()

const counter = new Counter(".task__elements", ".task__number");
const section = new Section(createTask());

function createTask() {
  const task = new Task(
    ".element__input-form",
    ".task__element-template",
    () => {
      counter.counterElement();
    }
  );
  return task.createElement();
}

formCreateTask.addEventListener("submit", (e) => {
  e.preventDefault();
  section.addItem(createTask());
  counter.counterElement();
  inputFormElement.value = " ";
});

