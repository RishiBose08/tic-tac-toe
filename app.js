let boxes = document.querySelectorAll(".box");
let btn1= document.querySelector("#btn1");
let newgame=document.querySelector("#newgame");
let messagecontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#message")
let turn0= true; //playerX(false),playerO(true)

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn0===true){
            box.innerText=0;
            turn0=false;

        }else{
        box.innerText="X";
        turn0=true;
        }
        box.disabled = true;
        checkWinner();
        
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    messagecontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winpatterns){
        
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
                
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                
                showWinner(pos1Val);
            }
        }
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    boxes.forEach((box) => {
        box.innerText = "";
    });
    messagecontainer.classList.add("hide");
};


newgame.addEventListener("click",resetGame);
btn1.addEventListener("click",resetGame);


