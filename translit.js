const latinToAlbanianDataset = new Map(
  Object.entries({
	'own': '𐕒𐕡',
	'k': '𐕣',
	'p': '𐕢',
	'w': '𐕡',
	'c': '𐕠',
	'c̣’': '𐕟',
	'ü': '𐕞',
	'ś': '𐕝',
	'ṭ': '𐕜',
	'v': '𐕛',
	's': '𐕚',
	'r': '𐕙',
	'ġ': '𐕘',
	'ṗ': '𐕗',
	'č': '𐕖',
	'ʒ': '𐕕',
	'f': '𐕔',
	'ṭ’': '𐕓',
	'o': '𐕒',
	'ǯ': '𐕑',
	'š': '𐕐',
	'ʒ’': '𐕏',
	'n': '𐕎',
	'q̇': '𐕍',
	'm': '𐕌',
	'č’': '𐕋',
	'č̣': '𐕊',
	'ć': '𐕉',
	'å': '𐕈',
	'x̣': '𐕇',
	'h': '𐕆',
	'l’': '𐕅',
	'ḳ': '𐕄',
	'ʒ́’': '𐕃',
	'c̣': '𐕂',
	'd’': '𐕁',
	'x': '𐕀',
	'ń': '𐔿',
	'l': '𐔾',
	'ʕ': '𐔽',
	'i': '𐔼',
	'ź': '𐔻',
	'y': '𐔺',
	'ć̣': '𐔹',
	't': '𐔸',
	'ž': '𐔷',
	'ē': '𐔶',
	'z': '𐔵',
	'e': '𐔴',
	'd': '𐔳',
	'g': '𐔲',
	'b': '𐔱',
	'a': '𐔰',
  })
);

const albanianToLatinDataset = new Map(
  Object.entries({
	'𐔰': 'a',
	'𐔱': 'b',
	'𐔲': 'g',
	'𐔳': 'd',
	'𐔴': 'e',
	'𐔵': 'z',
	'𐔶': 'ē',
	'𐔷': 'ž',
	'𐔸': 't',
	'𐔹': 'ć̣',
	'𐔺': 'y',
	'𐔻': 'ź',
	'𐔼': 'i',
	'𐔽': 'ʕ',
	'𐔾': 'l',
	'𐔿': 'ń',
	'𐕀': 'x',
	'𐕁': 'd’',
	'𐕂': 'c̣',
	'𐕃': 'ʒ́',
	'𐕄': 'ḳ',
	'𐕅': 'l’',
	'𐕆': 'h',
	'𐕇': 'x̣',
	'𐕈': 'å',
	'𐕉': 'ć',
	'𐕊': 'č̣',
	'𐕋': 'č’',
	'𐕌': 'm',
	'𐕍': 'q̇',
	'𐕎': 'n',
	'𐕏': 'ʒ’',
	'𐕐': 'š',
	'𐕑': 'ǯ',
	'𐕒': 'o',
	'𐕓': 'ṭ’',
	'𐕔': 'f',
	'𐕕': 'ʒ',
	'𐕖': 'č',
	'𐕗': 'ṗ',
	'𐕘': 'ġ',
	'𐕙': 'r',
	'𐕚': 's',
	'𐕛': 'v',
	'𐕜': 'ṭ',
	'𐕝': 'ś',
	'𐕞': 'ü',
	'𐕟': 'c̣’',
	'𐕠': 'c',
	'𐕡': 'w',
	'𐕢': 'p',
	'𐕣': 'k',
	'𐕒𐕡': 'own',
  })
);

const pronunciationDataset = new Map(
  Object.entries({
    '𐔰': 'a',
    '𐔱': 'b',
    '𐔲': 'g',
    '𐔳': 'd',
    '𐔴': 'e',
    '𐔵': 'z',
    '𐔶': 'eː',
    '𐔷': 'ʒ',
    '𐔸': 't',
    '𐔹': 'tɕ’',
    '𐔺': 'j',
    '𐔻': 'ʑ',
    '𐔼': 'i',
    '𐔽': 'ʕ',
    '𐔾': 'l',
    '𐔿': 'nʲ',
    '𐕀': 'x',
    '𐕁': 'dʲ',
    '𐕂': 'tsˈ',
    '𐕃': 'dʑ',
    '𐕄': 'k’',
    '𐕅': 'lʲ',
    '𐕆': 'h',
    '𐕇': 'q',
    '𐕈': 'ɒ',
    '𐕉': 'tɕ',
    '𐕊': 'tʃˈ',
    '𐕋': 'tsˈ',
    '𐕌': 'm',
    '𐕍': 'qˈ',
    '𐕎': 'n',
    '𐕏': 'dzʲ',
    '𐕐': 'ʃ',
    '𐕑': 'dʒ',
    '𐕒': 'o',
    '𐕓': 'tʲ’',
    '𐕔': 'f',
    '𐕕': 'dz',
    '𐕖': 'tʃ',
    '𐕗': 'pˈ',
    '𐕘': 'ɣ',
    '𐕙': 'r',
    '𐕚': 's',
    '𐕛': 'v',
    '𐕜': 'tˈ',
    '𐕝': 'ɕ',
    '𐕞': 'ə',
    '𐕟': 'tsˈ',
    '𐕠': 'ts',
    '𐕡': 'w',
    '𐕢': 'p',
    '𐕣': 'k',
    '𐕒𐕡': 'own',
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
