console.log('this is going to be an amazing app');

const NO_OF_ROWS = 6;
const NO_OF_COLUMNS = 5;
const body = document.body;

createBlocksContainer();
function createBlocksContainer() {
  addBox('div', body, 'rows-container', createRows)
}

function createRows(containerDiv) {
  addBox('div', containerDiv, 'row', createColumns);
}

function createColumns(rowDiv) {
  addBox('div', rowDiv, 'column');
}

function addBox(elem, parentElem, elemClass, callBackFun) {
  const div = document.createElement(elem);
  div.classList.add(elemClass);
  callBackFun?.(div);
  parentElem.appendChild(div);
}