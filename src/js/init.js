export default function initialData(arrData) {
  arrData.addTask('Купить хлеб');
  arrData.addTask('Постирать носки');
  arrData.addTask('Погладить кота');

  const [...rest] = arrData.tasks;
  rest[2].pinned = true;
}
