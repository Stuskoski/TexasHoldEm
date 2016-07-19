/**
 * Created by r730819 on 7/8/2016.
 */

var highCards = [];

function whoWins(){
    var list = PlayerListObject;
    var i;
    var tableCards = TableCardsStaticObject.list;
    var nonFoldedPlayers = 0;
    var winner;

   // DeckAction = 0;
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
        var tableContainer = $('.table-btn-container');
        tableContainer.append('<div class="player-winning center-div margin-bot-1em">'+PlayerListObject[winner].name +' wins the round!</div>');
        //showAndThenHideInfoWindow(PlayerListObject[winner].name + " wins the round!");
        PlayerListObject[winner].money += ThePot;
        ThePot = 0;
        saveUserMoney();
        showCardsAfterRounds();
        //saveUserMoney();
    }else{
        givePlayersTheirCurrentHandScores();
        saveUserMoney();
        showCardsAfterRounds();
        checkHandScores();
    }



   // restartGame();
}

function checkHandScores(){
    var list = PlayerListObject;
    var i;
    var maxHand = 0;
    var winningHand = null;
    var tempPlayer;
    var maxHandPosition;
    var drawBreaker = false;

    //Find max score hand
    for(i=0; i<list.length; i++) {
        if(list[i].handRank > maxHand){
            maxHand = list[i].handRank;
            tempPlayer = list[i];
            maxHandPosition = i;
        }
    }

    var drawScore = tempPlayer.handRank;
    var drawPlayers = [];

    for(i=0; i<list.length; i++) {
        if(list[i].handRank == drawScore){
            drawPlayers.push(list[i]);
        }
    }

    if(drawPlayers.length >= 2){
        //determine draw
        tempPlayer = determineDrawWinner(drawPlayers);
        drawPlayers.length = 0;
        drawBreaker = true;
    }

    switch (tempPlayer.handRank){
        case 1:
            //high card
            winningHand = "";
            //maxHandPosition = findHighCardAndEmptyArray();
            //tempPlayer = list[maxHandPosition];
            break;
        case 2:
            //1 pair
            winningHand = "1 Pair";
            break;
        case 3:
            //2 pair
            winningHand = "2 Pair";
            break;
        case 4:
            //3 kind
            winningHand = "3 of A Kind";
            break;
        case 5:
            //straight
            winningHand = "Straight";
            break;
        case 6:
            //flush
            winningHand = "Flush";
            break;
        case 7:
            //full house
            winningHand = "Full House";
            break;
        case 8:
            //4
            winningHand = "4 of A Kind";
            break;
        case 9:
            //straight flush
            winningHand = "Straight Flush";
            break;
        case 10:
            //royal flush
            winningHand = "Royal Flush";
            break;
    }

    tempPlayer.money += ThePot;

    //PlayerListObject[maxHandPosition].money += ThePot;

    ThePot = 0;

    var tableContainer = $('.table-btn-container');

    var tieBreakerMsg = "!";
    if(drawBreaker && tempPlayer.handRank != 1){
        tieBreakerMsg = " and a high card!";
        drawBreaker = false;
    }

    if(drawBreaker && tempPlayer.handRank == 1){
        tieBreakerMsg = "High Card!";
        drawBreaker = false;
    }

    tableContainer.append('<div class="player-winning center-div margin-bot-1em">'+tempPlayer.name + ' wins the round with a ' + winningHand + tieBreakerMsg + '</div>');
    //alert(tempPlayer.name + " wins the round with a " + winningHand + "\n Hand: \n" + tempPlayer.hand[0].cardValue + ", " + tempPlayer.hand[0].cardSuit + "\n" +
     //   tempPlayer.hand[1].cardValue + ", " + tempPlayer.hand[1].cardSuit + "\n Table: " + TableCardsStaticObject.tableCardsToString());
    console.log(tempPlayer.name + " wins the round with a " + winningHand + "\n Hand: \n" + tempPlayer.hand[0].cardValue + ", " + tempPlayer.hand[0].cardSuit + "\n" +
        tempPlayer.hand[1].cardValue + ", " + tempPlayer.hand[1].cardSuit + "\n Table: " + TableCardsStaticObject.tableCardsToString());
    //showAndThenHideInfoWindow(tempPlayer.name + " wins the round with a " + winningHand);
}

function determineDrawWinner(drawPlayersArray){
    var highCards = [[],[]];
    var i;
    var highCard = 0;
    var maxPlayer;
    var highCardPlayerCounter = 0;

    //get the high cards of every hand
    for(i=0; i<drawPlayersArray.length; i++){
        highCards[i] = [];

        highCards[i][0] = (findHighCardFromUserHand(drawPlayersArray[i].hand));
        highCards[i][1] = (drawPlayersArray[i]);
    }

    for(i=0; i<highCards.length; i++){
        if(highCards[i][0].cardValue >= highCard){
            highCard = highCards[i][0].cardValue;
            maxPlayer = highCards[i][1];
            highCardPlayerCounter++;
        }
    }

    if(highCardPlayerCounter >= 2){
        console.error("MULTIPLE PLAYERS WITH SAME HIGH CARDS, HANDLE THIS!");
    }

    return maxPlayer;
}

function findHighCardFromUserHand(hand){
    var sortedHand;

    sortedHand = sortArrayOfCardsByNum(hand);

    return sortedHand[sortedHand.length-1];
}

function givePlayersTheirCurrentHandScores(){
    var i;
    var list = PlayerListObject;

    for(i=0; i<list.length; i++){
        if(!list[i].hasFolded){
            var sortedOnlyHand;
            var combined = list[i].hand.concat(TableCardsStaticObject.list);
            var sorted;
            var continueFindingHands = true;

            sorted = sortArrayOfCardsByNum(combined);
            sortedOnlyHand = sortArrayOfCardsByNum(list[i].hand);

            console.log("SORTED ARRAY");
            console.log(sorted);


            if(checkRoyalFlush(sorted) && continueFindingHands){
                //check for tie
                //check for tie breaker if so
                list[i].handRank = 10;
                console.log(list[i].name + " has a royal flush");
                continueFindingHands = false;
            }

            if(checkStraightFlush(sorted) && continueFindingHands){
                list[i].handRank = 9;
                console.log(list[i].name + " has a straight flush");
                continueFindingHands = false
            }
            if(check4OfAKind(sorted) && continueFindingHands){
                list[i].handRank = 8;
                console.log(list[i].name + " has a 4 of a kind");
                continueFindingHands = false;
            }
            if(checkFullHouse(sorted) && continueFindingHands){
                list[i].handRank = 7;
                console.log(list[i].name + " has a full house");
                continueFindingHands = false;
            }
            if(checkFlush(sorted) && continueFindingHands){
                list[i].handRank = 6;
                console.log(list[i].name + " has a flush");
                continueFindingHands = false;
            }
            if(checkStraight(sorted) && continueFindingHands){
                list[i].handRank = 5;
                console.log(list[i].name + " has a straight");
                continueFindingHands = false;
            }
            if(check3OfAKind(sorted) && continueFindingHands){
                list[i].handRank = 4;
                console.log(list[i].name + " has a 3 of a kind");
                continueFindingHands = false;
            }
            if(check2Pair(sorted) && continueFindingHands){
                list[i].handRank = 3;
                console.log(list[i].name + " has a 2 pair");
                continueFindingHands = false;
            }
            if(check1Pair(sorted) && continueFindingHands){
                list[i].handRank = 2;
                console.log(list[i].name + " has a 1 pair");
                continueFindingHands = false;
            }
            if(checkHighCard(sortedOnlyHand) && continueFindingHands){
                list[i].handRank = 1;
                console.log(list[i].name + " has a high card");
                continueFindingHands = false;
            }
        }
    }
}

function findHighCardAndEmptyArray(){
    var i, highCardPos = 0, maxCard = 0;

    for(i=0; i<highCards.length; i++){
        if(highCards[i].cardValue > maxCard){
            highCardPos = i;
            maxCard = highCards[i].cardValue;
        }
    }

    highCards.length = 0;

    return highCardPos;
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

        if(cardsInARow == 4){

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
    var matches = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue)){
            matches++;
            tempCardValue = hand[i].cardValue;
        }else{
            matches = 0;
            tempCardValue = hand[i].cardValue;
        }

        if(matches == 3){
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
    var matches = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;
    var position = 0;
    var cardsThatWereThree = null;
    var cardsThatWereTwo = null;

    //Check for three card pair
    for (i = 1; i < hand.length; i++) {//start on the second card in the hand
        if (hand[i].cardValue == (tempCardValue)) {
            matches++;
            tempCardValue = hand[i].cardValue;
        } else {
            matches = 0;
            tempCardValue = hand[i].cardValue;
        }

        if (matches == 2) {
            position = i; //save last position
            cardsThatWereThree = hand[i].cardValue;
            break;
        }
    }

    matches = 0;

    //Check for two card pair
    for (i = 1; i < hand.length; i++) {//start on the second card in the hand
        if ((hand[i].cardValue == (tempCardValue)) && (hand[i].cardValue != cardsThatWereThree)){
            matches++;
            tempCardValue = hand[i].cardValue;
        } else {
            matches = 0;
            tempCardValue = hand[i].cardValue;
        }

        if (matches == 1) {
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

//todo failed to find a straight
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

        if(cardsInARow == 4){
            check = true;
            break;
        }
    }

    return check;
}
function check3OfAKind(hand){
    var check = false;
    var cardsMatching = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue)){
            cardsMatching++;
            tempCardValue = hand[i].cardValue;
        }else{
            cardsMatching = 0;
            tempCardValue = hand[i].cardValue;
        }

        //only 2 since its a match.  I.e) 1==1 ++, 1 == 1, ++ so 2 matches not 3
        if(cardsMatching == 2){
            check = true;
            break;
        }
    }

    return check;
}
function check2Pair(hand){
    var check = false;
    var pairs = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;
    var firstPair = null;
    var secondPair = null;

    //Check for first pair
    for (i = 1; i < hand.length; i++) {//start on the second card in the hand
        if (hand[i].cardValue == (tempCardValue)) {
            pairs++;
            tempCardValue = hand[i].cardValue;
        } else {
            pairs = 0;
            tempCardValue = hand[i].cardValue;
        }

        if (pairs == 1) {
            firstPair = hand[i].cardValue;
            break;
        }
    }

    pairs = 0;

    //Check for second pair
    for (i = 1; i < hand.length; i++) {//start on the second card in the hand
        if ((hand[i].cardValue == (tempCardValue)) && (hand[i].cardValue != firstPair)){
            pairs++;
            tempCardValue = hand[i].cardValue;
        } else {
            pairs = 0;
            tempCardValue = hand[i].cardValue;
        }

        if (pairs == 1) {
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
    var pairs = 0;
    var tempCardValue = hand[0].cardValue; //initialize to first card in the hand
    var i;

    for(i=1; i<hand.length; i++){//start on the second card in the hand
        if(hand[i].cardValue == (tempCardValue)){
            pairs++;
            tempCardValue = hand[i].cardValue;
        }else{
            pairs = 0;
            tempCardValue = hand[i].cardValue;
        }

        if(pairs == 1){
            check = true;
            break;
        }
    }

    return check;
}
function checkHighCard(hand){
    highCards.push(hand[hand.length - 1]);

    return true;
}

function sortArrayOfCardsByNum(cardArray){
    var i;
    var tempArray = [];
    var counter = 0; //break when 7

    while(counter < 7){
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
