
/* This function generates random Colors for the squares by using Math.random 
for each rgb color. It also reduces the opacity by about 10% each time until
the opacity becomes 0.    */


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

    console.log(e.target.style.opacity)
    e.target.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`

}

/* This function generates the grid by using two loops. The outer loop creates
the rows and the inner loop generates the squares for each row. The white 
background color is added to each square so that the grid is visible */

const generateGrid = (squares)=> {
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
}

/* The function below generates a new grid based upon the input of the user.
   For performance reasons, values greater than 100 are not accepted:  */

const resetGrid = ()=> {
    const body = document.querySelector('body')
    let container = document.querySelector('.container')
    container.remove()
     container = document.createElement('div')
     container.classList.add('container')
     body.appendChild(container)
    let dimensions =Number( prompt('Enter an integer value between 1 and 100:'))
    while( dimensions < 1 || dimensions > 100)
    {
        dimensions =Number( prompt('Enter an integer value between 1 and 100:'))
    }
    generateGrid(dimensions)


}

generateGrid(16)
const button = document.querySelector('.reset')
button.addEventListener('click', resetGrid)