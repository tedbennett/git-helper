process.stdin.setRawMode(true);

process.stdin.resume();

process.stdin.setEncoding('utf8');

let keys = '';
console.clear();
console.log('Enter search: ');

process.stdin.on('data', (key) => {
  // Exit: Ctrl-C, or type 'q' or 'exit' and hit enter
  if (key === '\u0003' || ((keys === 'exit' || keys === 'q') && key === '\u000d')) {
    process.exit();
  } else if (key === '\u007f') {
    // Delete
    keys = keys.slice(0, -1);
  } else if (key === '\u0015') {
    // Command-Delete - delete entire search field
    keys = '';
  } else if (key === '\u001B\u007f') {
    // Option-Delete - delete last word
    const re = /\b(\w+)(\s*)$/;
    const index = keys.search(re);
    keys = keys.slice(0, index);
  } else {
    // Add keypress to search field
    keys = (keys + key).replace(/\r?\n|\r/g, '');
  }

  console.clear();
  console.log(`Enter search: ${keys}`);
});
