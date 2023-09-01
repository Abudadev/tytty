player_name_one = ""
player_name_two = ""

function login_and_start(){
player_name_one = document.getElementById("player_one").value;
player_name_two = document.getElementById("player_two").value;

localStorage.setItem("player_1", player_name_one);
localStorage.setItem("player_2", player_name_two);

window.location = "index1.html";
}