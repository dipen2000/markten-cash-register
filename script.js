const billAmountInput = document.querySelector("#bill-amount-input");
const cashGivenInput = document.querySelector("#cash-amount-input");
const checkBtn = document.querySelector("#check-btn");
const nextBtn = document.querySelector("#nextBtn");
const message = document.querySelector(".message");
const nextMessage = document.querySelector(".next-message");
const secondaryContainer = document.querySelector(".secondary-container");
const tableDataArr = document.querySelectorAll("td");
checkBtn.addEventListener("click",checkClickHandler);
nextBtn.addEventListener("click",nextClickHandler);


let notesArr = ["2000","500","100","20","10","5","1"];
function checkClickHandler(){
    if(Number(billAmountInput.value)>=1){
        if(Number(cashGivenInput.value) >= Number(billAmountInput.value)){
            console.log(Number(billAmountInput.value) , Number(cashGivenInput.value));
            let amountToReturn = Number(cashGivenInput.value)-Number(billAmountInput.value);
            calculateChange(amountToReturn);
        }
        else{
            message.innerText = "Do you wanna wash dishes?";
        }
    }
    else{
        message.innerText = "Your input is invalid!";
    }

}

function calculateChange(amountToReturn){   
    message.innerText = amountToReturn;
    for(let i=0;i<notesArr.length;i++){
        let noOfNotes = amountToReturn / Number(notesArr[i]);
        let noOfNotesTrunc = Math.trunc(noOfNotes);
        tableDataArr[i].innerText = noOfNotesTrunc;
        console.log(`${noOfNotesTrunc} of ${notesArr[i]}`);
        amountToReturn = amountToReturn % Number(notesArr[i]); 
    }
}

function nextClickHandler(){
    let billInput = Number(billAmountInput.value);
    if(billInput >= 1){
        nextMessage.style.display = "none";
        secondaryContainer.style.display = "flex";
        nextBtn.style.display = "none";   
    }
    else{
        nextMessage.innerText = "Please input a valid input.";
    }
}
