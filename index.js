var EMPTY_CELL = "";
var CELLS_VALUES = {
  "0": "0,0",
  "1": "0,1",
  "2": "0,2",
  "3": "1,0",
  "4": "1,1",
  "5": "1,2",
  "6": "2,0",
  "7": "2,1",
  "8": "2,2"
}

var currentPlayer = 'x'

$(function() { 	
    function createMatrix(rows, cols, defaultValue) {
      var arr = [];

      for(var i=0; i < rows; i++) {

         arr.push([]);

         arr[i].push( new Array(cols));

         for(var j=0; j < cols; j++){
            arr[i][j] = defaultValue;
         }
      }

      return arr;
    }

    var matrix = createMatrix(3, 3, EMPTY_CELL);

    function changeCurrentPlayer() {
      if (currentPlayer === 'x') {
        currentPlayer = 'o'
      }
      else {
        currentPlayer = 'x'
      }
    }
    //reset game
    function ResetGame(matrix){
      for(i=0;i<3;i++)
      {
        for(j=0;j<3;j++)
        {
          matrix[i][j]=EMPTY_CELL;

        }
      }
      
      $(".o-image").hide();
      $(".x-image").hide();
    }

    var toggle = function(id) {
      // calculate indexes
      var sign = currentPlayer;
      var currentIndexes = CELLS_VALUES[id]
      var currentIndexes = currentIndexes.split(',')
      var firstIndex = currentIndexes[0]
      var secondIndex = currentIndexes[1]

      // check if empty
      if (matrix[firstIndex][secondIndex] !== EMPTY_CELL) {
        return;
      }
      
      // handle the UI
      $("#pointer" + id + " .image").hide();
      $("#" + sign + "-sign" + id).show();

      // fill the matrix
      matrix[firstIndex][secondIndex] = sign

      isWon(matrix)
      changeCurrentPlayer()
 
 	  }

   	$(".o-image").hide();
    $(".x-image").hide();
  
    $("#pointer0").click(function() {
    	toggle(0);

    });

  	$("#pointer1").click(function() {
  		toggle(1);
  	});


  	$("#pointer2").click(function() {
  		toggle(2);
  	});


  	$("#pointer3").click(function() {
  		toggle(3);
  	});


  	$("#pointer4").click(function() {
  		toggle(4);
  	});


  	$("#pointer5").click(function() {
  		toggle(5);
  	});

  	$("#pointer6").click(function() {
  		toggle(6);
  	});

  	$("#pointer7").click(function() {
  		toggle(7);
  	});

  	$("#pointer8").click(function() {
  		toggle(8);
  	});
    $("#pointer9").click(function() {
      ResetGame(matrix);
    });

    var isWon= function(matrix) {
      
      var i=0;
      var j=0;
      //colums winner
    if(matrix[i][0]!=EMPTY_CELL)
      {
         if((matrix[i][0] === matrix[i+1][0]) && (matrix[i][0] === matrix[i+2][0])){
             alert(matrix[i][0]+" Wins");
          }
      }
 
  
    if(matrix[i][1]!=EMPTY_CELL){

        if((matrix[i][1] === matrix[i+1][1]) && (matrix[i][1] === matrix[i+2][1])){
          alert(matrix[i][1]+" Wins");
          
        }
    }
    if(matrix[i][2]!=EMPTY_CELL)
    {
      if((matrix[i][2]=== matrix[i+1][2]) && (matrix[i][2]=== matrix[i+2][2])){
        alert(matrix[i][2]+" Wins");
      }
    }
    //rows winner
    if(matrix[0][i]!=EMPTY_CELL)
      {
         if((matrix[0][i] === matrix[0][i+1]) && (matrix[0][i] === matrix[0][i+2])){
             alert(matrix[0][i]+" Wins");
          }
      }
 
  
    if(matrix[1][i]!=EMPTY_CELL){

        if((matrix[1][i] === matrix[1][i+1]) && (matrix[1][i] === matrix[1][i+2])){
          alert(matrix[1][i]+" Wins");
          
        }
    }
    if(matrix[2][i]!=EMPTY_CELL)
    {
      if((matrix[2][i]=== matrix[2][i+1]) && (matrix[2][i]=== matrix[2][i+2])){
        alert(matrix[2][i]+" Wins");
      }
    }
    //cross winner
    if(matrix[i][j+2]!=EMPTY_CELL){

        if((matrix[i][j+2] === matrix[i+1][j+1]) && (matrix[i][j+2] === matrix[i+2][j])){
          alert(matrix[i][j+2]+" Wins");
          
        }
    }
    if(matrix[i][j]!=EMPTY_CELL)
    {
      if((matrix[i][j]=== matrix[i+1][j+1]) && (matrix[i][j]=== matrix[i+2][j+2])){
        alert(matrix[i][j]+" Wins");
      }
    }

  
  }
  

});