//Jordan Wilson
//Goal2 - Week1 Duel2
//8-6-13

//self-executing function
(function(){
    console.log("FIGHT!!!");

    //Player Names
    var playerOneName = "VID";
    var playerTwoName = "NEGA-VID";

    //Player Damages
    var player1Damage = 20;
    var player2Damage = 20;

    //Players Health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var playerOne = ["VID", 20, 100];
    var playerTwo = ["NEGA-VID", 20, 100];

    var round = 0;

    function fight(){
        //code will go here
        //console.log("In the fight function");

        alert(playerOne[0] + ":" + playerOne[2] + " ***START*** " + playerTwo[0] + ":" + playerTwo[2]);

        for(i = 0; i < 10; i++){
            //Random Formula - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;

            var f1 = Math.floor(Math.random() * (playerOne[1] - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (playerTwo[1] - minDamage2) + minDamage2);

            //console.log(f1);
            //console.log(f2);

            //Inflict Damage
            playerOne[2] -= f1;
            playerTwo[2] -= f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(playerOne[0] + ":" + playerOne[2] + " " + playerTwo[0] + ":" + playerTwo[2]);

            var result = winnerCheck();
            console.log(result);

            if(result === "No Winner"){
                round++;
                alert(playerOne[0] + ":" + playerOne[2] + " ***Round " + round + " Over***" + playerTwo[0] + ":" + playerTwo[2]);
            }
            else{
                alert(result);
                break;
            }
        }
    }

    function winnerCheck(){
        //code will go here
        //console.log("in winnerCheck FN");
        var results = "No Winner";

        if(playerOne[2] < 1 && playerTwo[2] < 1){
            results = "You Both Die!";
        }
        else if(playerOne[2] < 1){
            results = playerTwo[0] + " WINS!!!";
        }
        else if(playerTwo[2] < 1){
            results = playerOne[0] + " WINS!!!";
        }
        return results;

    }

    //The program gets started below

    //console.log("Program Starts");
    fight();

})();


