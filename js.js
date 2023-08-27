function appendToInputField(value) {
    document.getElementById('inputField').value += value;
}

function calculateResult() {
    var inputExpression = document.getElementById('inputField').value;
    var result = eval(inputExpression);
    document.getElementById('resultField').value = result;
}

function clearFields() {
    document.getElementById('inputField').value = '';
    document.getElementById('resultField').value = '';
}
