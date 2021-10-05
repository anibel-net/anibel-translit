/* eslint-disable no-extend-native */
import {JapaneseLatin} from './data';

const wanakana = require('wanakana');

export class Transliteration {
  text: any;
  constructor(text: string) {
    this.text = text.toLowerCase();
  }

  toAkanne() {
    this.text = this.text.replace(/(.*)о/, (x: string) => {
      return x.replace(/о/gu, 'а').replace(/а$/, 'о').replace(/а-/, 'о-');
    });

    return this;
  }

  toJotacija() {
    this.text = this.text.replace(/іо/gu, 'іё').replace(/ыо/gu, 'ыё');

    return this;
  }

  toJakanne() {
    this.text = this.text.replace(/іа/gu, 'ія').replace(/ыа/gu, 'ыя');

    return this;
  }

  lognSoundRemover() {
    const sklady = ['оў', 'аў', 'ёў', 'яў', 'юў'];
    const reg = (value: string) => {
      const replace = value;
      return new RegExp(replace, 'gu');
    };

    const isExist = sklady.map(value => {
      return this.text.includes(value);
    });

    if (isExist.indexOf(true) !== -1) {
      sklady.forEach(value => {
        const replace = reg(value);
        this.text = this.text.replace(replace, value.slice(0, -1));

        return this;
      });

      return this;
    }

    return this;
  }

  capitalize() {
    if (this.text.includes(' ')) {
      const result = this.text.split(' ').map((word: string) => {
        if (word.charAt(0) === 'ў') {
          return 'У' + word.slice(1);
        }

        if (word.charAt(0) === 'й') {
          return 'І' + word.slice(1);
        }

        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      this.text = result.join(' ');
    }

    if (this.text.match(/r|\n|\rn/gu)) {
      const result = this.text.split(/r|\n|\rn/gu).map((word: string) => {
        if (word.charAt(0) === 'ў') {
          return 'У' + word.slice(1);
        }

        if (word.charAt(0) === 'й') {
          return 'І' + word.slice(1);
        }

        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      this.text = result.join('\n');
    }

    if (this.text.charAt(0) === 'ў') {
      this.text = 'У' + this.text.slice(1);

      return this;
    }

    if (this.text.charAt(0).toLowerCase() === 'й') {
      this.text = 'І' + this.text.slice(1);

      return this;
    }

    this.text = this.text.charAt(0).toUpperCase() + this.text.slice(1);
    return this;
  }

  oneDigit() {
    const oneDigit = {
      o: 'о',
      O: 'О',
      a: 'а',
      i: 'й',
      n: 'н',
      e: 'э',
      E: 'Э',
      u: 'ў',
      U: 'У',
      A: 'А',
      I: 'Й',
      N: 'Н',
      '?': '?',
      '.': '.',
      ',': ',',
    };
    const jp = Object.entries(oneDigit);
    let tranlit = this.text;
    jp.forEach(value => {
      const [en, be] = value;

      if (tranlit.includes(en)) {
        tranlit = tranlit.replace(en, be);
      }
    });
    this.text = tranlit;
    return this;
  }

  addLastWa() {
    const {text} = this;

    if (text.includes(' ')) {
      let newText = text.split(' ');

      newText = newText.map((word: string) => {
        if (word.slice(-2).includes('ўа')) {
          return word.replace(/..$/, 'ва');
        }

        return word;
      });

      this.text = newText.join(' ');
    }

    if (text.slice(-2).includes('ўа')) {
      this.text = text.replace(/..$/, 'ва');
    }

    return this;
  }

  removeEnglishLatters() {
    const {text} = this;

    this.text = text.replace(/[A-z\u00C0-\u00ff]+/gu, '');

    return this;
  }

  get() {
    return this.text;
  }
}

export const japaneseToBelarusian = (text: string) => {
  text = wanakana.toRomaji(text);
  String.prototype.replaceAll = function (
    search: {
      [Symbol.split](string: string, limit?: number | undefined): string[];
    },
    replacement: string | undefined,
  ) {
    const target = this;
    return target.split(search).join(replacement);
  };

  const jp = Object.entries(JapaneseLatin);

  let tranlit = text;
  const sorter = (a: (string | any[])[], b: (string | any[])[]) =>
    b[0].length - a[0].length;

  jp.sort(sorter).forEach(value => {
    const [en, be] = value;

    if (tranlit.includes(en)) {
      if (en.match(/[auo]$/)) {
        tranlit = tranlit.replaceAll(en + 'u', be);
      }
      tranlit = tranlit.replaceAll(en, be);
    }
  });

  tranlit = new Transliteration(tranlit);

  return tranlit
    .oneDigit()
    .addLastWa()
    .oneDigit()
    .toJotacija()
    .toAkanne()
    .toJakanne()
    .removeEnglishLatters()
    .capitalize()
    .get();
};
