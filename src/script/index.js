import Task from "./Task.js";
import Section from "./Section.js";
import Counter from "./Counter.js";
import { formCreateTask } from "./const.js";

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

const counter = new Counter(".task__elements", ".task__number");

const section = new Section(createTask());

formCreateTask.addEventListener("submit", (e) => {
  e.preventDefault();
  section.addItem(createTask());
  counter.counterElement();
});
