basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . # .
                # . # # .
                # # # # .
                # . # # .
                . . . # .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            mbit_音乐类.Buzzer(DigitalPin.P0, mbit_音乐类.enBuzzer.Beep)
            basic.pause(400)
            mbit_音乐类.Buzzer(DigitalPin.P0, mbit_音乐类.enBuzzer.NoBeep)
            basic.pause(400)
        }
    }
})
