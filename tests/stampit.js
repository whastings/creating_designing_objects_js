var stampit = require('stampit');

var dialog = stampit()
  .state({
    el: null,
    title: 'Dialog' // Default value.
  })
  .methods({
    setTitle: function(title) {
      this.title = title;
    }
  })
  .enclose(function() {
    var open = false;

    return stampit.mixIn(this, {
      close: function() {
        open = false;
      },
      isOpen: function() {
        return open;
      },
      open: function() {
        open = true;
        // ...
      }
    });
  });

var myDialog = dialog({el: 'foo', title: 'Bar'});
console.log('El: ', myDialog.el);
console.log('Title: ', myDialog.title);
myDialog.setTitle('Baz');
console.log('Title: ', myDialog.title);
console.log('Is Open: ', myDialog.isOpen());
myDialog.open();
console.log('Is Open: ', myDialog.isOpen());
console.log('Instance Props: ' + Object.keys(myDialog));
console.log('Prototype Props: ' + Object.keys(myDialog.__proto__));
