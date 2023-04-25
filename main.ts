radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function reverse () {
    wuKong.setAllMotor(-100, -100)
}
function forkUP () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function forward () {
    wuKong.setAllMotor(100, 100)
}
function forkDOWN () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
	
})
