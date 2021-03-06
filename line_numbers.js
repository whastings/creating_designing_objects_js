window.addEventListener('load', function() {
  var codeContainers = toArray(document.querySelectorAll('.container.code')),
      codes = toArray(document.querySelectorAll(
        '.remark-slide-content > div > pre > .remark-code'
      ));
  codes.forEach(processCode);
  codeContainers.forEach(processCode);

  function processCode(code) {
    var lines = toArray(code.querySelectorAll('.remark-code-line')),
        num = 1;
    lines.forEach(function(line) {
      var numEl = document.createElement('span');
      numEl.classList.add('code-line-number');
      numEl.textContent = num + '. ';
      if (num < 10) {
        numEl.textContent += ' ';
      }
      // I know, inefficient...
      line.insertBefore(numEl, line.firstChild);
      num += 1;
    });
  }

  function toArray(nodes) {
    return Array.prototype.slice.call(nodes);
  }
});
