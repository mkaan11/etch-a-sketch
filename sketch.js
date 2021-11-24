const container = document.getElementById('container')

for (let i = 0; i < 810; i++) {
    let square = document.createElement('div');
    square.className = "squares";
    container.appendChild(square);
}