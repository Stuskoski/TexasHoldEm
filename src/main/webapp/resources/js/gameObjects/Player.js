/**
 *
 *
 * Created by r730819 on 7/7/2016.
 */

function PlayerObject(name, playerNumber){
    this.name = name;
    this.playerNumber = playerNumber;
    this.hand = [];
    this.score = 0;
    this.money = 0;
    this.hasFolded = false;
    this.isItMyTurn = false;
}

// receives name and player number, creates player object and sends to the static list for keeping
function createPlayerAndAddToPlayerList(name, playerNumber){
    var player = new PlayerObject(name, playerNumber);

    addPlayerToPlayerList(player);

}
