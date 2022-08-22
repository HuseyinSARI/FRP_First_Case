const boxes = document.querySelectorAll(".box");
const footer = document.getElementById("game_footer");

var player = "first";
var winner="none";
var row1,row2,row3,col1,col2,col3,x1,x2;


boxes.forEach( box => box.addEventListener("click", () => clickBox(box)));    

function clickBox(box){
    if(winner=="none"){
        if(!box.value){
            if(player =="first"){
                box.value = 1;
                box.textContent = "x";            
                togglePlayer();
                checkWin();
            }else if(player == "second"){
                box.value = -1;
                box.textContent = "o";
                togglePlayer();
                checkWin();                
            }
        }    
    }
}

function togglePlayer(){
    if(player=="first"){
        player = "second";
        footer.textContent = "Second player's(o) turn.";
    }else if(player == "second"){
        player = "first";
        footer.textContent = "First player's(x) turn.";
    }
}

function checkWin(){
   row1 =  boxes[0].value + boxes[1].value + boxes[2].value;
   row2 =  boxes[3].value + boxes[4].value + boxes[5].value;
   row3 =  boxes[6].value + boxes[7].value + boxes[8].value;

   col1 =  boxes[0].value + boxes[3].value + boxes[6].value;
   col2 =  boxes[1].value + boxes[4].value + boxes[7].value;
   col3 =  boxes[2].value + boxes[5].value + boxes[8].value;

   x1 =  boxes[0].value + boxes[4].value + boxes[8].value;
   x2 =  boxes[6].value + boxes[4].value + boxes[2].value;
   
   if(row1==3 || row2 == 3 || row3 == 3 || col1 == 3 || col2 == 3 || col3 == 3 || x1 == 3 || x2 == 3){
    winner = "first";
    footer.textContent = "First player Win!"
   }
   if(row1==-3 || row2 == -3 || row3 == -3 || col1 == -3 || col2 == -3 || col3 == -3 || x1 == -3 || x2 == -3){
    winner = "second";
    footer.textContent = "Second player Win!"
   }

   if(winner=="none"){
    if((row1+row2+row3)==1){
        winner = "tie";
        footer.textContent = "Tie!";
       }
   }
}
