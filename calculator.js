const input = document.getElementById('inputtext');
const buttons = document.querySelectorAll('button');
function calculate(expression) {
    console.log(expression);
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}
buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});