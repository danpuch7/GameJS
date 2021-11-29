
field= document.querySelector('.game-field');


const empty={
    top:0,
    left:0
};

const cells = []

cells.push(empty)

for (let i=1;i<=15;i++)
{
    cell = document.createElement('div')
    cell.className='cell';
    cell.textContent = i;

    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        top:(i - left) / 4,
        left: i % 4,
        elem:cell
    })

    cell.style.left = `${left * 100}px`;
    cell.style.top = `${top * 100}px`;



    field.append(cell);


    cell.addEventListener('click',function (event){
        event.stopPropagation()

        let cell = cells[i]

        const leftPos = Math.abs(empty.left - cell.left)
        const topPos = Math.abs(empty.top - cell.top)

        if(leftPos + topPos>1)
        {
            return 0
        }



        cell.elem.style.left = `${empty.left*100}px`
        cell.elem.style.top = `${empty.top*100}px`

        const emptyLeft = empty.left;
        const emptyTop= empty.top;

        empty.left = cell.left;
        empty.top = cell.top;

        cell.left = emptyLeft;
        cell.top = emptyTop;
    });
}

console.log(cells)
