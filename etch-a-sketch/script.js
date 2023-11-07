const sketchContainer = document.querySelector('.sketch-container');
const slider = document.querySelector('#pixel-slider');
const resolutionText = document.querySelector('.info-text');
const resetButton = document.querySelector('#reset-button');

slider.oninput = function(){
    resolutionText.innerText = `# of pixels: ${Math.pow(4, this.value)}`;
    while(sketchContainer.firstChild){
        sketchContainer.removeChild(sketchContainer.lastChild);
    }
    for (let i = 0; i < Math.pow(2, this.value); i++) {
        const sketchRow = document.createElement('div');
        for (let i = 0; i < Math.pow(2, this.value); i++) {
            const div = document.createElement('div');
            div.setAttribute('class', 'sketch-pixel');
            sketchRow.appendChild(div);
        }
        sketchContainer.appendChild(sketchRow);
    }
}

sketchContainer.addEventListener('mouseover', (e) => {
    let pixel = e.target;
    console.log(pixel);
    if(pixel.classList.contains("sketch-pixel")){
        pixel.style.backgroundColor = "black";
    }
})

resetButton.addEventListener('click', () => {
    let allPixels = document.querySelectorAll('.sketch-pixel');
    allPixels.forEach((node, index) => {
        node.style.backgroundColor = "rgb(55, 75, 102)";
    })
})