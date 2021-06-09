import image from './assets/image.png';
import {
  TitleBlock,
  TextBlock,
  ColumnsBlock,
  ImageBlock
} from './classes/blocks';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit dolorem consequuntur eos ipsum sequi?';

export const model = [
  new TitleBlock('Constructor site on Vanila JS!', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),
  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
  new ColumnsBlock(
    [
      'Labas  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nisi nobis quae ad suscipit porro.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a dolorem omnis voluptatem molestiae quidem.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio consequatur molestias quisquam? Ducimus, laudantium sed?'
    ],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-wight': 'bold'
      }
    }
  ),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'It is a picture'
  })
];
