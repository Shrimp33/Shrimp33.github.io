var pos = 0;
var imglen = 1016;
function slide(){
    $('#blogSlider').animate({backgroundPosition : '-=2px'}, 20, 'linear', slide);
    pos += 2;
    if (pos >= imglen) {
        pos = 0;
    }
}
setTimeout(slide, 1000);  // I DON'T KNOW WHY, BUT IF THERE'S NO TIMEOUT, IT DOESN'T WORK

function imgtoidb(posx) {
    var truex = posx % 1451
    if (truex < 180) return 1;
    if (truex < 565) return 2;
    if (truex < 1016) return 3;
    if (truex < 1197) return 6;
}

$(document).ready(function(event) {
    $("#blogSlider").click(function(event) {
        var redirect = window.confirm("Do You Want to Access At Blog #" + imgtoidb(pos + event.pageX - 25));
        if (redirect) {
            load(imgtoidb(pos + event.pageX - 25) - 1, 1);
        }
    });
    $("#search").keydown(function(event) {
        if (event.keyCode == 13){
            load($("#search").val() - 1, 1);
        }
    });
});