<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>
<html>

<head>
    <link rel="icon" href="<c:url value="/resources/images/cards/14spades.png" />" type="image/x-icon">
    <title>Texas Hold'em</title>
</head>
<body>
    <div class="overlay"></div>
    <div class="home-div" id="home-div"><jsp:include page="gameConfig/game-config.jsp"/></div>
    <jsp:include page="popups/info-popup.jsp"/>
    <button onclick="deckReferenceListDeck()" class="custom-btn show-deck">Show Deck</button>

</body>
<footer>
    <jsp:include page="imports.jsp"/>
</footer>
</html>