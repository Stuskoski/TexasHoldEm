/**
 * Created by r730819 on 7/8/2016.
 */



function doComputerTurn(){
    //simulate thinking
    givePlayersTheirCurrentHandScores();
    setTimeout(getCompChoice, Math.round(Math.random()*2500) + 500);
}

//call, check, fold, raise
function getCompChoice(){
    var choice = Math.round(Math.random()*8) + 1;

    console.log("Computer choice: " + choice);

    switch(choice){
        //raise, the bluff, raise anyways
        case 1:
            if(PlayerListObject[currentPlayerTurn].money >= (raiseAmount * 2)) {
                raisePlayer();
            }else{
                if(checkIfINeedToRaiseOrCall()){
                    if(!callPlayer()){
                        checkPlayer();
                    }
                }else{
                    if(!checkPlayer()){
                        callPlayer();
                    }
                }
            }
            break;
        //check
        case 2:
            if(checkIfINeedToRaiseOrCall()){
                if(PlayerListObject[currentPlayerTurn].money > 500) {
                    raisePlayer();
                }else{
                    if(!callPlayer()){
                        checkPlayer();
                    }
                }
            }else{
                if(!checkPlayer()){
                    callPlayer();
                }
            }
            break;
        //call
        case 3:
            if(checkIfINeedToRaiseOrCall()){
                if(PlayerListObject[currentPlayerTurn].money > (raiseAmount * 2)){
                    if(!callPlayer()){
                        checkPlayer();
                    }
                }else{
                    if(PlayerListObject[currentPlayerTurn].handRank <= 3) {
                        foldPlayer();
                    }else{
                        if(!callPlayer()){
                            checkPlayer();
                        }
                    }
                }
            }else{
                if(!checkPlayer()){
                    callPlayer();
                }
            }
            break;

        case 4:
            if(PlayerListObject[currentPlayerTurn].handRank <= 2){
                foldPlayer();
            }else{
                if(checkIfINeedToRaiseOrCall()){
                    if(!callPlayer()){
                        checkPlayer();
                    }
                }else{
                    if(!checkPlayer()){
                        callPlayer();
                    }
                }
            }

            break;
        default:
            console.log(checkIfINeedToRaiseOrCall());
            if(checkIfINeedToRaiseOrCall()){
                if(!callPlayer()){
                    checkPlayer();
                }
            }else{
                if(PlayerListObject[currentPlayerTurn].handRank >= 2 && PlayerListObject[currentPlayerTurn].money >= (raiseAmount * 2)){
                    raisePlayer();
                }else{
                    if(!checkPlayer()){
                        callPlayer();
                    }
                }
            }

            break;
    }
}


