let stappen = 0
input.onGesture(Gesture.Shake, function () {
    stappen += 1
    basic.showNumber(stappen)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(stappen)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    stappen = 0
    basic.showNumber(stappen)
    basic.pause(200)
    basic.clearScreen()
})
 