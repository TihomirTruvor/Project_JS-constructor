function title(block) {
    return `<div class="flex">
                <div class="flex-col w-full">
                    <h1 class="text-5xl text-center">${block.value}</h1>
                </div>
            </div>`
}

function text(block) {
    return `<div class="flex">
                <div class="flex-col w-full">
                    <p class="text-center">${block.value}</p>
                </div>
            </div>`
}

function columns(block) {
    const html = block.value.map(item => `<p class="text-center">${item}</p>`)
    return `<div class="flex">
                ${html.join('')}
            </div>`
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