export function row(content, styles) {
    return `<div class="flex" style = ${styles}>${content}</div>`
}

export function col(content) {
    return `<div class="flex-col w-full">${content}</div>`
}

export function css(styles = {}) { /*рендер стилей*/
    //const keys = Object.keys(styles)
    //const array = keys.map(key => {
    //    return `${key}:${styles[key]}`
    //})
//
    //return array.join(';')
    const toString = key => `${key}:${styles[[key]]}`; /*Строка со стилями*/
    return Object.keys(styles).map(toString).join(';')
}