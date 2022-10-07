import image from '../img/image.png';
export const model = [
    {type: 'title', value: 'Конструктор сайтов на чистом JS', 
    options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to&#32right,#ff0099,#493240)', 
            padding:'1.5rem'
        }
    }},

    {type: 'image', value: image},

    {type: 'text', value: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aliquid?',
    options: {
        styles: {
            background: 'linear-gradient(to&#32left,#f2994a,#f2c94c)', 
            padding:'1rem',
            'font-weight':'bold'
        }
    }},

    {type: 'columns', value: [
        'Приложение на чистом JS, без использования библиотек',
        'Узнать как работают принципы SOLID и ООП в JS за один курс',
        'JavaScript - это просто, интересно. Научиться создавать любые UI своими руками'],
    options: {
        styles: {
            background: 'linear-gradient(to&#32bottom,#8e2de2,#4a00e0)', 
            padding:'2rem',
            color:'#ffffff',
            'font-weight':'bold'
        }
    }}

];