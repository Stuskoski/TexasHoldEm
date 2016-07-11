/**
 * Created by r730819 on 7/8/2016.
 */

var previousPlayerRaised = false;
var raiseAmount;

function raisePlayer(){
    console.log("Player Raised");

    previousPlayerRaised = true;

    //raise the pot

    nextTurn();
}