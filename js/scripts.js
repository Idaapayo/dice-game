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
      $("#player1display").text(playerArray[0].player1Name +"s turn").show();
      showNameScores();
    });
    $ ("#rolleddice").click(function(event){
      event.eventPreventDefault();
      $ ("#rollresult").show();
      $ ("#turntotal") .show();
      var random= (math.floor(math.random()*6 + 1));
      $("#rollresult").text(random);
      if(random>=2){
        rollarray.push(random);
        $ ("#turntotal").text(rollarray.sum());
      }
      else{
        changeplayer();
      }
    });
  }
