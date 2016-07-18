/**
 * Created by r730819 on 7/8/2016.
 */

var previousPlayerRaised = false;
var raiseAmount = 100;
var raiseArray = [[],[]];

function raisePlayer(){
    if(checkIfINeedToRaiseOrCall()) {
        if (PlayerListObject[currentPlayerTurn].money >= 200) {
            console.log(PlayerListObject[currentPlayerTurn].name + " Raised");


            if (PlayerListObject[currentPlayerTurn].money >= raiseAmount) {
                PlayerListObject[currentPlayerTurn].money -= raiseAmount;
                ThePot += raiseAmount;
            } else {
                ThePot += PlayerListObject[currentPlayerTurn].money;
                PlayerListObject[currentPlayerTurn].money = 0;
            }



            createRaiseArray();
            raiseArray[currentPlayerTurn][1] = true; //has raised

            if (PlayerListObject[currentPlayerTurn].money >= raiseAmount) {
                PlayerListObject[currentPlayerTurn].money -= raiseAmount;
                ThePot += raiseAmount;

                /*if(previousPlayerRaised){
                 raiseAmount += raiseAmount;
                 }*/

            } else {
                ThePot += PlayerListObject[currentPlayerTurn].money;

                /*if(previousPlayerRaised){
                 raiseAmount += PlayerListObject[currentPlayerTurn].money;
                 }*/


                PlayerListObject[currentPlayerTurn].money = 0;
            }

            previousPlayerRaised = true;

            updateAllMoneysOnTable();

            if (currentPlayerTurn == PlayerListObject.length - 1) {
                //check the array if good, next turn, else set to first player to continue raising
                if (!checkRaiseArray()) {
                    currentPlayerTurn = -1; //set to -1 bc the nextTurn() function will ++ to turn 0
                }
            }

            //if last player raised, reset the turn
            nextTurn();



        } else {
            showAndThenHideInfoWindow("You don't have any money to raise 200")
        }
    }else{
        if (PlayerListObject[currentPlayerTurn].money >= 100) {
            console.log(PlayerListObject[currentPlayerTurn].name + " Raised");

            createRaiseArray();
            raiseArray[currentPlayerTurn][1] = true; //has raised

            if (PlayerListObject[currentPlayerTurn].money >= raiseAmount) {
                PlayerListObject[currentPlayerTurn].money -= raiseAmount;
                ThePot += raiseAmount;

                /*if(previousPlayerRaised){
                 raiseAmount += raiseAmount;
                 }*/

            } else {
                ThePot += PlayerListObject[currentPlayerTurn].money;

                /*if(previousPlayerRaised){
                 raiseAmount += PlayerListObject[currentPlayerTurn].money;
                 }*/


                PlayerListObject[currentPlayerTurn].money = 0;
            }

            previousPlayerRaised = true;

            updateAllMoneysOnTable();

            if (currentPlayerTurn == PlayerListObject.length - 1) {
                //check the array if good, next turn, else set to first player to continue raising
                if (!checkRaiseArray()) {
                    currentPlayerTurn = -1; //set to -1 bc the nextTurn() function will ++ to turn 0
                }
            }

            //if last player raised, reset the turn
            nextTurn();



        } else {
            showAndThenHideInfoWindow("You don't have any money to raise 100")
        }
    }
}

function resetRaise(){
    previousPlayerRaised = false;
    raiseAmount = 100;
}

//instantiate at beginning of game as well as restart, and every time someone raises
function createRaiseArray(){
    var i;

    raiseArray.length = 0;

    for(i=0; i<PlayerListObject.length; i++){
        raiseArray[i] = [];
        raiseArray[i][0] = PlayerListObject[i]; //player
        raiseArray[i][1] = false; //has raised
    }

}

//remove player from the array if they folded
function playerFoldedRemoveFromRaiseArray(){
    raiseArray.splice(currentPlayerTurn,1);
}

function checkRaiseArray(){
    var check = true;
    var i;

    //If not everyone has raised, set check to false
    for(i=0; i<raiseArray.length; i++){
        if(raiseArray[i][1] == false){
            check = false;
        }
    }

    if(check){
        raiseArray.length = 0;
    }

    return check;

}

function checkIfINeedToRaiseOrCall(){
    var check = false;

    if(raiseArray.length != 0){
        if(raiseArray[currentPlayerTurn][1] == false){
            check = true;
        }
    }


    return check;
}