const MAX_NO_OF_ROWS = 6;
const MAX_NO_OF_COLUMNS = 5;
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
let arrTriedWords = [];
let guessedWord = '';
createElementsDynamically();
const SECRET_WORD = getSecretWord()?.toUpperCase();
console.log(SECRET_WORD);
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

function getSecretWord() {
  return arrWrds[Math.floor(Math.random() * arrWrds.length)];
}

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
    resetGuessedWord();
    CURRENT_CELL = getCell(CURRENT_ROW_INDEX, CURRENT_COL_INDEX);
  }
}

function resetGuessedWord() {
  arrTriedWords.push(guessedWord);
  guessedWord = '';
  console.log('arrTriedWords: ', arrTriedWords);
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
    console.log('guessedWord: ', guessedWord);
  }
}

function deleteText() {
  goToPrevColumn();
  setCurrentCellText('');
}

function verifyEnteredWord() {
  return guessedWord == SECRET_WORD;
}

function matchEachLetterAndApplyColor() {
  let rowIndex = CURRENT_ROW_INDEX;
  let word = guessedWord;
  for (let i = 0; i < MAX_NO_OF_COLUMNS; i++) {
    setTimeout(() => {
      let CURRENT_CELL = getCell(rowIndex, i);
      CURRENT_CELL.classList.add('flip');
      if (word[i] == SECRET_WORD[i]) {
        CURRENT_CELL.classList.add('correct');
      }
      else if (SECRET_WORD.includes(word[i])) {
        CURRENT_CELL.classList.add('present');
      }
      else {
        CURRENT_CELL.classList.add('absent');
      }
    }, i * 500)
  }
}

function shouldProceedForMatch() {
  if (CURRENT_COL_INDEX < MAX_NO_OF_COLUMNS) {
    applyClassToElemForXTime('.rows-container', 'message', 1000, 'not enough letters');
    return false;
  }
  // if (!arrWrds.includes(guessedWord.toLowerCase())) {
  //   applyClassToElemForXTime('.rows-container', 'message', 1000, 'not in word list');
  //   return false;
  // }
  return true;
}

function processEnterClick() {
  let shouldProceed = shouldProceedForMatch();
  if (!shouldProceed) return;
  matchEachLetterAndApplyColor();
  if (CURRENT_ROW_INDEX < (MAX_NO_OF_ROWS - 1)) {
    // TODO: include all scenarios
    if (verifyEnteredWord()) {
      alert('congrats');
    } else {
      goToNextRow();
    }
  }
  else {
    // TODO: include all scenarios
    if (verifyEnteredWord()) {
      alert('congrats');
    } else {
      alert('game over');
    }
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
