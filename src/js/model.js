import {Block} from '../classes/blocks';
import image from '../img/image.png';

export const model = [
    new Block('title', 'Конструктор сайтов на чистом JS', 
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to&#32right,#ff0099,#493240)', 
                padding:'1.5rem'
            }
        }),

    new Block('image', image, 
        {
            styles: {
                'justify-content': 'center',
                margin:'2rem',
            },
            alt: 'Это картинка'
        }
    ),

    new Block('columns', 
    [
        'Приложение на чистом JS, без использования библиотек',
        'Узнать как работают принципы SOLID и ООП в JS за один курс',
        'JavaScript - это просто, интересно. Научиться создавать любые UI своими руками'],
    {
        styles: {
            background: 'linear-gradient(to&#32bottom,#8e2de2,#4a00e0)', 
            padding:'2rem',
            color:'#ffffff',
            'font-weight':'bold'
        }
    }),

    new Block('text', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid?',
    {
        styles: {
            background: 'linear-gradient(to&#32left,#f2994a,#f2c94c)', 
            padding:'1rem',
            'font-weight':'bold'
        }
    })

];