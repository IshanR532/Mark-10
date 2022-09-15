const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const labelOfCashGiven = document.querySelector('[for = "cash-given"]');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

cashGiven.style.display = "none";
labelOfCashGiven.style.display = "none";




checkButton.addEventListener("click", function validateBillAndCashAmount() {
    let billAmountNum = Number(billAmount.value);
    let cashGivenNum = Number(cashGiven.value);

    if (billAmountNum) {
        hideMessage();
        if (billAmountNum > 0) {
            labelOfCashGiven.style.display = "block";
            cashGiven.style.display = "block";
            if(cashGivenNum === billAmountNum){
                showMessage("No change is required !")
            }
             else if (cashGivenNum === 0) {
                showMessage("Enter cash given")
            } else if (cashGivenNum < 0) {
                showMessage("Enter only positive value for cash")
            } else {
                if (cashGivenNum >= billAmountNum) {
                    const amountToBeReturned = cashGivenNum - billAmountNum;
                    calculateChange(amountToBeReturned);
                } else {
                    showMessage("The cash given is insufficient");
                }
            }
        } else {
            showMessage("Invalid Bill Amount");
        }
    } else {
        showMessage("Please Enter Bill Amount !");
    }
});

function calculateChange(amountToBeReturned) {

    for (let i = 0; i < availableNotes.length; i++) {

        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned %= availableNotes[i];

        //updating the number of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;

    }
}

function hideMessage() {
    message.style.display = "none";
}



function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}