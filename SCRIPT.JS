function calculateAverage() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let num3 = parseFloat(document.getElementById('number3').value);
    let num4 = parseFloat(document.getElementById('number4').value);
    let num5 = parseFloat(document.getElementById('number5').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        document.getElementById('result').textContent = 'Please enter valid numbers in all fields.';
        return;
    }

    let average = (num1 + num2 + num3 + num4 + num5) / 5;
    document.getElementById('result').textContent = 'Average: ' + average;
}
