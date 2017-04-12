var config = chrome.extension.getURL('mathjax_config.js');
$('script').first().after('<script type="text/javascript" src="' + config + '" ></script>');
$('script').first().after('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>');
