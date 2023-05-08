function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('theColor').innerHTML = `This color's hexcode is: ${newColor}`;
}
