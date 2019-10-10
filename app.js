const display = document.getElementById('display')
const result = document.getElementById('result')

let number = false

function add(char) {
    if (number == false) {
        if (isNaN(char) == true) {

        } else {
            display.value = display.value + char
        }
    } else {
        display.value = display.value + char
    }

    if (isNaN(char) == true) {
        number = false
    } else {
        number = true
    }
}

function equal() {
    result.value = eval(display.value)
}

function ac() {
    display.value = null
    result.value = null
}

document.onkeyup = function(e) {
    if(e.which == 13) {
        result.value = eval(display.value)
    }
    
}