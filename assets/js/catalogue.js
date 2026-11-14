// Filtering of the package catalogue: a text box and one button per section; no library.
(function () {
  var q = document.getElementById('q'), grid = document.getElementById('grid'), count = document.getElementById('count');
  var buttons = document.querySelectorAll('#sections button'), cards = grid.querySelectorAll('.card'), section = '';
  function apply() {
    var text = q.value.trim().toLowerCase(), shown = 0;
    for (var i = 0; i < cards.length; i++) {
      var c = cards[i];
      var ok = (!section || c.dataset.section === section) && (!text || c.dataset.text.indexOf(text) !== -1);
      c.style.display = ok ? '' : 'none';
      if (ok) shown++;
    }
    count.textContent = shown + ' of ' + cards.length + ' packages';
  }
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      for (var j = 0; j < buttons.length; j++) buttons[j].classList.remove('on');
      this.classList.add('on'); section = this.dataset.section; apply();
    });
  }
  q.addEventListener('input', apply);
  apply();
})();
