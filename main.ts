input.onButtonPressed(Button.A, function () {
    fram()
})
function venstre () {
    for (let indeks = 0; indeks <= radiogruppe_til - radiogruppe_fra; indeks++) {
        radio.setGroup(indeks + radiogruppe_fra)
        radio.sendString("venstre")
        radio.sendString("Venstre")
        radio.sendString("VENSTRE")
        radio.sendString("v")
        radio.sendString("V")
    }
}
input.onGesture(Gesture.TiltLeft, function () {
    venstre()
})
function stopp () {
    for (let indeks = 0; indeks <= radiogruppe_til - radiogruppe_fra; indeks++) {
        radio.setGroup(indeks + radiogruppe_fra)
        radio.sendString("stopp")
        radio.sendString("Stopp")
        radio.sendString("STOPP")
        radio.sendString("stans")
        radio.sendString("Stans")
        radio.sendString("STANS")
        radio.sendString("stop")
        radio.sendString("Stop")
        radio.sendString("STOP")
        radio.sendString("s")
        radio.sendString("S")
    }
}
function høyre () {
    for (let indeks = 0; indeks <= radiogruppe_til - radiogruppe_fra; indeks++) {
        radio.setGroup(indeks + radiogruppe_fra)
        radio.sendString("høyre")
        radio.sendString("Høyre")
        radio.sendString("HØYRE")
        radio.sendString("hoyre")
        radio.sendString("Hoyre")
        radio.sendString("HOYRE")
        radio.sendString("H")
        radio.sendString("h")
    }
}
input.onGesture(Gesture.Shake, function () {
    stopp()
})
input.onButtonPressed(Button.B, function () {
    bak()
})
function fram () {
    for (let indeks = 0; indeks <= radiogruppe_til - radiogruppe_fra; indeks++) {
        radio.setGroup(indeks + radiogruppe_fra)
        radio.sendString("fram")
        radio.sendString("Fram")
        radio.sendString("frem")
        radio.sendString("Frem")
        radio.sendString("FRAM")
        radio.sendString("FREM")
        radio.sendString("forover")
        radio.sendString("Forover")
        radio.sendString("FOROVER")
        radio.sendString("kjor")
        radio.sendString("kjør")
        radio.sendString("Kjor")
        radio.sendString("Kjør")
        radio.sendString("køyr")
        radio.sendString("Køyr")
        radio.sendString("Koyr")
        radio.sendString("KJØR")
        radio.sendString("KJOR")
        radio.sendString("KØYR")
        radio.sendString("KJØYR")
        radio.sendString("k")
        radio.sendString("K")
        radio.sendString("f")
        radio.sendString("F")
    }
}
input.onGesture(Gesture.TiltRight, function () {
    høyre()
})
function bak () {
    for (let indeks = 0; indeks <= radiogruppe_til - radiogruppe_fra; indeks++) {
        radio.setGroup(indeks + radiogruppe_fra)
        radio.sendString("bak")
        radio.sendString("Bak")
        radio.sendString("BAK")
        radio.sendString("bakover")
        radio.sendString("Bakover")
        radio.sendString("BAKOVER")
        radio.sendString("rygg")
        radio.sendString("Rygg")
        radio.sendString("RYGG")
        radio.sendString("Revers")
        radio.sendString("revers")
        radio.sendString("REVERS")
        radio.sendString("b")
        radio.sendString("B")
        radio.sendString("r")
        radio.sendString("R")
    }
}
let radiogruppe_til = 0
let radiogruppe_fra = 0
basic.showIcon(IconNames.Silly)
radiogruppe_fra = 0
radiogruppe_til = 255
