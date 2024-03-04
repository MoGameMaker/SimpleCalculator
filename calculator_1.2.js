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
    document.getElementById('textlawn').style.backgroundColor = 'saddlebrown';
    document.getElementById('textaqua').style.backgroundColor = 'saddlebrown';
    document.getElementById('textsaddle').style.backgroundColor = 'saddlebrown';
    document.getElementById('textchocolate').style.backgroundColor = 'saddlebrown';
    document.getElementById('textgolden').style.backgroundColor = 'saddlebrown';
    document.getElementById('textbluev').style.backgroundColor = '#999';
});

document.getElementById('textaqua').addEventListener('click', function() {
    document.body.style.backgroundColor = 'aquamarine';
    document.getElementById('textlawn').style.backgroundColor = '#999';
    document.getElementById('textbluev').style.backgroundColor = 'aquamarine';
    document.getElementById('textaqua').style.backgroundColor = 'aquamarine';
    document.getElementById('textsaddle').style.backgroundColor = 'aquamarine';
    document.getElementById('textchocolate').style.backgroundColor = 'aquamarine';
    document.getElementById('textgolden').style.backgroundColor = 'aquamarine';
});

document.getElementById('textlawn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lawngreen';
    document.getElementById('textaqua').style.backgroundColor = '#999';
    document.getElementById('textbluev').style.backgroundColor = 'lawngreen';
    document.getElementById('textlawn').style.backgroundColor = 'lawngreen';
    document.getElementById('textsaddle').style.backgroundColor = 'lawngreen';
    document.getElementById('textchocolate').style.backgroundColor = 'lawngreen';
    document.getElementById('textgolden').style.backgroundColor = 'lawngreen';
});

document.getElementById('textgolden').addEventListener('click', function() {
    document.body.style.backgroundColor = 'goldenrod';
    document.getElementById('textlawn').style.backgroundColor = 'goldenrod';
    document.getElementById('textaqua').style.backgroundColor = 'goldenrod';
    document.getElementById('textsaddle').style.backgroundColor = 'goldenrod';
    document.getElementById('textbluev').style.backgroundColor = 'goldenrod';
    document.getElementById('textchocolate').style.backgroundColor = 'goldenrod';
    document.getElementById('textgolden').style.backgroundColor = 'goldenrod';
});

document.getElementById('textchocolate').addEventListener('click', function() {
    document.body.style.backgroundColor = 'chocolate';
    document.getElementById('textlawn').style.backgroundColor = 'chocolate';
    document.getElementById('textaqua').style.backgroundColor = 'chocolate';
    document.getElementById('textsaddle').style.backgroundColor = 'chocolate';
    document.getElementById('textbluev').style.backgroundColor = 'chocolate';
    document.getElementById('textchocolate').style.backgroundColor = 'chocolate';
    document.getElementById('textgolden').style.backgroundColor = 'chocolate';
});

document.getElementById('textbluev').addEventListener('click', function() {
    document.body.style.backgroundColor = 'blueviolet';
    document.getElementById('textsaddle').style.backgroundColor = '#999';
    document.getElementById('textaqua').style.backgroundColor = 'blueviolet';
    document.getElementById('textlawn').style.backgroundColor = 'blueviolet';
    document.getElementById('textbluev').style.backgroundColor = 'blueviolet';
    document.getElementById('textchocolate').style.backgroundColor = 'blueviolet';
    document.getElementById('textgolden').style.backgroundColor = 'blueviolet';
});