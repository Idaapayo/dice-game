//back-end logic//
var playerArray[];
var rollarray[];
  function play(playerName,score){
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
      var player1Name= $ ("#player1name").val();
      var player2Name= $ ("#player2name").val();
      var player1 = new.Play(player1Name,0);
      var player2 = new.Play(player2Name,0);
    });
  }
