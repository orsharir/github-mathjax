window.MathJax = {
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/HTML-CSS"],
  tex2jax: {
    inlineMath: [ ["$","$"] ],
    displayMath: [ ["$$","$$"] ],
    ignoreClass: "application-main",
    processClass: "markdown-body",
    processEscapes: true
  },
  imageFont: null,
  "HTML-CSS": { availableFonts: ["TeX"] },
  TeX: { equationNumbers: { autoNumber: "AMS" } }
};