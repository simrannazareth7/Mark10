
const cashGiven = document.querySelector("#cash-given");
const checkbutton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const billAmount = document.querySelector("#bill-amount");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const availablenotes = [2000, 500, 100, 20, 10, 5, 1];
checkbutton.addEventListener("click", function validbillamount() {
  hideMessage();

  if ( Number( billAmount.value) > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
      calculateChange(amountToBeReturned);
    } else {
      showMessage(
        "cash given amount should be grater and or equal to bill amount"
      );
    }
  } else {
    showMessage("please enter bill amount greated than 0");
  }
});
function hideMessage() {
  message.style.display = "none";
}

function calculateChange(amountToBeReturned) {
  for (var i = 0; i < availablenotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availablenotes[i]);
    amountToBeReturned %= availablenotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showMessage(text) {
  message.style.display = "block";
  message.innerText = text;
}