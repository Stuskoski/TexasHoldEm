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
                    list[i].handRank = 10;
                    break;
                }

                if(checkStraightFlush(sorted)){
                    list[i].handRank = 9;
                    break;
                }
                if(check4OfAKind(sorted)){
                    list[i].handRank = 8;
                    break;
                }
                if(checkFullHouse(sorted)){
                    list[i].handRank = 7;
                    break;
                }
                if(checkFlush(sorted)){
                    list[i].handRank = 6;
                    break;
                }
                if(checkStraight(sorted)){
                    list[i].handRank = 5;
                    break;
                }
                if(check3OfAKind(sorted)){
                    list[i].handRank = 4;
                    break;
                }
                if(check2Pair(sorted)){
                    list[i].handRank = 3;
                    break;
                }
                if(check1Pair(sorted)){
                    list[i].handRank = 2;
                    break;
                }
                if(checkHighCard(sorted)){
                    list[i].handRank = 1;
                    break;
                }
            }
        }
        //check hand scores
    }



    restartGame();
}

/**
 * Checks the users hand to see if they have
 * a royal flush
 *
 * @param hand
 * @returns {boolean}
 */
function checkRoyalFlush(hand){
    var check = false;
    var cardsInARow = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;
    var checkIfCardArrayIsRoyal = [];

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue+1)){
            cardsInARow++;
            checkIfCardArrayIsRoyal.push(hand[i]);
            tempCardValue = hand[i].cardValue;
        }else{
            cardsInARow = 0;
            checkIfCardArrayIsRoyal.length = 0;
            tempCardValue = hand[i].cardValue;
        }
        if(cardsInARow >= 5){
            break;
        }
    }

    if(cardsInARow >= 5){
        var allRoyal = 0;
        //check for royal
        for(i=0; i<checkIfCardArrayIsRoyal.length; i++){
            if(checkIfCardArrayIsRoyal[i].cardValue >= 10){
                allRoyal++;
            }
        }

        if(allRoyal >= 5){
            check = true;
        }
    }

    return check;
}

function checkStraightFlush(hand){
    var check = false;
    var cardsInARow = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;
    var tempHand = [];

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue+1)){
            cardsInARow++;
            tempHand.push(hand[i]);
            tempCardValue = hand[i].cardValue;
        }else{
            cardsInARow = 0;
            tempHand.length = 0;
            tempCardValue = hand[i].cardValue;
        }

        if(cardsInARow == 5){

            if(checkFlush(tempHand)){ //check if those 5 cards are a flush
                check = true;
            }

            break;
        }
    }



    return check;
}
function check4OfAKind(hand){
    var check = false;
    var cardsInARow = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue+1)){
            cardsInARow++;
            tempCardValue = hand[i].cardValue;
        }else{
            cardsInARow = 0;
            tempCardValue = hand[i].cardValue;
        }

        if(cardsInARow == 4){
            check = true;
            break;
        }
    }

    return check;
}

/**
 * Three cards of the same rank and two cards
 * of the same rank check
 *
 * ex) K K K 10 10
 *
 * @param hand
 * @returns {boolean}
 */
function checkFullHouse(hand) {
    var check = false;
    var cardsInARow = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;
    var position = 0;
    var cardsThatWereThree = null;
    var cardsThatWereTwo = null;

    //Check for three card pair
    for (i = 1; i < hand.length; i++) {//start on the second card in the hand
        if (hand[i].cardValue == (tempCardValue + 1)) {
            cardsInARow++;
            tempCardValue = hand[i].cardValue;
        } else {
            cardsInARow = 0;
            tempCardValue = hand[i].cardValue;
        }

        if (cardsInARow == 3) {
            position = i; //save last position
            cardsThatWereThree = hand[i].cardValue;
            break;
        }
    }

    //Check for two card pair
    for (i = 1; i < hand.length; i++) {//start on the second card in the hand
        if ((hand[i].cardValue == (tempCardValue + 1)) && (hand[i].cardValue != cardsThatWereThree)){
            cardsInARow++;
            tempCardValue = hand[i].cardValue;
        } else {
            cardsInARow = 0;
            tempCardValue = hand[i].cardValue;
        }

        if (cardsInARow == 2) {
            position = i; //save last position
            cardsThatWereTwo = hand[i].cardValue;
            break;
        }
    }

    if(cardsThatWereThree!=null && cardsThatWereTwo!=null){
        check = true;
    }

    return check;
}

/**
 * All have the same suit check
 *
 * @param hand
 * @returns {boolean}
 */
function checkFlush(hand){
    var check = false;
    var i;
    var spades = 0;
    var hearts = 0;
    var clubs = 0;
    var diamonds = 0;

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardSuit == "spades"){
            spades++;
        }
        if(hand[i].cardSuit == "hearts"){
            hearts++;
        }
        if(hand[i].cardSuit == "clubs"){
            clubs++;
        }
        if(hand[i].cardSuit == "diamonds"){
            diamonds++;
        }
    }

    if(spades >= 5 || hearts>=5 || clubs >= 5 || diamonds >= 5){
        check = true;
    }

    return check;
}
function checkStraight(hand){
    var check = false;
    var cardsInARow = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue+1)){
            cardsInARow++;
            tempCardValue = hand[i].cardValue;
        }else{
            cardsInARow = 0;
            tempCardValue = hand[i].cardValue;
        }

        if(cardsInARow == 5){
            check = true;
            break;
        }
    }

    return check;
}
function check3OfAKind(hand){
    var check = false;
    var cardsInARow = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue+1)){
            cardsInARow++;
            tempCardValue = hand[i].cardValue;
        }else{
            cardsInARow = 0;
            tempCardValue = hand[i].cardValue;
        }

        if(cardsInARow == 3){
            check = true;
            break;
        }
    }

    return check;
}
function check2Pair(hand){
    var check = false;
    var cardsInARow = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;
    var firstPair = null;
    var secondPair = null;

    //Check for first pair
    for (i = 1; i < hand.length; i++) {//start on the second card in the hand
        if (hand[i].cardValue == (tempCardValue + 1)) {
            cardsInARow++;
            tempCardValue = hand[i].cardValue;
        } else {
            cardsInARow = 0;
            tempCardValue = hand[i].cardValue;
        }

        if (cardsInARow == 2) {
            firstPair = hand[i].cardValue;
            break;
        }
    }

    //Check for second pair
    for (i = 1; i < hand.length; i++) {//start on the second card in the hand
        if ((hand[i].cardValue == (tempCardValue + 1)) && (hand[i].cardValue != firstPair)){
            cardsInARow++;
            tempCardValue = hand[i].cardValue;
        } else {
            cardsInARow = 0;
            tempCardValue = hand[i].cardValue;
        }

        if (cardsInARow == 2) {
            secondPair = hand[i].cardValue;
            break;
        }
    }

    if(firstPair!=null && secondPair!=null){
        check = true;
    }

    return check;
}
function check1Pair(hand){
    var check = false;
    var cardsInARow = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue+1)){
            cardsInARow++;
            tempCardValue = hand[i].cardValue;
        }else{
            cardsInARow = 0;
            tempCardValue = hand[i].cardValue;
        }

        if(cardsInARow == 2){
            check = true;
            break;
        }
    }

    return check;
}
function checkHighCard(hand){
    var highCard = hand[hand.length - 1];
    return true;
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