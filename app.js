let squares = 16
const container = document.querySelector('.container')
for(let rows = 0; rows < squares ; rows = rows + 1)
{
    const row = document.createElement('div')
    for(let cols =0; cols < squares; cols = cols + 1)
    {
        const square = document.createElement('div')
        square.classList.add('column')
        row.appendChild(square)

    }
    row.classList.add('row')
    container.appendChild(row)
 

}