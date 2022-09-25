var pos = 0;
var imglen = 1016;
function slide(){
    $('#clientsSlider').animate({backgroundPosition : '-=2px'}, 20, 'linear', slide);
    pos += 2;
    if (pos >= imglen) {
        pos = 0;
    }
}
setTimeout(slide, 1000);  // I DON'T KNOW WHY, BUT IF THERE'S NO TIMEOUT, IT DOESN'T WORK

function imgtoid(posx) {
    if (posx < 180) return 1;
    if (posx < 565) return 2;
    if (posx < 1016) return 3;
    else return imgtoid(posx - 1016);
}

$(document).ready(function(event) {
    $("#clientsSlider").click(function(event) {
        var redirect = window.confirm("Do You Want to Access At Blog #" + imgtoid(pos + event.pageX - 25));
        if (redirect) {
            load(imgtoid(pos + event.pageX - 25));
        }
    });
    $("#search").keydown(function(event) {
        if (event.keyCode == 13){
            load($("#search").val());
        }
    });
});