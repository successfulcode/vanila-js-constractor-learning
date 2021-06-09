import { row, col, css } from '../utils';

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Metodas toHTML turetu buti realizuotas'); //Sio metodo reikia, kad kiekvienoje class butu realizuotas sis metodas
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options); //Isvkieciame inicializacija, kad atsirastu viso klases Block savybes. Title fiksuotas, todel ji neperduodame i kontruktori
  }
  toHTML() {
    const { tag = 'h1', styles } = this.options; //Todel kad dukterinis komponentas block, rasome this
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    return row(col(`<p>${this.value}</p>`), css(this.options.styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    let html = this.value.map(col);
    return row(html.join(''), css(this.options.styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { styles, imageStyles: is, alt = '' } = this.options;
    return row(
      `<img src='${this.value}' alt='${alt}' style='${css(is)}' />`,
      css(styles)
    );
  }
}
