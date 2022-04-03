const MAX_NO_OF_ROWS = 6;
const MAX_NO_OF_COLUMNS = 5;
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
addRequiredEventListeners();
let CURRENT_ROW_INDEX = 0; // also check if already available. set from there
let CURRENT_COL_INDEX = 0; // also check if already available. set from there

let CURRENT_CELL = getCell(CURRENT_ROW_INDEX, CURRENT_COL_INDEX);



// TODO: below code just for testing; remove later on
// const colElem = document.querySelectorAll('.col');
// colElem.forEach(x => x.textContent = 'M');
// const firstRow = document.querySelector('.row');
// const arrCol = firstRow.querySelectorAll('.col');
// arrCol.forEach((x, i) => {
//   setTimeout(() => {

//     x.classList.add('flip');
//     x.classList.add(i % 2 == 0 ? 'correct' : 'present');
//   }, 1200 * i)
// })




// functions

function applyClassToElemForXTime(selector, className, duration, messageData) {
  let elem = document.querySelector(selector);
  if (!elem) return;
  messageData && (elem.dataset.message = messageData);
  elem.classList.add(className);
  setTimeout(() => {
    elem.classList.remove(className);
    messageData && (elem.dataset.message = '');
  }, duration);
}

function getCell(nthRow, nthCol) {
  if (nthRow > MAX_NO_OF_ROWS || nthCol > MAX_NO_OF_COLUMNS) return;
  let row = document.querySelectorAll('.row')[nthRow];
  let col = row.querySelectorAll('.col')[nthCol];
  return col;
}

function goToNextRow() {
  if (CURRENT_ROW_INDEX < MAX_NO_OF_ROWS) {
    CURRENT_ROW_INDEX++;
    CURRENT_COL_INDEX = 0;
    CURRENT_CELL = getCell(CURRENT_ROW_INDEX, CURRENT_COL_INDEX);
  }
}

function goToNextColumn() {
  if (CURRENT_COL_INDEX < MAX_NO_OF_COLUMNS) {
    CURRENT_COL_INDEX++;
    CURRENT_CELL = getCell(CURRENT_ROW_INDEX, CURRENT_COL_INDEX);
  }
}

function goToPrevColumn() {
  if (CURRENT_COL_INDEX > 0) {
    CURRENT_COL_INDEX--;
    CURRENT_CELL = getCell(CURRENT_ROW_INDEX, CURRENT_COL_INDEX);
  }
}

function setCurrentCellText(val) {
  if (CURRENT_COL_INDEX < MAX_NO_OF_COLUMNS) {
    CURRENT_CELL.textContent = val;
  }
}

function deleteText() {
  goToPrevColumn();
  setCurrentCellText('');
}

function processEnterClick() {
  // TODO: validate
  if (CURRENT_COL_INDEX < MAX_NO_OF_COLUMNS) {
    applyClassToElemForXTime('.rows-container', 'message', 1000, 'not enough letters');
    return;
  }

  if (CURRENT_ROW_INDEX < (MAX_NO_OF_ROWS - 1)) {
    goToNextRow();
  }
  else {
    alert('game over');
  }
  // TODO: save in LS
}

function processKeyPressOrClick(val) {
  if (isEnterKey(val)) {
    processEnterClick();
    return;
  }
  if (isBackOrDelete(val)) {
    deleteText();
    return;
  }
  setCurrentCellText(val);
  goToNextColumn();
}

function addRequiredEventListeners() {
  // for mouse clicks or taps
  let keyBtnList = document.querySelectorAll('.letter');
  keyBtnList.forEach(keyBtn => {
    keyBtn.addEventListener('click', (e) => {
      console.log(e.target.dataset.val.toUpperCase());
      let val = e.target.dataset.val.toUpperCase();
      processKeyPressOrClick(val);
    });
  })

  // for key presses
  document.addEventListener('keydown', (e) => {
    if (isValidKeyPressed(e.key.toUpperCase())) {
      console.log(e.key.toUpperCase());
      let val = e.key.toUpperCase();
      processKeyPressOrClick(val);
    }
  })
}

function isValidKeyPressed(val) {
  let isValidAlphabet = isAlphabet(val);
  let isEnterBackOrDeleteKey = isEnterBackOrDelete(val);
  return isValidAlphabet || isEnterBackOrDeleteKey;
}

function isEnterBackOrDelete(key) {
  return isEnterKey(key) || isBackOrDelete(key);
}

function isBackOrDelete(key) {
  return key === "BACKSPACE" || key === "BACK" || key === "DELETE";
}

function isEnterKey(key) {
  return key === "ENTER";
}

function isAlphabet(val) {
  return /^[a-z]$/i.test(val)
}

function isUpperCaseAlphabet() {
  return (e.keyCode >= 65 && e.keyCode <= 90);
}

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
  for (let i = 0; i < MAX_NO_OF_ROWS; i++) {
    addBox('div', containerDiv, `row`, createColumns);
  }
}

function createColumns(rowDiv) {
  for (let i = 0; i < MAX_NO_OF_COLUMNS; i++) {
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
