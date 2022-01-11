alert('Приветствую тебя на моей первой странице, созданной с помощью JavaScript');

confirm('Надеюсь, ты согласишься протестировать мой первый калькулятор на основные операции "сложение", "вычитание", "умножение", "деление"');

function following() {
    
}
alert('Спасибо, что согласился. Тогда поехали тестировать.');

alert('Небольшая инструкция' + ': '+ 'тебе нужно будет нажать на любую из кнопок с действием, ввести в диалоговые окна цифры и дождаться результата');

function sum() {
    let x = prompt("Введите первое число", 1);
    let y = prompt("Введите второе число", 2);

    alert(Number(x) + Number(y));    
}

function subtraction() {
    let x = prompt("Введите первое число", 1);
    let y = prompt("Введите второе число", 2);

    alert(Number(x) - Number(y));    
}

function multiplication() {
    let x = prompt("Введите первое число", 1);
    let y = prompt("Введите второе число", 2);

    alert(Number(x) * Number(y));    
}

function division() {
    let x = prompt("Введите первое число", 1);
    let y = prompt("Введите второе число", 2);

    alert(Number(x) / Number(y));    
}