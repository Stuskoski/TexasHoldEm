/**
 * Created by r730819 on 7/8/2016.
 */

function whoWins(){
    var list = PlayerListObject;
    var i;
    var tableCards = TableCardsStaticObject.list;
    var nonFoldedPlayers = 0;
    var winner;

    DeckAction = 0;
    currentPlayerTurn = 0;


    //check for only one player left first
    for(i=0; i<PlayerListObject.length; i++){
        PlayerListObject[i].isItMyTurn = false;//set everyone to not having a turn
        if(!PlayerListObject[i].hasFolded){
            nonFoldedPlayers++;
            winner = i;
        }
    }

    if(nonFoldedPlayers <= 1){
        showAndThenHideInfoWindow(PlayerListObject[winner].name + " wins the round!");
        PlayerListObject[winner].money += ThePot;
        ThePot = 0;
        saveUserMoney();
    }else{
        for(i=0; i<list.length; i++){
            if(!list[i].hasFolded){
                //var hand = list[i].hand;
                var combined = list[i].hand.concat(TableCardsStaticObject.list);
                var sorted;

                sorted = sortArrayOfCardsByNum(combined);

                console.log("SORTED ARRAY");
                console.log(sorted);


                if(checkRoyalFlush(sorted)){
                    //check for tie
                    //check for tie breaker if so
                }

                if(checkStraightFlush(sorted)){

                }
                if(check4OfAKind(sorted)){

                }
                if(checkFullHouse(sorted)){

                }
                if(checkFlush(sorted)){

                }
                if(checkStraight(sorted)){

                }
                if(check3OfAKind(sorted)){

                }
                if(check2Pair(sorted)){

                }
                if(check1Pair(sorted)){

                }
                if(checkHighCard(sorted)){

                }
                //check straight flush
                //check four of a kind
                //check full house
                //check flush
                //check straight
                //check 3 of a kind
                //check 2 pair
                //check 1 pair
                //check high card
                //console.log(TableCardsStaticObject);
            }
        }
    }



    restartGame();
}

function checkRoyalFlush(hand){
    var check = false;
    var tableHand = TableCardsStaticObject;



    return check;
}

function checkStraightFlush(hand){
    var check = false;
    var tableHand = TableCardsStaticObject;

    return check;

}
function check4OfAKind(hand){
    var check = false;

    return check;

}
function checkFullHouse(hand){
    var check = false;

    return check;

}
function checkFlush(hand){
    var check = false;

    return check;
}
function checkStraight(hand){
    var check = false;

    return check;
}
function check3OfAKind(hand){
    var check = false;

    return check;
}
function check2Pair(hand){
    var check = false;

    return check;
}
function check1Pair(hand){
    var check = false;

    return check;
}
function checkHighCard(hand){
    var check = false;

    return check;
}

function sortArrayOfCardsByNum(cardArray){
    var i;
    var tempArray = [];
    var counter = 0; //break when 7

    while(counter < 7){
        console.log("counter: " + counter);
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 2){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 3){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 4){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 5){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 6){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 7){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 8){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 9){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 10){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 11){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 12){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 13){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
        for(i=0; i<cardArray.length; i++){
            if(cardArray[i].cardValue == 14){
                tempArray.push(cardArray[i]);
                counter++;
            }
        }
    }

    return tempArray;
}

function sortArrayOfCardsBySuit(preSortedArray) {
    var i;
    var tempArray = [];
    var counter = 0; //break when 7
    var twosArray = [],
        threesArray = [],
        foursArray = [],
        fivesArray = [],
        sixesArray = [],
        sevensArray = [],
        eightsArray = [],
        ninesArray = [],
        tensArray = [],
        elevensArray = [],
        twelvesArray = [],
        thirteensArray = [],
        fourteensArray = [];

    //spades clubs, hearts, diamonds
    //diamonds, clubs, hearts, spades
    for (i=0; i<preSortedArray.length; i++) {
        if(preSortedArray[i].cardValue == 14){
            tempArray.push(preSortedArray[i]);
            counter++;
        }

    }

    return tempArray;
}