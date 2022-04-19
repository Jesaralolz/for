input.onButtonPressed(Button.A, function () {
    for (let X = 0; X <= 4; X++) {
        led.plot(X, 4 - X)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
