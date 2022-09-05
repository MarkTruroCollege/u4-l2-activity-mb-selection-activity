input.onButtonPressed(Button.A, function () {
    number1 += 1
    basic.showNumber(number1)
})
input.onButtonPressed(Button.AB, function () {
    number1 = 0
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    if (number1 > 5) {
        basic.showIcon(IconNames.Happy)
    } else if (number1 == 3) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let number1 = 0
number1 = 0
