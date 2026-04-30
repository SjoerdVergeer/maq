let IR_waarde = 0
let vooruit = 253
let achteruit = 125
let links = 31
let rechts = 6
IR.IR_init()
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
basic.forever(function () {
    if (IR_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        if (IR_waarde == rechts) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            if (IR_waarde == achteruit) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `)
                if (IR_waarde == links) {
                    let stop = 0
                    basic.showLeds(`
                        . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
                        `)
                    if (IR_waarde == stop) {
                        basic.showLeds(`
                            . . . . .
                            . # # # .
                            . # # # .
                            . # # # .
                            . . . . .
                            `)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
