$(document).bind('mousemove', function(e){
    $('.walnut').css({
       left:  e.pageX - 650,
       top:  e.pageY - 450
    });
});
