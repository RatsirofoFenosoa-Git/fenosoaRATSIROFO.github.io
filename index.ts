const board = document.querySelector(".game-container") as HTMLElement;
const button= document.querySelector('.button') as HTMLElement;
const winMessage = document.querySelector('.winner') as HTMLElement;

type Turn= "x"|"o"|"";

let turn: Turn ="x";



function listenBord():void{
    board.addEventListener('click', runGame)
}

function main(): void{
    createBoard();
    listenBord() 
}

function runGame(e: Event): void{
    const boxId: string |null =(<HTMLElement>e.target).id;
    //console.log(boxId);
    if(boxId=== null) return;
    const box:HTMLElement|null= document.querySelector(`#${boxId}`); 
    if(box=== null || box.textContent!="")return;
    box.textContent= turn; 
    const winner: boolean = checkWinner();
    if(!winner)switchPlayer();
    else{
        endGame();
    } 
}

function endGame():void{
    board.removeEventListener('click',runGame);
    button.addEventListener('click',resetGame);
    if(winMessage===null)return;
    winMessage.textContent= `le(la) gagnant(e) est "${turn}"`;
    winMessage.setAttribute('display','block');
    button.style.visibility="visible";
}

function resetGame():void{
    turn = 'x'
    resetBoxes();
    button.style.visibility='hidden';
    winMessage.textContent='';
    board.addEventListener('click',runGame);
}

function resetBoxes():void{
    for(let i= 0; i<=8; i++){
        const box = document.querySelector(`#box-${i}`) as HTMLElement;
        box.textContent="";
        //animation
    }
}

function checkWinner():boolean{
    const boxes:Array<string> = getBoxes();
    return(
        // (boxes[0] === boxes[1]&& boxes[1]===boxes[2]&&boxes[0]!='')||
        // (boxes[3] === boxes[4]&& boxes[4]===boxes[5]&&boxes[3]!='')||
        // (boxes[6] === boxes[7]&& boxes[7]===boxes[8]&&boxes[6]!='')||
        // (boxes[0] === boxes[4]&& boxes[4]===boxes[8]&&boxes[0]!='')||
        // (boxes[2] === boxes[4]&& boxes[4]===boxes[6]&&boxes[2]!='')||
        // (boxes[1] === boxes[4]&& boxes[4]===boxes[7]&&boxes[1]!='')||
        // (boxes[0] === boxes[3]&& boxes[3]===boxes[6]&&boxes[0]!='')||
        // (boxes[2] === boxes[5]&& boxes[5]===boxes[8]&&boxes[2]!='')
        (((boxes[0]=="x")&&(boxes[1]=="x")&&(boxes[2]=="x"))||((boxes[0]=="o")&&(boxes[1]=="o")&&(boxes[2]=="o")))||
        (((boxes[3]=="x")&&(boxes[4]=="x")&&(boxes[5]=="x"))||((boxes[3]=="o")&&(boxes[4]=="o")&&(boxes[5]=="o")))||
        (((boxes[6]=="x")&&(boxes[7]=="x")&&(boxes[8]=="x"))||((boxes[6]=="o")&&(boxes[7]=="o")&&(boxes[8]=="o")))||
        (((boxes[0]=="x")&&(boxes[3]=="x")&&(boxes[6]=="x"))||((boxes[0]=="o")&&(boxes[3]=="o")&&(boxes[6]=="o")))||
        (((boxes[1]=="x")&&(boxes[4]=="x")&&(boxes[7]=="x"))||((boxes[1]=="o")&&(boxes[4]=="o")&&(boxes[7]=="o")))||
        (((boxes[2]=="x")&&(boxes[5]=="x")&&(boxes[8]=="x"))||((boxes[2]=="o")&&(boxes[5]=="o")&&(boxes[8]=="o")))||
        (((boxes[0]=="x")&&(boxes[4]=="x")&&(boxes[8]=="x"))||((boxes[0]=="o")&&(boxes[4]=="o")&&(boxes[8]=="o")))||
        (((boxes[2]=="x")&&(boxes[4]=="x")&&(boxes[6]=="x"))||((boxes[2]=="o")&&(boxes[4]=="o")&&(boxes[6]=="o")))
    ); 
}

function getBoxes(): Array<string>{
    const boxesContent: Array<string>=[];
    for(let i=1; i<=8;i++){
        const box = document.querySelector(`#box-${i}`) as HTMLElement;
        const boxContent: string | null= box?.textContent;
        if(boxContent===null) boxesContent.push("");
        else{
            boxesContent.push(boxContent);
        }
    } 
    return boxesContent;
}

function switchPlayer():void{
    if(turn==='x'){
        turn='o'
    }else{
        turn="x"
    }
}

function createBoard():void{
    for(let i =0; i<9; i++) 
        makebox(i);
}

function makebox(i:number):void{
    const box:HTMLDivElement =document.createElement('div');
    box.className= 'box';
    box.id=`box-${i}`;
    box.textContent ='';
    board.appendChild(box);
}

main();