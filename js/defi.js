/* code for anchor links scrolling */

$(".nav-link").on('click', function(event) {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){
           
    	window.location.hash = hash;
	});
});


$("#seemore").click(function() {
    var elem = $("#seemore").text();
    if (elem == "SEE MORE") {
        $("#seemore").text("SEE LESS");
        $(".another-summit-timetable").slideDown();
    } else {
        $("#seemore").text("SEE MORE");
        $(".another-summit-timetable").slideUp();
    }
});

$("#see-more").click(function() {
    var elem = $("#see-more").text();
    if (elem == "SEE MORE") {
        $("#see-more").text("SEE LESS");
        $(".another-speakers-list").slideDown();
    } else {
        $("#see-more").text("SEE MORE");
        $(".another-speakers-list").slideUp();
    }
});

$("footer .d-flex a").on('click', function(event) {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){
           
    	window.location.hash = hash;
	});
});
