input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    logging = true
    serial.writeLine("start")
})
input.onButtonPressed(Button.AB, function () {
    serial.writeLine("delete")
    basic.showIcon(IconNames.No)
    datalogger.deleteLog(datalogger.DeleteType.Full)
    basic.showString("deleted")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    logging = false
    serial.writeLine("end")
})
let logging = false
datalogger.setColumnTitles(
"Light",
"Temp"
)
loops.everyInterval(1000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("Light", input.lightLevel()),
        datalogger.createCV("Temp", input.temperature())
        )
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
    }
})
basic.forever(function () {
    serial.redirect(
    SerialPin.USB_TX,
    SerialPin.USB_RX,
    BaudRate.BaudRate115200
    )
    serial.redirectToUSB()
})
