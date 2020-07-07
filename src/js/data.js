import Task from './task';

export default class ArrData {
  constructor() {
    this.tasks = [];
  }

  addTask(name) {
    this.tasks.push(new Task(this.tasks.length, name));
  }
}
