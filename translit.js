const latinToAlbanianDataset = new Map(
  Object.entries({
    A: '𐔰',
    Ǎ: '𐕈',
    Ə: '𐔶',
    B: '𐔱',
    C: '𐕑',
    Ĉ: '𐕃',
    Ç: '𐕖',
    "Ç'": '𐕊',
    Č: '𐕠',
    Ć: '𐕉',
    D: '𐔳',
    E: '𐔴',
    Ĕ: '𐔶',
    F: '𐕔',
    G: '𐔲',
    Ğ: '𐕘',
    H: '𐕆',
    I: '𐕞',
    İ: '𐔼',
    Ǐ: '𐔼',
    J: '𐔷',
    Ĵ: '𐕏',
    K: '𐕣',
    "K'": '𐕄',
    L: '𐔾',
    M: '𐕌',
    N: '𐕎',
    O: '𐕒',
    Ö: '𐕒',
    Ŏ: '𐕒',
    P: '𐕢',
    "P'": '𐕗',
    Q: '𐕇',
    "Q'": '𐕍',
    R: '𐕙',
    S: '𐕚',
    Ś: '𐕝',
    "S'": '𐕂',
    Ŝ: '𐕟',
    Ş: '𐕐',
    T: '𐔸',
    "T'": '𐕜',
    U: '𐕞',
    Ü: '𐕞',
    Ŭ: '𐕞',
    V: '𐕛',
    X: '𐕀',
    Y: '𐔺',
    Z: '𐔵',
    Ź: '𐕕',
    OU: '𐕒𐕡',
    ÜU: '𐕞𐕡',
  })
);

const albanianToLatinDataset = new Map(
  Object.entries({
    '𐔰': 'A',
    '𐕈': 'Ǎ',
    '𐔶': 'Ĕ',
    '𐔱': 'B',
    '𐕑': 'C',
    '𐕃': 'Ĉ',
    '𐕖': 'Ç',
    '𐕊': "Ç'",
    '𐕠': 'Č',
    '𐕉': 'Ć',
    '𐔳': 'D',
    '𐔴': 'E',
    '𐕔': 'F',
    '𐔲': 'G',
    '𐕘': 'Ğ',
    '𐕆': 'H',
    '𐕞': 'Ŭ',
    '𐔼': 'Ǐ',
    '𐔷': 'J',
    '𐕏': 'Ĵ',
    '𐕣': 'K',
    '𐕄': "K'",
    '𐔾': 'L',
    '𐕌': 'M',
    '𐕎': 'N',
    '𐕒': 'Ŏ',
    '𐕢': 'P',
    '𐕗': "P'",
    '𐕇': 'Q',
    '𐕍': "Q'",
    '𐕙': 'R',
    '𐕚': 'S',
    '𐕝': 'Ś',
    '𐕂': "S'",
    '𐕟': 'Ŝ',
    '𐕐': 'Ş',
    '𐔸': 'T',
    '𐕜': "T'",
    '𐕛': 'V',
    '𐕀': 'X',
    '𐔺': 'Y',
    '𐔵': 'Z',
    '𐕕': 'Ź',
    '𐕒𐕡': 'OU',
    '𐕞𐕡': 'ÜU',
  })
);

const pronunciationDataset = new Map(
  Object.entries({
    '𐔰': 'A',
    '𐔱': 'B',
    '𐔲': 'G',
    '𐔳': 'D',
    '𐔴': 'E',
    '𐔵': 'Z',
    '𐔶': 'Ē',
    '𐔷': 'Ž',
    '𐔸': 'T',
    '𐔹': 'Ć̣',
    '𐔺': 'Y',
    '𐔻': 'Ź',
    '𐔼': 'I',
    '𐔽': 'ʕ',
    '𐔾': 'L',
    '𐔿': 'Ń',
    '𐕀': 'X',
    '𐕁': 'D’',
    '𐕂': 'C̣',
    '𐕃': 'Ʒ́',
    '𐕄': 'Ḳ',
    '𐕅': 'L’',
    '𐕆': 'H',
    '𐕇': 'X̣',
    '𐕈': 'Å',
    '𐕉': 'Ć',
    '𐕊': 'Č̣',
    '𐕋': 'Č’',
    '𐕌': 'M',
    '𐕍': 'Q̇',
    '𐕎': 'N',
    '𐕏': 'Ʒ’',
    '𐕐': 'Š',
    '𐕑': 'Ǯ',
    '𐕒': 'O',
    '𐕓': 'Ṭ’',
    '𐕔': 'F',
    '𐕕': 'Ʒ',
    '𐕖': 'Č',
    '𐕗': 'Ṗ',
    '𐕘': 'Ġ',
    '𐕙': 'R',
    '𐕚': 'S',
    '𐕛': 'V',
    '𐕜': 'Ṭ',
    '𐕝': 'Ś',
    '𐕞': 'Ü',
    '𐕟': 'C̣’',
    '𐕠': 'C',
    '𐕡': 'W',
    '𐕢': 'P',
    '𐕣': 'K',
    '𐕒𐕡': 'OWN',
  })
);


const leftTextBoxId = '#left-text-input';
const rightTextBoxId = '#right-text-input';
const pronunciationTextId = '#pronunciation-text';
const latinToAlbanian = 'latin-to-albanian';
const albanianToLatin = 'albanian-to-latin';


function generatePronunciation(letters) {
  let pronunciationTextElement = document.querySelector(pronunciationTextId);
  let pronunciation = '';

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    if (pronunciationDataset.get(letter) != undefined) {
      pronunciation += pronunciationDataset.get(letter);
    } else {
      pronunciation += letter;
    }
  }

  pronunciationTextElement.innerHTML = "[" + pronunciation + "]";
}

const doTranslate = direction => {
  let handle = null;
  let translit = '';
  let lettersArray = [];

  switch (direction) {
    case latinToAlbanian:
      handle = document.querySelector(leftTextBoxId);
      word = handle.value.toUpperCase();

      for (const letter of word) {
        if (latinToAlbanianDataset.has(letter)) {
          translit += latinToAlbanianDataset.get(letter);

          lettersArray.push(latinToAlbanianDataset.get(letter));
        } else {
          translit += letter;

          lettersArray.push(letter);
        }
      }

      handle = document.querySelector(rightTextBoxId);
      handle.value = translit;

      // Generate word pronunciation
      generatePronunciation(lettersArray);

      break;
    case albanianToLatin:
      handle = document.querySelector(rightTextBoxId);
      word = handle.value.toUpperCase();

      for (const letter of word) {
        if (albanianToLatinDataset.has(letter)) {
          translit += albanianToLatinDataset.get(letter);
        } else {
          translit += letter;
        }

        lettersArray.push(letter);
      }

      handle = document.querySelector(leftTextBoxId);
      handle.value = translit;

      // Generate word pronunciation
      generatePronunciation(lettersArray);
      break;
    default:
      console.error(`Unknown direction for translate: ${direction}`);
  }
};