/**
 * Created by r730819 on 7/8/2016.
 */
function foldPlayer(){
    console.log(PlayerListObject[currentPlayerTurn].name + " Folded");

    $('#'+PlayerListObject[currentPlayerTurn].name+'-hand').empty();
    console.log('#'+PlayerListObject[currentPlayerTurn].name+'-hand' + ' was emptied');

    //Save the user money on fold
    saveUserMoney();

    playerFoldedRemoveFromRaiseArray();

    PlayerListObject.splice(currentPlayerTurn, 1);

    //update the current turn
    //If 0, next turn will take care of going to next person
    if(currentPlayerTurn != 0){
        currentPlayerTurn--;
    }

    if(currentPlayerTurn < 0){
        currentPlayerTurn = 0;
    }

    if(currentPlayerTurn == PlayerListObject.length-1){
        //check the array if good, next turn, else set to first player to continue raising
        if(!checkRaiseArray()){
            currentPlayerTurn = -1; //set to -1 bc the nextTurn() function will ++ to turn 0
        }
    }

    nextTurn();
}

function setHumanFolded(){
    theHumanHasFolded = true;
}