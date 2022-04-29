const MAX_NO_OF_ROWS = 6;
const MAX_NO_OF_COLUMNS = 5;
const displayNone = 'd-none';
const rulesPopupShown = 'RPS';
const PRESENT = -1;
const ABSENT = 0;
const CORRECT = 1;
let FREEZE_SCREEN = false;
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
const arrWrds = [
  'about',
  'above',
  'abuse',
  'actor',
  'acute',
  'admit',
  'adopt',
  'adult',
  'after',
  'again',
  'agent',
  'agree',
  'ahead',
  'alarm',
  'album',
  'alert',
  'alike',
  'alive',
  'allow',
  'alone',
  'along',
  'alter',
  'among',
  'anger',
  'Angle',
  'angry',
  'apart',
  'apple',
  'apply',
  'arena',
  'argue',
  'arise',
  'array',
  'aside',
  'asset',
  'audio',
  'audit',
  'avoid',
  'award',
  'aware',
  'badly',
  'baker',
  'bases',
  'basic',
  'basis',
  'beach',
  'began',
  'begin',
  'begun',
  'being',
  'below',
  'bench',
  'billy',
  'birth',
  'black',
  'blame',
  'blind',
  'block',
  'blood',
  'board',
  'boost',
  'booth',
  'bound',
  'brain',
  'brand',
  'bread',
  'break',
  'breed',
  'brief',
  'bring',
  'broad',
  'broke',
  'brown',
  'build',
  'built',
  'buyer',
  'cable',
  'calif',
  'carry',
  'catch',
  'cause',
  'chain',
  'chair',
  'chart',
  'chase',
  'cheap',
  'check',
  'chest',
  'chief',
  'child',
  'china',
  'chose',
  'civil',
  'claim',
  'class',
  'clean',
  'clear',
  'click',
  'clock',
  'close',
  'coach',
  'coast',
  'could',
  'count',
  'court',
  'cover',
  'craft',
  'crash',
  'cream',
  'crime',
  'cross',
  'crowd',
  'crown',
  'curve',
  'cycle',
  'daily',
  'dance',
  'dated',
  'dealt',
  'death',
  'debut',
  'delay',
  'depth',
  'doing',
  'doubt',
  'dozen',
  'draft',
  'drama',
  'drawn',
  'dream',
  'dress',
  'drill',
  'drink',
  'drive',
  'drove',
  'dying',
  'eager',
  'early',
  'earth',
  'eight',
  'elite',
  'empty',
  'enemy',
  'enjoy',
  'enter',
  'entry',
  'equal',
  'error',
  'event',
  'every',
  'exact',
  'exist',
  'extra',
  'faith',
  'false',
  'fault',
  'fiber',
  'field',
  'fifth',
  'fifty',
  'fight',
  'final',
  'first',
  'fixed',
  'flash',
  'fleet',
  'floor',
  'fluid',
  'focus',
  'force',
  'forth',
  'forty',
  'forum',
  'found',
  'frame',
  'frank',
  'fraud',
  'fresh',
  'front',
  'fruit',
  'fully',
  'funny',
  'giant',
  'given',
  'glass',
  'globe',
  'going',
  'grace',
  'grade',
  'grand',
  'grant',
  'grass',
  'great',
  'green',
  'gross',
  'group',
  'grown',
  'guard',
  'guess',
  'guest',
  'guide',
  'happy',
  'harry',
  'heart',
  'heavy',
  'hence',
  'henry',
  'horse',
  'hotel',
  'house',
  'human',
  'ideal',
  'image',
  'index',
  'inner',
  'input',
  'issue',
  'japan',
  'jimmy',
  'joint',
  'jones',
  'judge',
  'known',
  'label',
  'large',
  'laser',
  'later',
  'laugh',
  'layer',
  'learn',
  'lease',
  'least',
  'leave',
  'legal',
  'level',
  'lewis',
  'light',
  'limit',
  'links',
  'lives',
  'local',
  'logic',
  'loose',
  'lower',
  'lucky',
  'lunch',
  'lying',
  'magic',
  'major',
  'maker',
  'march',
  'maria',
  'match',
  'maybe',
  'mayor',
  'meant',
  'media',
  'metal',
  'might',
  'minor',
  'minus',
  'mixed',
  'model',
  'money',
  'month',
  'moral',
  'motor',
  'mount',
  'mouse',
  'mouth',
  'movie',
  'music',
  'needs',
  'never',
  'newly',
  'night',
  'noise',
  'north',
  'noted',
  'novel',
  'nurse',
  'occur',
  'ocean',
  'offer',
  'often',
  'order',
  'other',
  'ought',
  'paint',
  'panel',
  'paper',
  'party',
  'peace',
  'peter',
  'phase',
  'phone',
  'photo',
  'piece',
  'pilot',
  'pitch',
  'place',
  'plain',
  'plane',
  'plant',
  'plate',
  'point',
  'pound',
  'power',
  'press',
  'price',
  'pride',
  'prime',
  'print',
  'prior',
  'prize',
  'proof',
  'proud',
  'prove',
  'queen',
  'quick',
  'quiet',
  'quite',
  'radio',
  'raise',
  'range',
  'rapid',
  'ratio',
  'reach',
  'ready',
  'refer',
  'right',
  'rival',
  'river',
  'robin',
  'roger',
  'roman',
  'rough',
  'round',
  'route',
  'royal',
  'rural',
  'scale',
  'scene',
  'scope',
  'score',
  'sense',
  'serve',
  'seven',
  'shall',
  'shape',
  'share',
  'sharp',
  'sheet',
  'shelf',
  'shell',
  'shift',
  'shirt',
  'shock',
  'shoot',
  'short',
  'shown',
  'sight',
  'since',
  'sixth',
  'sixty',
  'sized',
  'skill',
  'sleep',
  'slide',
  'small',
  'smart',
  'smile',
  'smith',
  'smoke',
  'solid',
  'solve',
  'sorry',
  'sound',
  'south',
  'space',
  'spare',
  'speak',
  'speed',
  'spend',
  'spent',
  'split',
  'spoke',
  'sport',
  'staff',
  'stage',
  'stake',
  'stand',
  'start',
  'state',
  'steam',
  'steel',
  'stick',
  'still',
  'stock',
  'stone',
  'stood',
  'store',
  'storm',
  'story',
  'strip',
  'stuck',
  'study',
  'stuff',
  'style',
  'sugar',
  'suite',
  'super',
  'sweet',
  'table',
  'taken',
  'taste',
  'taxes',
  'teach',
  'teeth',
  'terry',
  'texas',
  'thank',
  'theft',
  'their',
  'theme',
  'there',
  'these',
  'thick',
  'thing',
  'think',
  'third',
  'those',
  'three',
  'threw',
  'throw',
  'tight',
  'times',
  'tired',
  'title',
  'today',
  'topic',
  'total',
  'touch',
  'tough',
  'tower',
  'track',
  'trade',
  'train',
  'treat',
  'trend',
  'trial',
  'tried',
  'tries',
  'truck',
  'truly',
  'trust',
  'truth',
  'twice',
  'under',
  'undue',
  'union',
  'unity',
  'until',
  'upper',
  'upset',
  'urban',
  'usage',
  'usual',
  'valid',
  'value',
  'video',
  'virus',
  'visit',
  'vital',
  'voice',
  'waste',
  'watch',
  'water',
  'wheel',
  'where',
  'which',
  'while',
  'white',
  'whole',
  'whose',
  'woman',
  'women',
  'world',
  'worry',
  'worse',
  'worst',
  'worth',
  'would',
  'wound',
  'write',
  'wrong',
  'wrote',
  'yield',
  'young',
  'youth'
]

const body = document.body;
let guessedWord = '';
createElementsDynamically();
showRulesPopup();
const SECRET_WORD = getSecretWord()?.toUpperCase();
addRequiredEventListeners();
let CURRENT_ROW_INDEX = 0; // also check if already available. set from there
let CURRENT_COL_INDEX = 0; // also check if already available. set from there

let CURRENT_CELL = getCell(CURRENT_ROW_INDEX, CURRENT_COL_INDEX);

// functions

function getSecretWord() {
  return arrWrds[Math.floor(Math.random() * arrWrds.length)];
}

function applyClassToElementForXTime(element, className, dataObj = {}) {
  if (!element) return Promise.resolve();
  FREEZE_SCREEN = true;
  const { duration = 1000, messageData } = dataObj;
  messageData && (element.dataset.message = messageData);
  element.classList.add(className);
  return new Promise(resolve => {
    setTimeout(() => {
      element.classList.remove(className);
      messageData && (element.dataset.message = '');
      FREEZE_SCREEN = false;
      resolve();
    }, duration);
  })
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
    resetGuessedWord();
    CURRENT_CELL = getCell(CURRENT_ROW_INDEX, CURRENT_COL_INDEX);
  }
}

function resetGuessedWord() {
  guessedWord = '';
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
    if (val) {
      guessedWord += val;
    }
    else {
      guessedWord = guessedWord.slice(0, -1);
    }
  }
}

function deleteText() {
  goToPrevColumn();
  setCurrentCellText('');
}

function verifyEnteredWord() {
  return guessedWord == SECRET_WORD;
}

function showSuccessAnimation() {
  return new Promise((resolve) => {
    for (let i = 0; i < MAX_NO_OF_COLUMNS; i++) {
      FREEZE_SCREEN = true;
      setTimeout(() => {
        let currentCell = getCell(CURRENT_ROW_INDEX, i);
        currentCell.classList.add('success');
        if (i == MAX_NO_OF_COLUMNS - 1) {
          FREEZE_SCREEN = false;
          resolve();
        }
      }, i * 100)
    }
  });
}

function matchEachLetterAndApplyColor() {
  let rowIndex = CURRENT_ROW_INDEX;
  let word = guessedWord;
  let colorArr = [];
  return new Promise((resolve) => {
    for (let i = 0; i < MAX_NO_OF_COLUMNS; i++) {
      FREEZE_SCREEN = true;
      setTimeout(() => {
        let CURRENT_CELL = getCell(rowIndex, i);
        CURRENT_CELL.classList.add('flip');
        if (word[i] == SECRET_WORD[i]) {
          CURRENT_CELL.classList.add('correct');
          colorArr.push(CORRECT);
        }
        else if (SECRET_WORD.includes(word[i])) {
          CURRENT_CELL.classList.add('present');
          colorArr.push(PRESENT);
        }
        else {
          CURRENT_CELL.classList.add('absent');
          colorArr.push(ABSENT);
        }
        if (i == MAX_NO_OF_COLUMNS - 1) {
          colorKeyboard(word, colorArr);
          FREEZE_SCREEN = false;
          resolve();
        }
      }, i * 500)
    }
  });
}

function colorKeyboard(word, colorArr) {
  let colorClass;
  let wordArr = Array.from(word);
  setTimeout(() => {
    wordArr?.forEach((letter, i) => {
      letter = word[i].toLowerCase();
      switch (colorArr[i]) {
        case CORRECT:
          colorClass = 'correct';
          break;
        case PRESENT:
          colorClass = 'present';
          break;
        default:
          colorClass = 'absent';
      }
      colorKeyboardLetter(letter, colorClass);
    })
  }, 600);
}

function colorKeyboardLetter(letter, colorClass) {
  let elem = document.querySelector(`[data-val=${letter}]`)
  elem.classList.add(colorClass);
}

function shouldProceedForMatch() {
  if (CURRENT_COL_INDEX < MAX_NO_OF_COLUMNS) {
    shakeRow();
    showErrorMessage();
    return false;
  }
  return true;
}

function showErrorMessage() {
  let elem = document.querySelector('.rows-container');
  return applyClassToElementForXTime(elem, 'message', { messageData: 'not enough letters' });
}

function showCongratsMessage() {
  let elem = document.querySelector('.rows-container');
  return applyClassToElementForXTime(elem, 'message', { messageData: getMessage() });
}

function revealSecretWord() {
  let elem = document.querySelector('.rows-container');
  return applyClassToElementForXTime(elem, 'message', { messageData: `secret word: ${SECRET_WORD}` });
}

function getMessage() {
  switch (CURRENT_ROW_INDEX) {
    case 0:
      return 'unbelievable!';
    case 1:
      return 'magnificent!';
    case 2:
      return 'impressive!';
    case 3:
      return 'superb!';
    case 4:
      return 'great!';
    case 5:
      return 'cool!';
    default:
      return 'congratulations!';
  }
}

function shakeRow() {
  const elemList = document.querySelectorAll('.row');
  let elem;
  if (elemList && elemList.length > 0) {
    elem = elemList[CURRENT_ROW_INDEX];
  }
  return applyClassToElementForXTime(elem, 'shake');
}

function shakeRowsContainer(){
  setTimeout(() => { 
    const elem = document.querySelector('.rows-container');
    applyClassToElementForXTime(elem, 'shake');
   }, 700)
}

function postColorApplied() {
  if (verifyEnteredWord()) {
    showSuccessAnimation()
    setTimeout(() => {
      showCongratsMessage().then(res => {
        showGameOverPopUp();
      });
    }, 1000)
  }
  else {
    if (CURRENT_ROW_INDEX < (MAX_NO_OF_ROWS - 1)) {
      goToNextRow();
    }
    else {
      shakeRowsContainer();
      setTimeout(() => {
        revealSecretWord().then(res => {
          showGameOverPopUp();
        });
      }, 1000)
    }
  }
}

function processEnterClick() {
  let shouldProceed = shouldProceedForMatch();
  if (!shouldProceed) return;
  matchEachLetterAndApplyColor().then(() => {
    postColorApplied();
  });
}

function processKeyPressOrClick(val) {
  if (FREEZE_SCREEN) {
    return;
  }
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
      let val = e.target.dataset.val.toUpperCase();
      processKeyPressOrClick(val);
    });
    keyBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      let val = e.target.dataset.val.toUpperCase();
      processKeyPressOrClick(val);
    });
  })

  // for key presses
  document.addEventListener('keydown', (e) => {
    if (isValidKeyPressed(e.key.toUpperCase())) {
      let val = e.key.toUpperCase();
      processKeyPressOrClick(val);
    }
  })

  let crossIcon = document.querySelector('.cross-icon');
  crossIcon.addEventListener('click', (e) => {
    let rulesContainer = document.querySelector('.game-rules-container');
    let rulesPopup = document.querySelector('.game-rules');
    rulesContainer.classList.add(displayNone);
    rulesPopup.classList.add(displayNone);
    window.localStorage.setItem(rulesPopupShown, '1');
    FREEZE_SCREEN = false;
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
    const button = addBox('button', parentRowElem, 'letter')
    button.dataset['val'] = letter;
    button.textContent = letter;
    button.tabIndex = -1;
  });
}

function addBox(elem, parentElem, elemClass, callBackFun) {
  const div = document.createElement(elem);
  div.classList.add(elemClass);
  callBackFun?.(div);
  parentElem.appendChild(div);
  return div;
}

function showRulesPopup() {
  let rulesShown = window.localStorage.getItem(rulesPopupShown);
  let showRulesPopup = rulesShown !== '1';
  if (showRulesPopup) {
    let rulesContainer = document.querySelector('.game-rules-container');
    let rulesPopup = document.querySelector('.game-rules');
    rulesContainer.classList.remove(displayNone);
    rulesPopup.classList.remove(displayNone);
    FREEZE_SCREEN = true;
  }
}

function showGameOverPopUp() {
  let gameOverPopup = document.querySelector('.game-over');
  FREEZE_SCREEN = true;
  gameOverPopup.classList.remove(displayNone);
}

function restartGame() {
  window.location.reload();
}