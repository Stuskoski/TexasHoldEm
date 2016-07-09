<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>

<%-- Javascript imports HOUSE --%>
<script src="<c:url value="/resources/js/gameConfig/GameConfig.js"/>"></script>
<script src="<c:url value="/resources/js/gameConfig/SettingsObject.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/InitializeDeck.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/tableButtons/Call.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/tableButtons/Check.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/tableButtons/Fold.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/tableButtons/Raise.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/ShuffleArray.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/TableSetup.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/DealCardsToPlayers.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/Flop.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/Turn.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/River.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/DetermineWhoWins.js"/>"></script>
<script src="<c:url value="/resources/js/gameFunctions/PlayerTurn.js"/>"></script>
<script src="<c:url value="/resources/js/gameObjects/Table.js"/>"></script>
<script src="<c:url value="/resources/js/gameObjects/Card.js"/>"></script>
<script src="<c:url value="/resources/js/gameObjects/Deck.js"/>"></script>
<script src="<c:url value="/resources/js/gameObjects/Player.js"/>"></script>
<script src="<c:url value="/resources/js/gameObjects/PlayerList.js"/>"></script>
<script src="<c:url value="/resources/js/popups/ShowAndHideInfoWindow.js"/>"></script>


<%-- Javascript imports VENDOR --%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<script src="<c:url value="/resources/js/gameObjects/main.js"/>"></script>



<%-- CSS imports HOUSE--%>
<link href="<c:url value="/resources/css/home.css" />" rel="stylesheet">
<link href="<c:url value="/resources/css/table.css" />" rel="stylesheet">
<link href="<c:url value="/resources/css/game-config.css" />" rel="stylesheet">
<link href="<c:url value="/resources/css/general.css" />" rel="stylesheet">
<link href="<c:url value="/resources/css/card.css" />" rel="stylesheet">
<link href="<c:url value="/resources/css/popups.css" />" rel="stylesheet">

<%-- CSS imports VENDOR --%>
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<%--<link href="<c:url value="/resources/css/master.css" />" rel="stylesheet">--%>