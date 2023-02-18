var input = document.querySelector('.calc-input'),
    digit_btn = document.querySelectorAll(".d"),
    calc_buttons = document.querySelector(".calc-button-block")
const syntax_err = "Помилка в прикладі"
const zero_div_err = "На нуль ділити не можна"
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
calc_buttons.addEventListener('click', function (e) {
    if (e.target.classList.contains('d')) {
        input.style.color = "#000"
        if (input.value == syntax_err || input.value == zero_div_err || input.value == "0") {
            input.value = ""
        }
        input.value += e.target.innerHTML
    }
    if (e.target.classList.contains('eval')) {
        try{
            input.style.color = "#000"
            res = eval(input.value)
            input.value = res 
        }
        catch (SyntaxError) {
            input.style.color = "rgba(228, 47, 47, 0.8)"
            input.value = syntax_err   
        }

    }
    if (e.target.classList.contains('clear-all')) {
        input.value = "0"
    }
    // s.slice(0, -1)
    if (e.target.classList.contains('backspace')) {
        input.value = input.value.slice(0, -1)
    }
    if (e.target.classList.contains('scopes')) {
        if (digits.includes(input.value.slice(-1)) && input.value.includes("(")) {
            input.value += ")"
        } else {
            input.value += "("
        }
    }
    if (e.target.classList.contains('op')) {
        input.value += e.target.innerHTML
    }
    if (e.target.classList.contains('point')) {
        if (input.value == "0") {
            input.value += "."
        }
        else {input.value += "."}
    }
})
