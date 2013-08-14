//Jordan Wilson
//Goal4 - Week2 Duel3
//8-6-13

//self-executing function
(function(){
    console.log("FIGHT!!!");

    //Player Names
    //var playerOneName = "VID";
    //var playerTwoName = "NEGA-VID";

    //Player Damages
    //var player1Damage = 20;
    //var player2Damage = 20;

    //Players Health
    //var playerOneHealth = 100;
    //var playerTwoHealth = 100;

    //var playerOne = ["VID", 20, 100];
    //var playerTwo = ["NEGA-VID", 20, 100];
    var fighters = [
    playerOne = {
        name: "Vid",
        damage: 20,
        health: 100
        },
     playerTwo = {
         name: "Nega-Vid",
         damage: 20,
         health: 100
     }];

    var button = document.querySelector('.buttonblue');


    var round = 1;
    document.querySelector('#round_number').innerHTML = "Start Round: " + round + " FIGHT!!!";


})();


