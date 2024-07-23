const squareColor = (e)=>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`

}



let squares = 16
const container = document.querySelector('.container')
for(let rows = 0; rows < squares ; rows = rows + 1)
{
    const row = document.createElement('div')
    for(let cols =0; cols < squares; cols = cols + 1)
    {
        const square = document.createElement('div')
        square.classList.add('column')
        square.addEventListener('mouseover' , squareColor)
        row.appendChild(square)

    }
    row.classList.add('row')
    container.appendChild(row)
 

}