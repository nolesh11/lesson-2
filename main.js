// function sum (a,b) {
//     let c = a + b
//     return c
// }

// function minus(a, b) {
//     return a - b
// }
// function multiply(a, b) {
//     return a * b
// }

// let multiply = (a,b) => a * b

// function divide(a, b) {
//     return a / b
// }

// function calc(opr) {
//     let x = +document.getElementsByName('x')[0].value
//     let y = +document.getElementsByName('y')[0].value
//     let z 

//     if(opr == '+') {
//         z = sum(x,y) 
//     } else if(opr == '-') {
//         z = minus(x,y)
//     }else if(opr == '*') {
//         z = multiply(x,y)
//     }else if(opr == '/') {
//         z = divide(x,y)
//     }

//     let span = document.querySelector('.result')
//     span.innerHTML = `Результат: ${z}`

//     return z
// }


document.getElementById('btn').addEventListener('click', function() {
    let phone = document.getElementById('number').value
    let error = document.getElementById('error')
    let user_name = document.getElementById('user_name').value
    if(phone.startsWith('+998')){
        alert(`Пользователь ${user_name} успешно зареган`)
        
    }else {
        error.textContent = 'Введен неверный формат номера телефона'
    }
    
})

let input_tel = document.getElementById('number1')

input_tel.onclick = function () {
    input_tel.value = '+'
}

let start = 0

input_tel.addEventListener('keydown', function () {
    let length = input_tel.value.length

    if(length == 4) {
        input_tel.value = input_tel.value + ' (';
    }
    if(length == 8) {
        input_tel.value = input_tel.value + ') ';
    }
    if(length == 13) {
        input_tel.value = input_tel.value + '-';
    }
    if(length == 16) {
        input_tel.value = input_tel.value + '-';
    }
    if (length > 18){
    	input_tel.value = input_tel.value.substring(0, input_tel.value.length - 1);
    }

    length++
    
})
