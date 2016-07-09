/**
 * Created by r730819 on 7/8/2016.
 */

var PlayerListObject;
var theHumanHasFolded = false;

function createPlayerList(){
    PlayerListObject = [];
}

function addPlayerToPlayerList(player){
    PlayerListObject.push(player);
}

function removePlayerFromList(){
    PlayerListObject.pop();
}

function setPlayerList(setList){
    PlayerListObject = setList;
}

function getPlayerList(){
    return PlayerListObject;
}