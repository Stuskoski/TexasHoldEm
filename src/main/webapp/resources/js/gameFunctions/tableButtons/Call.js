/**
 * Created by r730819 on 7/8/2016.
 */

function callPlayer(){
    console.log(PlayerListObject[currentPlayerTurn].name + " Called");

    if(checkIfINeedToRaiseOrCall()){
        if(PlayerListObject[currentPlayerTurn].money >= raiseAmount){
            PlayerListObject[currentPlayerTurn].money -= raiseAmount;
            ThePot += raiseAmount;
        }else{
            ThePot += PlayerListObject[currentPlayerTurn].money;
            PlayerListObject[currentPlayerTurn].money = 0;
        }

        if(raiseArray.length > 0){
            raiseArray[currentPlayerTurn][1] = true; //has raised
        }

        updateAllMoneysOnTable();

        if(currentPlayerTurn == PlayerListObject.length-1){
            //check the array if good, next turn, else set to first player to continue raising
            if(!checkRaiseArray()){
                currentPlayerTurn = -1; //set to -1 bc the nextTurn() function will ++ to turn 0
            }
        }

        //call function
        nextTurn();

        return true;
    }else{
        if(!theHumanHasFolded && currentPlayerTurn == 0){
            showAndThenHideInfoWindow("No player has raised.  You must either check, raise, or call.");
        }

        return false;
    }
}