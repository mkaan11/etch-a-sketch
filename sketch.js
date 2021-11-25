// const squarecontainer = document.getElementById('squarecontainer')

//square container is 600px-600px

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
    squarecontainer.appendChild(newSquare);
}

const allSquares = document.querySelectorAll('.squares');

allSquares.forEach(square => square.addEventListener('click', (e) => {e.target.classList.add('painted')} ));

const clearButton = document.getElementById('clear')

clearButton.addEventListener('click',() => {allSquares.forEach(square => square.classList.remove('painted'))});
