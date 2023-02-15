document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from element id
    3. convert string value to number
  */
  let newDepositAmount = getInputFieldById("deposit-field");
  /* 
  1. get previous deposit total by id
   */
  let prevDepositTotal = getElementValueById("deposit-total");
  /* calculate new deposit total */
  let newDepositTotal = newDepositAmount + prevDepositTotal;
  //   set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);
  //   get previous balance total by id
  let prevBalanceTotal = getElementValueById("balance-total");
  /* calculate new balance total */
  let newBalanceTotal = prevBalanceTotal + newDepositAmount;
  //   set balance total value
  setTextElementValueById("balance-total", newBalanceTotal);
});
