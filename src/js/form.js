/* eslint-disable no-restricted-syntax */
export default class DisplayForm {
  constructor() {
    this.divPinned = document.getElementById('pinned');
    this.divAllTasks = document.getElementById('all-tasks');
  }

  redrawTasks(arrTasks) {
    this.divPinned.innerHTML = '';
    this.divAllTasks.innerHTML = '';

    const havePinned = arrTasks.some((item) => item.pinned);

    const haveTask = arrTasks.every((item) => item.pinned);

    if (!havePinned) {
      this.divPinned.innerHTML = '<p>No Pinned Tasks</p>';
    }

    if (haveTask) {
      this.divAllTasks.innerHTML = '<p>No Tasks Found</p>';
    }

    for (const item of arrTasks) {
      const itemTask = document.createElement('div');
      itemTask.className = 'item-task';
      itemTask.dataset.id = item.id;
      itemTask.innerHTML = `
        <p>${item.name}</p>
        <div class="checked">${item.pinned ? 'V' : ''}</div>
        `;

      if (item.pinned) {
        this.divPinned.appendChild(itemTask);
      } else {
        this.divAllTasks.appendChild(itemTask);
      }
    }
  }
}
