/**
 * Created by r730819 on 7/8/2016.
 */
function checkPlayer(){
    console.log(PlayerListObject[currentPlayerTurn].name + " Checked");
    //check function

    if(!checkRaiseArray()){
        if(!theHumanHasFolded && currentPlayerTurn == 0){
            showAndThenHideInfoWindow("Previous player raised.  You must call, raise, or fold.");
        }
        updateAllMoneysOnTable();
        return false;
    }else{
        nextTurn();
        updateAllMoneysOnTable();
        return true;
    }




}