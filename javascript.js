///////////////////////////////
/////////Progressbars//////////
//////////////////////////////


// $(document).ready(function () {
//     startAnimation();
//     function startAnimation() {
//         jQuery('.skills').each(function () {
//             jQuery(this).find('.skillbar').animate({
//                 width: jQuery(this).attr('data-percent')
//             }, 4000);
//         });
//     }
// });

$(document).ready(function () {
    // Call startAnimation initially
    startAnimation();

    // Call startAnimation when the user scrolls
    $(window).scroll(function () {
        startAnimation();
    });

    function startAnimation() {
        jQuery('.skills').each(function () {
            var elementTop = jQuery(this).offset().top;
            var elementBottom = elementTop + jQuery(this).outerHeight();
            var viewportTop = jQuery(window).scrollTop();
            var viewportBottom = viewportTop + jQuery(window).height();

            // Check if the element is in the viewport
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                jQuery(this).find('.skillbar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 4000);
            }
        });
    }
});



///////////////////////////////
/////////Progressbars//////////
//////////////////////////////

