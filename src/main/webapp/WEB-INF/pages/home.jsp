<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>
<html>
<body>
    <div class="overlay"></div>
    <div class="home-div" id="home-div"><jsp:include page="gameConfig/game-config.jsp"/></div>
    <jsp:include page="popups/info-popup.jsp"/>
    <button onclick="deckReferenceListDeck()">test</button>

</body>
<footer>
    <jsp:include page="imports.jsp"/>
</footer>
</html>