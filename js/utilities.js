function getInputFieldById(inputId) {
  let inputField = document.getElementById(inputId);
  let inputFieldValue = inputField.value;
  inputFieldValue = parseFloat(inputFieldValue);
  inputField.value = "";

  return inputFieldValue;
}
function getElementValueById(elementId) {
  let element = document.getElementById(elementId);
  let elementValue = element.innerText;
  elementValue = parseFloat(elementValue);

  return elementValue;
}
function setTextElementValueById(elementId, newValue) {
  let element = document.getElementById(elementId);
  element.innerText = newValue;
}
