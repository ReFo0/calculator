// script.js
function addToScreen(value) {
    document.getElementById('result').value += value;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let result = document.getElementById('result').value;
    try {
        let evaluatedResult = math.evaluate(result);
        document.getElementById('result').value = evaluatedResult;
    } catch (error) {
        console.log(error);
    }
}