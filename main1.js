var player_name_one = "";
var player_name_two = "";

function gapn(){
    player_name_one = localStorage.getItem("player_1");
    player_name_two = localStorage.getItem("player_2")

    document.getElementById("player_name1").innerHTML = player_name_one;
    document.getElementById("player_name2").innerHTML = player_name_two;

    document.getElementById("player_name11").innerHTML = player_name_one;
    document.getElementById("player_name22").innerHTML = player_name_two;
}

function send(){
    get_num = document.getElementById("num1").value;
    get_num2 = document.getElementById("num2").value;

    Q = "<h4>What is: " + get_num + "  X  " + get_num2 + "<h4> <br>";
    AIB = "<input type='number' placeholder='Answer here' id='IAB'> <br>";
    SB = "<button onclick='Submit'>Submit answer</button> <br>";
    GT = Q + AIB + SB;
    document.getElementById("output").innerHTML = GT;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}