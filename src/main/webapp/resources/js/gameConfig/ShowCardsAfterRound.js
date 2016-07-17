/**
 * Created by r730819 on 7/17/2016.
 */

function showCardsAfterRounds(){
    var i;
    var tableContainer = $('.table-btn-container');
    tableContainer.empty();
    tableContainer.append('<div class="table-btn-check custom-btn center-div margin-bot-1em" onclick="restartGame()">Next Round</div>');
    //<div class="table-btn-container">
    for(i=0; i<PlayerListObject.length; i++){

        $('#'+PlayerListObject[i].name+'c1').attr("src", PlayerListObject[i].hand[0].cardImg.src);
        $('#'+PlayerListObject[i].name+'c2').attr("src", PlayerListObject[i].hand[1].cardImg.src);

    }
}