input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(-10)
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(10)
})
music.setBuiltInSpeakerEnabled(false)
music.setTempo(120)
music.setVolume(127)
basic.showLeds(`
    . . # . .
    . . # # .
    . . # . #
    # # # . .
    # # # . .
    `)
basic.forever(function () {
    music.playTone(523, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Half))
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
    }
})
