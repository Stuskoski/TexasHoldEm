/**
 *
 * Created by r730819 on 7/7/2016.
 */

function setUpTable(){
    var homeDiv = $('#home-div');

    homeDiv.empty();

    homeDiv.append('<div class="player-turn">Current Turn:<span>Player 1</span></div>');

    homeDiv.append('<div class="">' +
        '<div class="next-step">Deal</div>' +
        '<img onClick = "nextDeckAction();" class="table-deck" src="'+DeckReference.deckImg.src+'">' +
        '</div>');
    //check call raise fold
    homeDiv.append('<div class="table-btn-container">' +
    '<div class="table-btn-check custom-btn-xs center-div margin-bot-1em" onclick="playerCheck()">Check</div>' +
    '<div class="table-btn-call custom-btn-xs center-div margin-bot-1em" onclick="playerCall()">Call</div>' +
    '<div class="table-btn-raise custom-btn-xs center-div margin-bot-1em" onclick="playerRaise()">Raise</div>' +
    '<div class="table-btn-fold custom-btn-xs center-div" onclick="playerFold()">Fold</div>' +
    '</div>');


}
