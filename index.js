const NO_OF_ROWS = 6;
const NO_OF_COLUMNS = 5;
const body = document.body;
const arrLetters = [
  ['q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p'],
  ['a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l'],
  ['enter',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    'back']
]

createElementsDynamically();

// functions

function createElementsDynamically() {
  createBlocksContainer();
  createKeysLayout();
}

function createKeysLayout() {
  addBox('div', body, 'keys-container', createKeysRow)
}

function createBlocksContainer() {
  addBox('div', body, 'rows-container', createRows)
}

function createRows(containerDiv) {
  for (let i = 1; i <= NO_OF_ROWS; i++) {
    addBox('div', containerDiv, `row`, createColumns);
  }
}

function createColumns(rowDiv) {
  for (let i = 1; i <= NO_OF_COLUMNS; i++) {
    addBox('div', rowDiv, `col`);
  }
}

function createKeysRow(parentElem) {
  arrLetters.forEach((letterRow, index) => {
    const keyboardRow = addBox('div', parentElem, 'keyboard-row');
    createKeys(keyboardRow, arrLetters[index]);
  })
}

function createKeys(parentRowElem, letterRow) {
  letterRow.forEach(letter => {
    const div = addBox('div', parentRowElem, 'letter')
    div.dataset['val'] = letter;
    div.textContent = letter;
  });
}

function addBox(elem, parentElem, elemClass, callBackFun) {
  const div = document.createElement(elem);
  div.classList.add(elemClass);
  callBackFun?.(div);
  parentElem.appendChild(div);
  return div;
}
