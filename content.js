var config = chrome.extension.getURL('mathjax_config.js');
// $('script').first().after('<script type="text/javascript" src="' + config + '" ></script>');
var mathjax = chrome.extension.getURL('MathJax/MathJax.js');
// $('script').first().after('<script type="text/javascript" src="' + mathjax + '" ></script>');
var jquery = chrome.extension.getURL('jquery-min-1.7.2.js');
// $('script').first().after('<script type="text/javascript" src="' + jquery + '" ></script>');
var dynamic_math = chrome.extension.getURL('dynamic_math.js');
// $('script').first().after('<script type="text/javascript" src="' + dynamic_math + '" ></script>');

$.include([config, jquery], function() {
    $.include([mathjax], function() {
        $.include([dynamic_math]);
    });
});
// $('script').first().after('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>');
// var render_math_in_preview = 'document.addEventListener("pjax:end", function(){alert("Test");MathJax.Hub.Queue(["Typeset", MathJax.Hub]);});';
// var render_math_in_preview = '\
// jQuery(".js-preview-tab").on("click", function(e) { \
//     function didLoadPreview() { \
//         alert("Test3!!!"); \
//         alert(window.MathJax);\
//         window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]); \
//     } \
//     setTimeout(didLoadPreview, 500); \
// });';
// alert(render_math_in_preview);
// $('script').first().after('<script type="text/javascript">' + render_math_in_preview + '</script>');
// $(document).on('preview:render', function (t) {
//     alert('preview:render');
//     MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
// });
// $.ready(function(){
// $('.js-preview-tab').on("click", function(e) {
//     function didLoadPreview() {
//         alert("Test3!!!");
//         window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
//     }
//     setTimeout(didLoadPreview, 2000);
// });
// });

// $.ready(function(){
//     preview:render
// });