/**
 *
 * Created by r730819 on 7/7/2016.
 */

function setUpTable(){
    var homeDiv = $('#home-div');

    homeDiv.empty();
    //Current Turn:<span>'+ PlayerListObject[currentPlayerTurn].name +'</span>

    homeDiv.append(
        '<div class="player-turn">Current Turn:<span>'+ PlayerListObject[currentPlayerTurn].name +'</span></div>' +
        '<div class="current-pot">Current Pot:$<span>'+ ThePot +'</span></div>');

    homeDiv.append('<div class="">' +
        '<div class="next-step">Deal</div>' +
        '<img class="table-deck" src="'+DeckReference.deckImg.src+'">' +
        '</div>');
    //check call raise fold
    homeDiv.append('<div class="table-btn-container">' +
    '<div id="check-btn" class="table-btn-check custom-btn-xs center-div margin-bot-1em" onclick="checkPlayer()">Check</div>' +
    '<div id="call-btn" class="table-btn-call custom-btn-xs center-div margin-bot-1em" onclick="callPlayer()">Call</div>' +
    '<div id="raise-btn" class="table-btn-raise custom-btn-xs center-div margin-bot-1em" onclick="raisePlayer()">Raise</div>' +
    '<div id="fold-btn" class="table-btn-fold custom-btn-xs center-div" onclick="foldPlayer(); setHumanFolded();">Fold</div>' +
    '</div>');


}
