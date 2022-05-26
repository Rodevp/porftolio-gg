const hero = document.getElementById('hero')
const buttonsChangeColor = document.querySelectorAll('.color_item')
const btns = Array.from(buttonsChangeColor)


btns.forEach(element =>  {
    element.addEventListener( 'click', e => {

        if (e.target.dataset.color === 'blue') {
            hero.classList.add('blue_color')
            hero.classList.remove('orange_color')
            hero.classList.remove('indigo_color')
        }
        
        if (e.target.dataset.color === 'orange') {
            hero.classList.add('orange_color')
            hero.classList.remove('blue_color')
            hero.classList.remove('indigo_color')
        }
        
        if (e.target.dataset.color === 'indigo') {
            hero.classList.add('indigo_color')
            hero.classList.remove('orange_color')
            hero.classList.remove('blue_color')
        }
        
    })
})