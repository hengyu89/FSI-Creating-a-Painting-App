let selectedColor = 'blue'
const painting = document.querySelector('.painting')
painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor
})

let paletteColor = document.querySelector('.palette')
paletteColor.addEventListener('click', function(foo){
    selectedColor = foo.target.id
    console.log(selectedColor)
})