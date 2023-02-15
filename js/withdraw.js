document.getElementById("btn-withdraw").addEventListener("click", function () {
  let newWithdrawAmount = getInputFieldById("withdraw-field");
  let prevWithdrawTotal = getElementValueById("withdraw-total");
  let newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  let prevBalanceTotal = getElementValueById("balance-total");
  let newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
