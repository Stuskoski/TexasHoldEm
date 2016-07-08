/**
 * Created by r730819 on 7/7/2016.
 *
 * Settings object that is instantiated in
 * GameConfig.js
 */

var settingsObjectStatic;

function SettingsObject(userName, numOfPlayers, numOfDecks){
    var i;

    this.playerNames = [];
    this.userName = userName;
    this.numOfPlayers = numOfPlayers;
    this.numOfDecks = numOfDecks;

    this.playerNames[0] = $('#user-name-input').val();
    for(i=1; i <= numOfPlayers; i++){
        this.playerNames[i] = $('#computer'+i+'-input').val();
    }
}

function getSettingsObject(){
    return settingsObjectStatic;
}

function setSettingsObject(settingObject){
    settingsObjectStatic = settingObject;
}

SettingsObject.prototype.getInfo = function(){
    alert("Username: " + this.userName + "\n" +
          "Players: " + this.numOfPlayers + "\n" +
          this.playerNames.toString());
};


