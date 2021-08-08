const container = document.querySelector("#container");
const width = document.querySelector("#aspect-width");
const aside = document.querySelector("aside");
let RATIO = 16;
let fillColor = 'black';

function updateRatio(rtio){
    RATIO = rtio;

    while(container.firstElementChild){
        container.removeChild(container.firstElementChild);
    }

    for(let i = 1; i <= RATIO**2; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('draw-box');
        newDiv.style.width = `${100/RATIO}%`;
        newDiv.style.height = `${100/RATIO}%`; 
        
        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = 'black';
        })
    
        container.append(newDiv);
    }
}

width.addEventListener('change', (e) => {
    updateRatio(e.target.value);
});

updateRatio(RATIO);









