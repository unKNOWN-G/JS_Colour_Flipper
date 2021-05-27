const { white, blue } = require("color-name");

function changer()
{
    var a='0123456789ABCDEF';
    var val="";
    for(var i=0;i<6;i++)
        val+=a[Math.floor(Math.random()*16)];
    var final = '#'+val;
    document.getElementsByTagName("body")[0].setAttribute("style",`background-color:${val}`)
    document.getElementById("button2").style.backgroundColor = "black";
    document.getElementById("button2").innerHTML = "It's Good"
    console.log(final)
}

function smiley()
{
    document.getElementById("button2").style.backgroundColor = "white"
    document.getElementById("button2").innerHTML = '😎'
}