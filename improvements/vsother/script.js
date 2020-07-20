var x = document.getElementById("audi"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 



$(document).ready(function() {
  var board=["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  var board_temp=[];
  var position;
  var round=0;
  var turnSet=true; 
  var turn=true;
  var win=false;
  var nought = 0;
  var cross = 0; 
  var corners=[0,2,6,8];
  
  if (turnSet){
      playernext();
    }
  
  function playernext(){
       $( ".button" ).mouseup(function() {
      position=$(this).attr('id').charAt(1);
      updateTurn();
    });
  }
  
  
  $( ".button" ).mouseup(function() {
    position=$(this).attr('id').charAt(1);
    updateTurn();
  });
  
 function updateTurn(){
  if(board[position]!="o"&&board[position]!="x"&&round<9){
      if (turn===false){
        board[position]="o";
        $("#b"+position).find( ".back" ).html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
      }else {
        board[position]="x";
        $("#b"+position).find( ".back" ).html("<i class='fa fa-times' aria-hidden='true'></i>");
      }

      $("#b"+position).children().toggleClass("flip");

      if(board[0]==board[1]&&board[1]==board[2]){
        $("#b0").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b0").css("color", "black").fadeIn( "slow" );
        $("#b1").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b1").css("color", "black").fadeIn( "slow" );
        $("#b2").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b2").css("color", "black").fadeIn( "slow" );
        $( "#b3" ).delay(500).animate({ "top": "-=115px", opacity: 0}, 500);
        $( "#b4" ).delay(500).animate({ "top": "-=115px", opacity: 0}, 500);
        $( "#b5" ).delay(500).animate({ "top": "-=115px", opacity: 0}, 500);
        $( "#b6" ).delay(500).animate({ "top": "-=230px", opacity: 0}, 500);
        $( "#b7" ).delay(500).animate({ "top": "-=230px", opacity: 0}, 500);
        $( "#b8" ).delay(500).animate({ "top": "-=230px", opacity: 0}, 500);
        win=true;
      }else if(board[3]==board[4]&&board[4]==board[5]){
        $("#b3").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b3").css("color", "black").fadeIn( "slow" );
        $("#b4").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b4").css("color", "black").fadeIn( "slow" );
        $("#b5").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b5").css("color", "black").fadeIn( "slow" );
        $( "#b0" ).delay(500).animate({ "top": "+=115px", opacity: 0}, 500);
        $( "#b1" ).delay(500).animate({ "top": "+=115px", opacity: 0}, 500);
        $( "#b2" ).delay(500).animate({ "top": "+=115px", opacity: 0}, 500);
        $( "#b6" ).delay(500).animate({ "top": "-=115px", opacity: 0}, 500);
        $( "#b7" ).delay(500).animate({ "top": "-=115px", opacity: 0}, 500);
        $( "#b8" ).delay(500).animate({ "top": "-=115px", opacity: 0}, 500);
        win=true;
      }else if(board[6]==board[7]&&board[7]==board[8]){
        $("#b6").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b6").css("color", "black").fadeIn( "slow" );
        $("#b7").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b7").css("color", "black").fadeIn( "slow" );
        $("#b8").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b8").css("color", "black").fadeIn( "slow" );
        $( "#b0" ).delay(500).animate({ "top": "+=230px", opacity: 0}, 500);
        $( "#b1" ).delay(500).animate({ "top": "+=230px", opacity: 0}, 500);
        $( "#b2" ).delay(500).animate({ "top": "+=230px", opacity: 0}, 500);
        $( "#b3" ).delay(500).animate({ "top": "+=115px", opacity: 0}, 500);
        $( "#b4" ).delay(500).animate({ "top": "+=115px", opacity: 0}, 500);
        $( "#b5" ).delay(500).animate({ "top": "+=115px", opacity: 0}, 500);
        win=true;
      }else if(board[0]==board[3]&&board[3]==board[6]){
        $("#b0").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b0").css("color", "black").fadeIn( "slow" );
        $("#b3").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b3").css("color", "black").fadeIn( "slow" );
        $("#b6").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b6").css("color", "black").fadeIn( "slow" );
        $( "#b1" ).delay(500).animate({ "left": "-=115px", opacity: 0}, 500);
        $( "#b2" ).delay(500).animate({ "left": "-=230px", opacity: 0}, 500);
        $( "#b4" ).delay(500).animate({ "left": "-=115px", opacity: 0}, 500);
        $( "#b5" ).delay(500).animate({ "left": "-=230px", opacity: 0}, 500);
        $( "#b7" ).delay(500).animate({ "left": "-=115px", opacity: 0}, 500);
        $( "#b8" ).delay(500).animate({ "left": "-=230px", opacity: 0}, 500);
        win=true;
      }else if(board[1]==board[4]&&board[4]==board[7]){
        $("#b1").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b1").css("color", "black").fadeIn( "slow" );
        $("#b4").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b4").css("color", "black").fadeIn( "slow" );
        $("#b7").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b7").css("color", "black").fadeIn( "slow" );
        $( "#b0" ).delay(500).animate({ "left": "+=115px", opacity: 0}, 500);
        $( "#b3" ).delay(500).animate({ "left": "+=115px", opacity: 0}, 500);
        $( "#b6" ).delay(500).animate({ "left": "+=115px", opacity: 0}, 500);
        $( "#b2" ).delay(500).animate({ "left": "-=115px", opacity: 0}, 500);
        $( "#b5" ).delay(500).animate({ "left": "-=115px", opacity: 0}, 500);
        $( "#b8" ).delay(500).animate({ "left": "-=115px", opacity: 0}, 500);
        win=true;
      }else if(board[2]==board[5]&&board[5]==board[8]){
        $("#b2").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b2").css("color", "black").fadeIn( "slow" );
        $("#b5").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b5").css("color", "black").fadeIn( "slow" );
        $("#b8").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b8").css("color", "black").fadeIn( "slow" );
        $( "#b0" ).delay(500).animate({ "left": "+=230px", opacity: 0}, 500);
        $( "#b3" ).delay(500).animate({ "left": "+=230px", opacity: 0}, 500);
        $( "#b6" ).delay(500).animate({ "left": "+=230px", opacity: 0}, 500);
        $( "#b1" ).delay(500).animate({ "left": "+=115px", opacity: 0}, 500);
        $( "#b4" ).delay(500).animate({ "left": "+=115px", opacity: 0}, 500);
        $( "#b7" ).delay(500).animate({ "left": "+=115px", opacity: 0}, 500);         
        win=true;
      }else if(board[0]==board[4]&&board[4]==board[8]){
        $("#b0").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b0").css("color", "black").fadeIn( "slow" );
        $("#b4").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b4").css("color", "black").fadeIn( "slow" );
        $("#b8").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b8").css("color", "black").fadeIn( "slow" );
        $( "#b1" ).delay(500).animate({ "left": "-=53px", "top": "+=53px", opacity: 0}, 500);
        $( "#b2" ).delay(500).animate({ "left": "-=115px", "top": "+=115px", opacity: 0}, 500);
        $( "#b3" ).delay(500).animate({ "left": "+=53px", "top": "-=53px",opacity: 0}, 500);
        $( "#b5" ).delay(500).animate({ "left": "-=53px", "top": "+=53px",opacity: 0}, 500);
        $( "#b6" ).delay(500).animate({ "left": "+=115px", "top": "-=115px", opacity: 0}, 500);
        $( "#b7" ).delay(500).animate({ "left": "+=53px", "top": "-=53px", opacity: 0}, 500); 
        win=true;
      }else if(board[2]==board[4]&&board[4]==board[6]){
        $("#b2").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b2").css("color", "black").fadeIn( "slow" );
        $("#b4").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b4").css("color", "black").fadeIn( "slow" );
        $("#b6").css("background-color", "lightyellow").fadeIn( "slow" );
        $("#b6").css("color", "black").fadeIn( "slow" );
        $( "#b0" ).delay(500).animate({ "left": "+=115px", "top": "+=115px", opacity: 0}, 500);
        $( "#b1" ).delay(500).animate({ "left": "+=53px", "top": "+=53px", opacity: 0}, 500);
        $( "#b3" ).delay(500).animate({ "left": "+=53px", "top": "+=53px", opacity: 0}, 500);
        $( "#b5" ).delay(500).animate({ "left": "-=53px", "top": "-=53px", opacity: 0}, 500);
        $( "#b7" ).delay(500).animate({ "left": "-=53px", "top": "-=53px", opacity: 0}, 500);
        $( "#b8" ).delay(500).animate({ "left": "-=115px", "top": "-=115px", opacity: 0}, 500); 
        win=true;
      }
      
      if (win===true){
      // results
        if (turn===false){
          $(".display").html("<i class='fa fa-circle-o' aria-hidden='true'></i> <strong><font color=yellow face=Luminari><span style=cursor:pointer> WINS! PLAY AGAIN</span></font></strong>");
          nought++;
          $("#nought").find(".button").html(nought);
        }else {
          $(".display").html("<i class='fa fa-times' aria-hidden='true'></i><strong><font color=yellow face=Luminari> <span style=cursor:pointer> WINS! PLAY AGAIN</span></font></strong>");
          cross++;
          $("#cross").find(".button").html(cross);
        }
       
        round=9;
      }else{
        
        round++;
        if (turn===false){
          $(".display").html("<i class='fa fa-times' aria-hidden='true'></i> turn");
          turn=true;
          if (turnSet){
            playernext();
          }
        }else {
          $(".display").html("<i class='fa fa-circle-o' aria-hidden='true'></i> turn");
          turn=false;
          if (!turnSet&&round<9){
            console.log("NOLLAPELI: " +round);
            playernext();
          }
        }
        
        // Game ends a draw
        if(round==9&&win===false){
          $(".display").html("<strong><font color=yellow face=Luminari><span style=cursor:pointer>Oops DRAW! PLAY AGAIN</span></font></strong>");
        }
      }
    } 
  }
  
  // Reset 
  $( ".display" ).mouseup(function() {
    resetGame();
  });
 
  function resetGame(){
    $(".flip-container").removeClass("flip");
    $(".button").find( ".back" ).html("");
    turn=true;
    $(".display").html("<i class='fa fa-times' aria-hidden='true'></i> turn");

    win=false;
    board=["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    round=0;
    counter = 0;
    $("#b0").css( {top: "0px", left: "0px"}  );
    $("#b1").css( {top: "0px", left: "100px"}  );
    $("#b2").css( {top: "0px", left: "200px"}  );
    $("#b3").css( {top: "100px", left: "0px"}  );
    $("#b4").css( {top: "100px", left: "100px"}  );
    $("#b5").css( {top: "100px", left: "200px"}  );
    $("#b6").css( {top: "200px", left: "0px"}  );
    $("#b7").css( {top: "200px", left: "100px"}  );
    $("#b8").css( {top: "200px", left: "200px"}  );
    $(".button").css("background-color", "transparent").fadeIn( "slow" );
    $(".button").css("color", "#FF00FF").fadeIn( "slow" );
    $(".button").css("opacity", "1").fadeIn( "slow" );
    $(".button").fadeIn( "slow" );
    
    if (turnSet){
      playernext();
    }
    }
   
 
 $( "input[type='radio']" ).change(function() {
  
   nought = 0; 
   cross = 0; 
   $("#nought").find(".button").html(nought);
   $("#cross").find(".button").html(cross);
   turnSet=!document.getElementById("player").checked;
   resetGame();
}); 
  
});  