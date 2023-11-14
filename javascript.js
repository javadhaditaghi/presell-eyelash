//////////////////////////////////
/////////Dropdown Menue//////////
//////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
  const tab2 = document.getElementById('tab-2');
  const cartIcon = document.querySelector('.icon.cart');
  const dropdownContent = document.querySelector('.dropdown-content');
  const bottomNav = document.querySelector('.bottom-nav');

  tab2.addEventListener('click', function () {
    // Toggle the display of dropdown content
    dropdownContent.style.display = (dropdownContent.style.display === 'none') ? 'block' : 'none';

    // Add or remove a class based on the display property
    if (dropdownContent.style.display === 'block') {
      // Add the style when the dropdown is visible
      bottomNav.classList.add('rounded-border');
    } else {
      // Remove the style when the dropdown is hidden
      bottomNav.classList.remove('rounded-border');
    }
  });
});





///////////////////////////////
/////////Night Mode//////////
//////////////////////////////



document.addEventListener('DOMContentLoaded', function () {
      const darkModeButton = document.getElementById('theme-button');

      darkModeButton.addEventListener('click', function () {
        // Toggle dark mode class on the body
        document.body.classList.toggle('dark-mode');
      });
    });




///////////////////////////////
/////////Progressbars//////////
//////////////////////////////

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

