// const boxes = document.querySelectorAll('.editor-styles-wrapper *');
// boxes.forEach(box => {
//     box.style.cursor = 'pointer !important';
// });

(function ($) {
  $(document).ready(function () {
    console.log("alkf");
    jQuery(".editor-styles-wrapper *").css("cursor", "pointer !important");
  });
})(jQuery);
