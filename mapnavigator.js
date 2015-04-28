var current_turn = 1;
var current_zoom = 0;
var zoomstr = "small";

jQuery( document ).ready(function( $ ) {
 $( "#map" ).draggable();

    var options = {
                $DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
                $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 0,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);


});

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
          previous();
        break;

        case 38: // up
          zoom_in();
        break;

        case 39: // right
          next();
        break;

        case 40: // down
          zoom_out();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function next()
{
  if (current_turn + 10 <= 531) {
    current_turn += 10;
    $("#map").attr("src", "map-" + zoomstr + "/turn" + current_turn +".png");
    $("#turnindicator").html("Turn: " + current_turn);
    if (current_turn == 531) $("#turnindicator").html("Game over! Turn: " + current_turn);
  }
}

function previous()
{
  if (current_turn >= 11 ) {
    current_turn -= 10;
    $("#map").attr("src", "map-" + zoomstr + "/turn" + current_turn +".png");
    $("#turnindicator").html("Turn: " + current_turn);
  }
}


function zoom_in() 
{
  if (current_zoom < 2) {
    current_zoom += 1;
    if (current_zoom == 0) zoomstr = "small";
    if (current_zoom == 1) zoomstr = "medium";
    if (current_zoom == 2) zoomstr = "large";
    $("#map").attr("src", "map-" + zoomstr + "/turn" + current_turn +".png");
  }

}


function zoom_out() 
{
  if (current_zoom > 0) {
    current_zoom -= 1;
    if (current_zoom == 0) zoomstr = "small";
    if (current_zoom == 1) zoomstr = "medium";
    if (current_zoom == 2) zoomstr = "large";
    $("#map").attr("src", "map-" + zoomstr + "/turn" + current_turn +".png");
    $("#map").css("top", "0px");
    $("#map").css("left", "0px");

  }

}

