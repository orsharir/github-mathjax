var config = chrome.extension.getURL('mathjax_config.js');
$('script').first().after('<script type="text/javascript" src="' + config + '" ></script>');
$('script').first().after('<script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>');
