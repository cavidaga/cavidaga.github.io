const TABLE_T_TO_A = new Map(
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

const TABLE_A_TO_T = new Map(
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

const LEFT_TEXT_ID = '#left-text-input';

const RIGHT_TEXT_ID = '#right-text-input';

const U_TO_A = 'udi-to-albanian';

const A_TO_U = 'albanian-to-udi';

const doTranslate = direction => {
  let handle = null;
  let new_payload = '';
  switch (direction) {
    case U_TO_A:
      handle = document.querySelector(LEFT_TEXT_ID);
      for (const c of handle.value) {
        if (TABLE_T_TO_A.has(c)) {
          new_payload += TABLE_T_TO_A.get(c);
        } else {
          new_payload += c;
        }
      }
      handle = document.querySelector(RIGHT_TEXT_ID);
      handle.value = new_payload;
      break;
    case A_TO_U:
      handle = document.querySelector(RIGHT_TEXT_ID);
      for (const c of handle.value) {
        if (TABLE_A_TO_T.has(c)) {
          new_payload += TABLE_A_TO_T.get(c);
        } else {
          new_payload += c;
        }
      }
      handle = document.querySelector(LEFT_TEXT_ID);
      handle.value = new_payload;
      break;
    default:
      console.error(`Unknown direction for translate: ${direction}`);
  }
};
