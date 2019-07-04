var mod_screen = function() {
    
    /* Cleanup extra divs that were added in previous resizing  */
    $('.item').each( function (){
        $(this).children('div:not(:first)').remove();  
    });
    
    $('.carousel .item').each(function(){
        
        var next = $(this).next(), i;
        
            
        if (Modernizr.mq('(min-width: 768px) and (max-width: 991px)')) {
        
            /* Small screen sizes */
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

        } else if (Modernizr.mq('(min-width: 992px) and (max-width: 1199px)')) {
        
            /* Medium screen sizes */
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (i=0;i<1;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
            
        } else if (Modernizr.mq('(min-width: 1200px)')) {
        
            /* Large screen sizes */
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));

            for (i=0;i<2;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                next.children(':first-child').clone().appendTo($(this));
            }
        }
    });
}

$(function() {
// Call on every window resize
$(window).resize(mod_screen);
// Call once on initial load
mod_screen();
});