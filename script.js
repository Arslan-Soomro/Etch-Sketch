const container = document.querySelector("#container");
const pixelsRow = document.querySelector("#aspect-width");
const aside = document.querySelector("aside");
let RATIO = 16;
let tileFillColor = 'black';
let rainbowMode = false;

function updateRatio(rtio){
    RATIO = rtio;

    while(container.firstElementChild){
        container.removeChild(container.firstElementChild);
    }

    for(let i = 1; i <= RATIO**2; i++){
        const newDiv = document.createElement('div');
        //newDiv.classList.add('draw-box');
        newDiv.style.width = `${100/RATIO}%`;
        newDiv.style.height = `${100/RATIO}%`; 
        
        newDiv.addEventListener('mouseenter', () => {
            if(rainbowMode){
                newDiv.style.backgroundColor = `hsl(${Math.floor((Math.random()*360)+1)}, ${Math.floor((Math.random()*100)+1)}%, ${Math.floor((Math.random()*100)+1)}%)`;
            }else{
                newDiv.style.backgroundColor = tileFillColor;
            }

        })
    
        container.append(newDiv);
    }
}

pixelsRow.addEventListener('change', (e) => {
    if(e.target.value < 2 || e.target.value > 100){
        e.target.value = "16";
    }

    updateRatio(e.target.value);
    document.querySelector("#aspect-height").value = e.target.value;
});

document.querySelector("#color-picker").addEventListener('change', (e) => {
    tileFillColor = e.target.value;
})

document.querySelector("#black-btn").addEventListener('click', () => {
    tileFillColor = 'black';
});

document.querySelector("#eraser-btn").addEventListener('click', () => {
    tileFillColor = 'white';
});

document.querySelector("#rainbow-btn").addEventListener('click', () => {
    if(rainbowMode){
        rainbowMode = false;
    }else{
        rainbowMode = true;
    }
})

document.querySelector("#clear-btn").addEventListener('click', () => {
    
    for(let i = 0; i <= container.childElementCount; i++){
        if(container.children[i]){
            container.children[i].style.backgroundColor = 'white';
        }
    }
    

});

document.querySelector("#grid-btn").addEventListener('click', () => {
    
    for(let i = 0; i <= container.childElementCount; i++){
        if(container.children[i]){
            container.children[i].classList.toggle("draw-box");
        }
    }
    

});


updateRatio(RATIO);









