/**
 * Created by r730819 on 7/9/2016.
 */


var PlayerMoney = [[1000,"null"], [1000,"null"], [1000,"null"],
    [1000,"null"], [1000,"null"], [1000,"null"], [1000,"null"], [1000,"null"]];

function saveUserNamesInPlayerMoneyArray(){
    var i;

    for(i=0; i<PlayerListObject.length; i++){
        PlayerMoney[i][1] = PlayerListObject[i].name;
    }
}

/**
 * Save all players money
 */
function saveUserMoney(){
    var i, j;

    for(i=0; i<PlayerListObject.length; i++){
        for(j=0; j<PlayerMoney.length; j++){
            if(PlayerMoney[j][1] == PlayerListObject[i].name){
                PlayerMoney[j][0] = PlayerListObject[i].money;
            }
        }
    }
}

/**
 * Give all the players their money again after creating their object again
 */
function reinstantiateUserMoney(){
    var i, j;

    for(i=0; i<PlayerListObject.length; i++){
        for(j=0; j<PlayerMoney.length; j++){
            if(PlayerMoney[j][1] == PlayerListObject[i].name){
                PlayerListObject[i].money = PlayerMoney[j][0];
            }
        }
    }

    updateAllMoneysOnTable();
}

/**
 * Check the user if they have sufficient money or not
 */
function checkUserForNoMoney(){
    var i;

    console.log("CHECKING FOR MONEY");
    console.log(PlayerListObject);
    for(i=0; i<PlayerListObject.length; i++){
        if(PlayerListObject[i].money <= 0){
            console.log(PlayerListObject[i].name + " HAS NO MONEY");
            PlayerListObject.splice(i, "1");
            $('#'+PlayerListObject[i].name+'-hand').empty();
        }
    }

    if(PlayerListObject.length == 1){
        showEndGameMsg("Game Over\n" +
            PlayerListObject[0].name + " Wins\n" +
            "To play again, refresh the page.");
        return true;
    }

    return false;
}

/**
 * Every new turn take the blind from everyone and add
 * to the pot.  If they don't have the amount, take what's left.
 */
function takeTheBlindFromPlayersAndAddToPot(){
    var i;

    for(i=0; i<PlayerListObject.length; i++){
        if(PlayerListObject[i].money >= 250){
            PlayerListObject[i].money -= 250;
            ThePot += 250;
        }else{
            ThePot += PlayerListObject[i].money;
            PlayerListObject[i].money = 0;
        }
    }

    updateAllMoneysOnTable();

}

function updateAllMoneysOnTable(){
    var i;

    var pot = $('.current-pot');
    pot.empty();
    pot.append('Current Pot:$<span>'+ ThePot +'</span>');

    for(i=0; i<PlayerListObject.length; i++){
        var playerBank = $('#player'+PlayerListObject[i].name+'-bank')
        playerBank.empty();
        playerBank.append('$'+PlayerListObject[i].money);
    }
}

