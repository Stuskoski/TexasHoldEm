/**
 * Created by r730819 on 7/8/2016.
 */
function checkPlayer(){

    //check function

    if(!checkRaiseArray()){
        console.log(PlayerListObject[currentPlayerTurn].name + " unable to check");
        if(!theHumanHasFolded && currentPlayerTurn == 0){
            showAndThenHideInfoWindow("Previous player raised.  You must call, raise, or fold.");
        }
        updateAllMoneysOnTable();
        return false;
    }else{
        console.log(PlayerListObject[currentPlayerTurn].name + " Checked");
        nextTurn();
        updateAllMoneysOnTable();
        return true;
    }




}