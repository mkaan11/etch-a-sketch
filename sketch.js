// const squarecontainer = document.getElementById('squarecontainer')

//square container is 600px-600px


const squareContainer = document.getElementById('squarecontainer');
const slider = document.getElementById('squareNumber');


const clearButton = document.getElementById('clear')


function squareFiller(){
    const squareNumberOnSide = document.getElementById('squareNumber').value;
    const totalSquareNumber = squareNumberOnSide * squareNumberOnSide;
    const squareWidthValue = (600 / squareNumberOnSide);
    const squareWidth = squareWidthValue.toString() + "px";

    for (let i = 0; i < totalSquareNumber; i++) {
        const  newSquare = document.createElement('div');
        newSquare.className = "squares";
        // Get the css root element
        const root = document.querySelector(':root');
        root.style.setProperty('--squareLength', squareWidth)
        squareContainer.appendChild(newSquare);

    }

    const allSquares = document.querySelectorAll('.squares');
    allSquares.forEach(square => square.addEventListener('mouseover', (e) => {e.target.classList.add('painted')} ));


}

function squareDeleter() {
    while (squareContainer.firstChild) {
        squareContainer.removeChild(squareContainer.firstChild);
    }

}

squareFiller();
slider.addEventListener('change',() => { squareDeleter(), squareFiller();} );

clearButton.addEventListener('click',() => {document.querySelectorAll('.squares').forEach(square => square.classList.remove('painted'))});
