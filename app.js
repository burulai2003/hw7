function plus() {
    var number1, number2, result;




    number1 = document.getElementById('number11').value;
    number1 = parseInt(number1);



    number2 = document.getElementById('number22').value;
    number2 = parseInt(number2);

    result = number1 + number2;
    document.getElementById('out').innerHTML = result;
}
function minus() {
    var number1, number2, result;




    number1 = document.getElementById('number11').value;
    number1 = parseInt(number1);



    number2 = document.getElementById('number22').value;
    number2 = parseInt(number2);

    result = number1 - number2;
    document.getElementById('out').innerHTML = result;
}
function multiply() {
    var number1, number2, result;




    number1 = document.getElementById('number11').value;
    number1 = parseInt(number1);



    number2 = document.getElementById('number22').value;
    number2 = parseInt(number2);

    result = number1 * number2;
    document.getElementById('out').innerHTML = result;
}
