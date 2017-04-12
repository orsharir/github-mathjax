function render_preview() {
    $(".js-preview-tab").on("click", function(e) {
        function didLoadPreview() {
            if (!$(".js-preview-tab").hasClass('selected')) {
                return;
            }
            if ($(".preview-content").attr('display') == 'none') {
                setTimeout(didLoadPreview, 200);
            }
            window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], $(".preview-content")[0]);
        }
        setTimeout(didLoadPreview, 200);
    });
}
render_preview();
document.addEventListener("pjax:end", function(){
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
    render_preview();
});