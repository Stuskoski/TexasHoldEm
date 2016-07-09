/**
 * Created by r730819 on 7/7/2016.
 *
 * Config all the game settings by
 * asking the user for them.
 */

var NewGame = true;

//Create object, set reference to it, hide menu
function startGame(){
    var numOfPlayers= $('#num-of-players').val();
    var numOfDecks= $('#num-of-decks').val();

    if(checkAllFields(numOfPlayers)) {
        var settingsObject = new SettingsObject($('#user-name-input').val(), numOfPlayers, numOfDecks);
        var i;

        setSettingsObject(settingsObject);

        $('#game-config-id').addClass("hide-me");

        InitDeck(numOfDecks);

        //init a new table cards object
        TableCardsStaticObject = new TableCardsObject();

        //instantiates a new list
        createPlayerList();
        var staticSettingsObject = getSettingsObject();

        //Create players and add them to static list
        console.log("Player Names: " + staticSettingsObject.playerNames);
        for(i=0; i<staticSettingsObject.numOfPlayers; i++){
            createPlayerAndAddToPlayerList(staticSettingsObject.playerNames[i], i+1);
        }

        setUpTable();

        nextDeckAction();

        $('.player'+(currentPlayerTurn+1)+'-title').addClass("highlight-words");
    }
}

//Create object, set reference to it, hide menu
function restartGame(){
    var i;
    var staticSettingsObject = getSettingsObject();

    NewGame = true;

    //clear the array
    TableCardsStaticObject = new TableCardsObject();

    //Reset the player
    theHumanHasFolded = false;

    //Set the deck action to 0 for new game
    DeckAction = 0;

    //Restart the turns
    currentPlayerTurn = 0;
    console.log("Game restarted: " + currentPlayerTurn);

    InitDeck(staticSettingsObject.numOfDecks);

    PlayerListObject.length = 0;
    //Create players and add them to static list

    console.log("Player Names: " + staticSettingsObject.playerNames);
    for(i=0; i<staticSettingsObject.numOfPlayers; i++){
        createPlayerAndAddToPlayerList(staticSettingsObject.playerNames[i], i+1);
    }

    setUpTable();

    nextDeckAction();

    $('.player'+(currentPlayerTurn+1)+'-title').addClass("highlight-words");
}

/**
 * Adds the player plus the number
 * of computers to the correct
 * fields
 */
function addComputers(){
    var numberOfPlayers = $('#num-of-players').val();
    var formList = $('#player-form-list');
    var i;
    var userName  = $('#user-name-input').val();
    var compNames = [];

    compNames[1] = $('#computer1-input').val();
    compNames[2] = $('#computer2-input').val();
    compNames[3] = $('#computer3-input').val();
    compNames[4] = $('#computer4-input').val();
    compNames[5] = $('#computer5-input').val();
    compNames[6] = $('#computer6-input').val();
    compNames[7] = $('#computer7-input').val();

    formList.empty();

    formList.append('<div class="pad-bottom-2em">' +
        '<label for="user-name-input" class="text-white pad-right-1em">Username:</label>' +
        '<input type="text" id="user-name-input" class="custom-form" value="'+userName+'">' +
        '</div>');


    for (i = 1; i < numberOfPlayers; i++) {
        if(compNames[i] == undefined){
            compNames[i] = '';
        }

        formList.append('<div class="pad-bottom-2em">' +
            '<label for="computer'+i+'-input" class="text-white pad-right-1em">Computer'+i+':</label>' +
            '<input type="text" id="computer'+i+'-input" class="custom-form" value="'+compNames[i]+'">' +
            '</div>');
    }
}


//Check if fields are empty or not
function checkAllFields(numOfPlayers){
    var allFieldsNotEmpty = true;
    var i;

    if($('#user-name-input').val() == ''){
        allFieldsNotEmpty = false;
    }
    for(i=1; i <= numOfPlayers; i++){
        var computerCheck = $('#computer'+i+'-input');
        if(computerCheck.val() == ''){
            showAndThenHideInfoWindow("Names can not be empty");
            allFieldsNotEmpty = false;
        }
    }//computer'+i+'-input

    return allFieldsNotEmpty;
}


