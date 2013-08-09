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

        alert(playerOneName + ":" + playerOneHealth + " ***START*** " + playerTwoName + ":" + playerTwoHealth);

        for(i = 0; i < 10; i++){
            //Random Formula - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;

            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

            //console.log(f1);
            //console.log(f2);

            //Inflict Damage
            playerOneHealth -= f1;
            playerTwoHealth -= f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);

            var result = winnerCheck();
            console.log(result);

            if(result === "No Winner"){
                round++;
                alert(playerOneName + ":" + playerOneHealth + " ***Round " + round + " Over***" + playerTwoName + ":" + playerTwoHealth);
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

        if(playerOneHealth < 1 && playerTwoHealth < 1){
            results = "You Both Die!";
        }
        else if(playerOneHealth < 1){
            results = playerTwoName + " WINS!!!";
        }
        else if(playerTwoHealth < 1){
            results = playerOneName + " WINS!!!";
        }
        return results;

    }

    //The program gets started below

    //console.log("Program Starts");
    fight();

})();


