import {row, col, css} from './utils'

function title(block) {
    const {tag = h1, styles} = block.options; // Деструктуризация
    //const tag = block.options.tag ?? 'h1';
    //const styles = block.options.styles;
    return row(col(`<${tag} class="text-5xl text-center text-white">${block.value}</${tag}>`), css(styles)) 
            //`<div class="flex" style="${styles}">
            //    <div class="flex-col w-full">
            //        <${tag} class="text-5xl text-center text-white">${block.value}</${tag}>
            //    </div>
            //</div>`
}

function text(block) {
    return row(col(`<p class="text-center">${block.value}</p>`),css(block.options.styles))  
}

function columns(block) {
    const html = block.value.map(col).join('');
    return row(html, css(block.options.styles))
}

function image(block) {
    return `<div class="flex justify-center">
                    <img src="${block.value}" alt="images" class="w-1/2">
            </div>`
}

export const templates = {
    title: title,
    text: text,
    columns: columns,
    image: image
}