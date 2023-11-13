///////////////////////////////
/////////Drop down toggle//////////
//////////////////////////////

// Get the radio button and dropdown content elements
const tab2 = document.getElementById('tab-2');
const cartIcon = document.querySelector('.icon.cart');
const dropdownContent = document.querySelector('.dropdown-content');

// Function to toggle the display of the dropdown content
function toggleDropdown() {
  if (tab2.checked) {
    dropdownContent.style.display = 'block';
  } else {
    dropdownContent.style.display = 'none';
  }
}

// Attach the function to the change event of the radio button
tab2.addEventListener('change', toggleDropdown);

// Function to hide the dropdown when clicking outside of it
function hideDropdown(event) {
  if (!cartIcon.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
}

// Attach the function to the click event of the document body
document.body.addEventListener('click', hideDropdown);





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

