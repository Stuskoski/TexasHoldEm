/**
 * Created by r730819 on 7/8/2016.
 */



function doComputerTurn(){
    //simulate thinking
    setTimeout(getCompChoice, Math.round(Math.random()*2500) + 500);
}

function getCompChoice(){
    switch(Math.round(Math.random()*4) + 1){
        case 1:
            raisePlayer();
            break;
        case 2:

            checkPlayer();
            break;
        case 3:
            checkPlayer();
            //foldPlayer();
            break;
        default:
            callPlayer();
            break;
    }
}


