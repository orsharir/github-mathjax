var config = chrome.extension.getURL('mathjax_config.js');
var mathjax = chrome.extension.getURL('MathJax/MathJax.js');
var jquery = chrome.extension.getURL('jquery-min-1.7.2.js');
var dynamic_math = chrome.extension.getURL('dynamic_math.js');

$.include([config, jquery], function() {
    $.include([mathjax], function() {
        $.include([dynamic_math]);
    });
});
