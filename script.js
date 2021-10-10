const element = document.querySelectorAll('[data-block]')

element.forEach( block => {
    block.addEventListener('click', handleClick, { once: true})
})