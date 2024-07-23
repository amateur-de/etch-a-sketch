const squareColor = (e)=>{
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    if(e.target.style.opacity === ``)
    {
        e.target.style.opacity = `1`
    }
    else if(Number(e.target.style.opacity) > 0)
    {
        e.target.style.opacity = (Number(e.target.style.opacity) - 0.1).toString()
    }
    /*
    console.log(e.target.style.opacity)
    if(Number(e.target.style.opacity) > 0)
    {
        e.target.style.opacity = (Number(e.target.style.opacity) - 0.1).toString()
    }
        */
    console.log(e.target.style.opacity)
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
        square.style.backgroundColor = 'white'
        square.classList.add('column')
        square.addEventListener('mouseover' , squareColor)
        row.appendChild(square)

    }
    row.classList.add('row')
    container.appendChild(row)
 

}