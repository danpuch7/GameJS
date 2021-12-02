
field= document.querySelector('.game-field');
modal = document.getElementById('modwindow')
btn_close = document.querySelector('.close')
btn_next = document.querySelector('.yes')

const empty={
    top:3,
    left:3,
    iter:16
};


const cells = []

const numbers = []



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

for(let i=1;i<=15;i++)
{
    numbers.push(i)
}

shuffle(numbers)


for (let i=0;i<15;i++)
{

    cell = document.createElement('div')
    cell.className='cell';
    cell.textContent = numbers[i];



    const left = i % 4;
    const top = (i - left) / 4;

    cells.push({
        top:(i - left) / 4,
        left: i % 4,
        elem:cell,
        iter:numbers[i]
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



        const win = cells.every(elem=>{
            return elem.iter === elem.top * 4 +elem.left+1
        })

        if (win) {
            console.log(modal)
            modal.style.display = 'flex'
        }

    });

    btn_close.addEventListener('click',()=>{
        modal.style.display='none'
    })

    btn_next.addEventListener('click',()=>{
        window.location.reload()
    })

}

cells.push(empty)





// if (cells.every((el, ix) => el.left == win[ix].left) && cells.every((el, ix) => el.top == win[ix].top)) {
//             // document.body.style.backgroundColor = 'black';
//             console.log("WIN")
//
// }


