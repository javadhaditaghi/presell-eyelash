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
/////////Magnifier//////////
//////////////////////////////

function increaseFontSize() {
  changeFontSize('.text', 2);
}

function decreaseFontSize() {
  changeFontSize('.text', -2);
}

function changeFontSize(selector, changeAmount) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(element => {
    const currentFontSize = parseFloat(window.getComputedStyle(element).fontSize);
    const newFontSize = currentFontSize + changeAmount;
    element.style.fontSize = newFontSize + 'px';
  });
}


///////////////////////////////
/////////Read More BTN//////////
//////////////////////////////




document.addEventListener("DOMContentLoaded", function() {
  const comments = Array.from(document.querySelectorAll('.review-wrapper'));
  const readMoreBtn = document.getElementById('readMoreBtn');

  let showComments = 3;

  function toggleCommentsVisibility() {
    comments.forEach((comment, index) => {
      if (index < showComments) {
        comment.classList.add('visible');
      } else {
        comment.classList.remove('visible');
      }
    });
  }

  toggleCommentsVisibility();

  readMoreBtn.addEventListener('click', function() {
    if (showComments === 3) {
      readMoreBtn.textContent = 'Read Less';
      showComments = comments.length;
    } else {
      readMoreBtn.textContent = 'Read More';
      showComments = 3;
    }
    toggleCommentsVisibility();
  });
});
