class Form {
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("cars")
        title.position(150,50)
        var input=createInput("name")
        var button=createButton("Play")
        var greeting=createElement('h3')
        input.position(150,160)
        button.position(250,300)
        button.mousePressed(function () {
            input.hide()
            button.hide()
            var name =input.value()
            playerCount++
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello"+name)
            greeting.position(150,160)
        })
    }
}