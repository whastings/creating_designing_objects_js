window.addEventListener('load', function() {
  var codes = toArray(document.querySelectorAll('.remark-code'));
  codes.forEach(processCode);

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
