let IR_waarde = 0
IR.IR_init()
basic.forever(function () {
    IR_waarde = IR.IR_read()
})
basic.forever(function () {
    basic.showNumber(IR_waarde)
})
basic.forever(function () {
    let vooruit = 0
    if (IR_waarde == vooruit) {
        let rechts = 0
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        if (IR_waarde == rechts) {
            let achteruit = 0
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            if (IR_waarde == achteruit) {
                let links = 0
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
