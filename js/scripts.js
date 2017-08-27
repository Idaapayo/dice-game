//back-end logic//
var playerArray[];
var rollarray[];
  function player(playerName,score){
    this playerName=playerName;
    this score=score;
    playerArray.push(this):
  }
  Player.prototype.sum()=function{
    return this.reduce(funtion (a,b){return a+b});
  }
  //front-end logic//
  $ document.ready(function){
    $ ("#playerDetails").submit(function(event){
      event.eventPreventDefault();
      var player1= $ ("#player1name").val();
      var player2= $ ("#player2name").val();
    });
  }
