class Form{

constructor(){

}
display(){
var title=createElement("h2")
title.html("MULTIPLAYER CAR RACING")
title.position(100,50)

var input=createInput('Name')
input.position(150,100)

var button=createButton("Play")
button.position(200,150)

var greeting=createElement("h3")

button.mousePressed(function(){
    input.hide()
    button.hide()
    var name=input.value()
    playerCount=playerCount+1
    player.update(name)
    player.updateCount(playerCount)
    greeting.html("Welcome to car racing game ,"+ name)
    greeting.position(150,150)
})

}



}