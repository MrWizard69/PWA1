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

    button.onclick = function(e){

        fight();

    };



    function fight(){
        //code will go here
        //console.log("In the fight function");

        //alert(fighters[0].name + ":" + fighters[0].health + " ***START*** " + fighters[1].name + ":" + fighters[1].health);

        if(round < 10){
            button.innerHTML = "FIGHT!";
            //Random Formula - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighters[0].damage * .5;
            var minDamage2 = fighters[1].damage * .5;

            var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2);

            //console.log(f1);
            //console.log(f2);

            //Inflict Damage
            fighters[0].health -= f1;
            fighters[1].health -= f2;

            ///Set HTML
            document.querySelector('#kabal p').innerHTML = fighters[0].health; //the CONNECTOR to HTML class ='#' id = '.'
            document.querySelector('#kratos p').innerHTML = fighters[1].health;
            //console.log("player 1:" + playerOne[2]);
            //console.log("player2:" + playerTwo[2]);

            console.log(fighters[0].name + ":" + fighters[0].health + " " + fighters[1].name + ":" + fighters[1].health);

            var result = winnerCheck();
            console.log(result);

            if(result === " No Winner"){
                document.querySelector('#round_number').innerHTML = "Round: " + round++ + results;
                //alert(fighters[0].name + ":" + fighters[0].health + " ***Round " + round + " Over***" + fighters[1].name + ":" + fighters[1].health);
            }
            else if(result = "VID Wins"){
                //alert(result);

            }
        }

    }


    function winnerCheck(){
        //code will go here
        //console.log("in winnerCheck FN");
        results = " No Winner";

        if(fighters[0].health < 1 && fighters[1].health < 1){
            document.querySelector('#round_number').innerHTML = results = "You Both Die! SHEET! ='[";
            fighters[0].health = 100;
            fighters[1].health = 100;
            round = 1;
            button.innerHTML = "Restart?";
        }
        else if(fighters[0].health < 1){
            document.querySelector('#round_number').innerHTML = results = fighters[1].name + " WINS!!! VICTORY! :D";
            fighters[0].health = 100;
            fighters[1].health = 100;
            round = 1;
            button.innerHTML = "Restart?";
        }
        else if(fighters[1].health < 1){
            document.querySelector('#round_number').innerHTML = results = fighters[0].name + " WINS!!! VICTORY! :D";
            fighters[0].health = 100;
            fighters[1].health = 100;
            round = 1;
            button.innerHTML = "Restart?";
        }
        return results;

    }

    //The program gets started below

    //console.log("Program Starts");
    //fight();

})();


