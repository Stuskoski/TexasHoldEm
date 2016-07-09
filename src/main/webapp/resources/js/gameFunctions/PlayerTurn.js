/**
 * Created by r730819 on 7/8/2016.
 */

var currentPlayerTurn = 0;//initial player turn
var removeCurrentPlayer = false;

function nextTurn(){
    var nonFoldedPlayers = 0;
    var i;


    console.log("Next Turn Called");

    if(PlayerListObject.length <= 1){
        whoWins();
    }else {


        currentPlayerTurn++;//set to the next person
        id="player-'+PlayerListObject[i].name+'-title"

        for (i = 0; i < PlayerListObject.length; i++) {
            $('#player-' + PlayerListObject[i].name + '-title').removeClass("highlight-words");
        }


        if(currentPlayerTurn > PlayerListObject.length){
            $('#player-' + PlayerListObject[0].name + '-title').addClass("highlight-words");
        }else{
            $('#player-' + PlayerListObject[currentPlayerTurn].name + '-title').addClass("highlight-words");
        }

        //$('.player' + (currentPlayerTurn + 1) + '-title').addClass("highlight-words");


        console.log(PlayerListObject);

        /*//Get number of valid players
         for(i=0; i<PlayerListObject.length; i++){
         PlayerListObject[i].isItMyTurn = false;//set everyone to not having a turn
         if(!PlayerListObject[i].hasFolded){
         nonFoldedPlayers++;
         }
         }

         if(nonFoldedPlayers <= 1){
         whoWins();
         }

         if(currentPlayerTurn <= nonFoldedPlayers) {
         console.log(nonFoldedPlayers + " players left");
         console.log("Current turn: " + PlayerListObject[currentPlayerTurn].name);
         }*/

        console.log("Current turn: " + currentPlayerTurn);
        if (currentPlayerTurn >= PlayerListObject.length) {
            var firstPlayer;
            var numberOfNonFoldedPlayers = 0;
            var isThereAPlayerNotFolded = false;

            //Go through the player list and find the first player not folded for their turn
            console.log("Finding first player");
            for (i = 0; i < PlayerListObject.length; i++) {
                if (!PlayerListObject[i].hasFolded) {
                    if (!isThereAPlayerNotFolded) {
                        firstPlayer = i;
                        isThereAPlayerNotFolded = true;
                    }
                    numberOfNonFoldedPlayers++;
                }
            }
            console.log("Is a player present: " + isThereAPlayerNotFolded);
            console.log("Number of non folded: " + numberOfNonFoldedPlayers);
            console.log("First player index is: " + firstPlayer);
            if (isThereAPlayerNotFolded && numberOfNonFoldedPlayers >= 2) {
                currentPlayerTurn = firstPlayer; //reset to the first player not folded
                nextDeckAction();
            }
        }

        //Enable the player to have a turn
        PlayerListObject[currentPlayerTurn].isItMyTurn = true;

        var playerTurnMsg = $('.player-turn');

        playerTurnMsg.empty();

        playerTurnMsg.append('Current Turn:<span>' + PlayerListObject[currentPlayerTurn].name + '</span>');

        console.log("The real turn: " + currentPlayerTurn);
        if(currentPlayerTurn == 0 && !theHumanHasFolded){ // todo add a check for the human
            document.getElementById('check-btn').style.pointerEvents = 'auto';
            document.getElementById('fold-btn').style.pointerEvents = 'auto';
            document.getElementById('raise-btn').style.pointerEvents = 'auto';
            document.getElementById('call-btn').style.pointerEvents = 'auto';
        }else{
            document.getElementById('check-btn').style.pointerEvents = 'none';
            document.getElementById('fold-btn').style.pointerEvents = 'none';
            document.getElementById('raise-btn').style.pointerEvents = 'none';
            document.getElementById('call-btn').style.pointerEvents = 'none';

            doComputerTurn();
        }


    }

}