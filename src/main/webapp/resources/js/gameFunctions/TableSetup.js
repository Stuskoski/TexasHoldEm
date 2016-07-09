/**
 *
 * Created by r730819 on 7/7/2016.
 */

function setUpTable(){
    var homeDiv = $('#home-div');

    homeDiv.empty();
    //Current Turn:<span>'+ PlayerListObject[currentPlayerTurn].name +'</span>

    homeDiv.append(
        '<div class="player-turn">Current Turn:<span>'+ PlayerListObject[currentPlayerTurn].name +'</span></div>');

    homeDiv.append('<div class="">' +
        '<div class="next-step">Deal</div>' +
        '<img onClick = "nextDeckAction();" class="table-deck" src="'+DeckReference.deckImg.src+'">' +
        '</div>');
    //check call raise fold
    homeDiv.append('<div class="table-btn-container">' +
    '<div class="table-btn-check custom-btn-xs center-div margin-bot-1em" onclick="checkPlayer()">Check</div>' +
    '<div class="table-btn-call custom-btn-xs center-div margin-bot-1em" onclick="callPlayer()">Call</div>' +
    '<div class="table-btn-raise custom-btn-xs center-div margin-bot-1em" onclick="raisePlayer()">Raise</div>' +
    '<div class="table-btn-fold custom-btn-xs center-div" onclick="foldPlayer()">Fold</div>' +
    '</div>');


}
