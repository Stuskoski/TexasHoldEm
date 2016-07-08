/**
 * Shows and then hides the display
 * window with the passed message.
 *
 * Takes 3 seconds
 *
 * @param msg Alert message to be shown
 */
function showAndThenHideInfoWindow(msg){
    var popupWindow = $("#infoPopupWindowBorder");

    $(".overlay").fadeIn("fast");

    $('#home-div').toggle();

    document.getElementById("infoPopupMsg").innerHTML = msg;

    popupWindow.removeClass("hide-me");
    popupWindow.fadeIn("slow");

    setTimeout(hideInfoWindow, 2000);
}

function hideInfoWindow(){
    $("#infoPopupWindowBorder").fadeOut("slow");
    $(".overlay").fadeOut("slow");
    $('#home-div').toggle();
}