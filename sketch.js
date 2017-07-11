//function to build a grid 
function makeGrid(n) {
  for (var row = 0; row < n; row++) {
    for (var col = 0; col < n; col++) {
        $('#container').append('<div class="square"></div>');
    }
  }
  $('.square').width(600/n);
  $('.square').height(600/n);
}

//main function: creates 16x16 grid when loaded 
$(document).ready(function() {
  makeGrid(16);

  $('#container').on('click', function() {
    $('.square').mouseenter(function() {
      $(this).addClass('sketch');
    });
  });
});

/*
// function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var col = 0; col < x; col++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });

    $(".newGrid").click(function() {
        refreshGrid();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "black");
        });
    });
});
*/