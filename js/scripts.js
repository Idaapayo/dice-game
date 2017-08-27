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
        $ ("#turntotal").text(rollarray.sum();
      }
      else{
        whenRollIsOne();
      }
    });
    //for player 1//
    $ ("#endturn").click(function(event){
      event.eventPreventDefault();
      if(playerArray[0]>=100){
        alert(playerArray[0].playerName + "wins");
        document.location.reload(true);
        //for player 2//
      }
      else if (playerArray[1]>=100){
        alert(playerArray[1].playerName + "wins");
        document.location.reload(true);
      }
    });
    function showNameScores(){
      $("#player1Name").text(playerArray[0].playerName);
      $("#player2Name").text(playerArray[1].playername);
      $("#player1score").text(playerArray[0].score);
      $("#player2score").text(playerArray[1].score);
    }
    function whenRollIsOne(){
      if($("#player1display").is(":visible")){
        rollarray[0];
        $("#turntotal").text(rollarray);
        alert("You rolled a 1-You get zero points");
        setTimeout (funtion(){$("#player2display").text("it's"playerArray[1].playername + "'s turn").show()}; 50)
        $("#player1display").hide();
        showNameScores();
      }
      else if ($("#player2display").is(":visible")) {
        rollarray[0];
        $("#turntotal").text(rollarray);
        alert("You rolled a 1-You get zero points");
        setTimeout (funtion(){$("#player1display").text("it's"playerArray[0].playername + "'s turn").show()}; 50)
        $("#player2display").hide();
        showNameScores();
      }
    }
    function changeplayers(){
      if($("#player1display").is(":visible")){
        playerArray[0].score=(playerArray[0].score+=rollarray.sum());
        rollarray[0];
        $("#turntotal").text(rollarray);
        $("#player1display").hide();
        $("#player2display").text("It is" playerArray[0].playerName + "turn").show();
        console.log(playerArray[0].score);
        showNameScores();
      }
      else if ($("#player1display").is(":visible")) {
        playerArray[1].score=(playerArray[1].score+=rollarray.sum());
        rollarray[0];
        $("#turntotal").text(rollarray);
        $("#player2display").hide();
        $("#player1display").text("It is" playerArray[1].playerName + "turn").show();
        console.log(playerArray[1].score);
        showNameScores();
      }
    }

  }
