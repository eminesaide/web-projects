function calculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const operator = document.getElementById("operator").value;
    const number2 = parseFloat(document.getElementById("number2").value);
    var result;

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 != 0) {
                result = number1 / number2;
            } else {
                alert("0'a bölme hatası");
            }
            break;
        case "^":
            result = Math.pow(number1, number2);
            break;
        case "%":
            result = number1 % number2;
            break;
    }

    document.getElementById("result").textContent = result;
}
