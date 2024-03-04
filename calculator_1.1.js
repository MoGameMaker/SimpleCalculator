const input = document.getElementById('inputtext');
const buttons = document.querySelectorAll('button');

function calculate(expression) {
    console.log(expression);
    console.log(typeof(expression));
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}


function operation(buttonValue) {
    if (buttonValue === 'C') {
        input.value = '';
    } else if (buttonValue === 'DEL') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } else {
        input.value += buttonValue;
    }
}

buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});

document.getElementById('textsaddle').addEventListener('click', function() {
    document.body.style.backgroundColor = 'saddlebrown';
    document.getElementById('textlawn').style.backgroundColor = '#999';
    document.getElementById('textaqua').style.backgroundColor = '#999';
});

document.getElementById('textaqua').addEventListener('click', function() {
    document.body.style.backgroundColor = 'aquamarine';
    document.getElementById('textlawn').style.backgroundColor = '#999';
    document.getElementById('textaqua').style.backgroundColor = 'aquamarine';
});

document.getElementById('textlawn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lawngreen';
    document.getElementById('textaqua').style.backgroundColor = '#999';
    document.getElementById('textlawn').style.backgroundColor = 'lawngreen';
});

document.getElementById('textgolden').addEventListener('click', function() {
    document.body.style.backgroundColor = 'goldenrod';
    document.getElementById('textlawn').style.backgroundColor = '#999';
    document.getElementById('textaqua').style.backgroundColor = '#999';
});

document.getElementById('textchocolate').addEventListener('click', function() {
    document.body.style.backgroundColor = 'chocolate';
    document.getElementById('textlawn').style.backgroundColor = '#999';
    document.getElementById('textaqua').style.backgroundColor = '#999';
});