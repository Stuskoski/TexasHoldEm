<%--
  Created by IntelliJ IDEA.
  User: r730819
  Date: 7/7/2016
  Time: 8:20 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="game-config-container" id="game-config-id">
    <div class="welcome-msg center-div pad-bottom-2em">
        Welcome to Texas Hold'em
    </div>

    <form onsubmit="event.preventDefault(); startGame();">
        <jsp:include page="game-config-form.jsp"/>
        <div class="center-div">
            <button type="submit" class="custom-btn btn">Start Game</button>
        </div>
    </form>
</div>
