//
function Calculator() {
  var answer = document.querySelector('#answer');
  var num1 = Number(document.querySelector('#num1').value);
  var num2 = Number(document.querySelector('#num2').value);
  var select =  document.querySelector('select');
  var operator = select.options[select.selectedIndex].value;
  var theCalculatedAnswer;

if (operator == 'add') {
theCalculatedAnswer = num1 + num2
} else if(operator == 'minus') {
theCalculatedAnswer = num1 - num2;
} else if(operator == 'divided by') {
  theCalculatedAnswer = num1 / num2;
} else if(operator == 'multiply') {
  theCalculatedAnswer = num1 * num2;
} else {
  //alert('Please Select an operator');
  theCalculatedAnswer = "Invalid Operator";
}





  answer.innerHTML = theCalculatedAnswer;
}
