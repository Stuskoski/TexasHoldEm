<div class="pad-bottom-2em">

  <div class="pad-bottom-2em" id="player-form-list">
    <div class="pad-bottom-2em">
      <label for="user-name-input" class="text-white pad-right-1em">Username: </label>
      <input type="text" id="user-name-input" class="custom-form">
    </div>
    <div class="pad-bottom-2em">
      <label for="computer1-input" class="text-white pad-right-1em">Computer1: </label>
      <input type="text" id="computer1-input" class="custom-form">
    </div>
  </div>

  <label for="num-of-players" class="text-white pad-right-1em">Number of players: </label>
  <select onchange="addComputers()" id="num-of-players">
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
  </select>

  <div class="pad-right-1em"></div>

  <label for="num-of-decks" class="text-white pad-right-1em">Number of Decks: </label>
  <select onchange="addComputers()" id="num-of-decks">
    <option value="1">1</option>
    <option value="3" selected>3</option>
    <option value="5">5</option>
  </select>
</div>