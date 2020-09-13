const { data } = require('./data');

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log([].join('') === '');

let query = process.argv.length > 2 ? process.argv.slice(2).join('') : '';
let results = [];
console.clear();
console.log(`Enter search: ${query}`);

process.stdin.on('data', (key) => {
  // Exit: Ctrl-C, or type 'q' or 'exit' and hit enter
  if (key === '\u0003' || ((query === 'exit' || query === 'q') && key === '\u000d')) {
    process.exit();
  } else if (key === '\u007f') {
    // Delete
    query = query.slice(0, -1);
  } else if (key === '\u0015') {
    // Command-Delete - delete entire search field
    query = '';
  } else if (key === '\u001B\u007f') {
    // Option-Delete - delete last word
    const re = /\b(\w+)(\s*)$/;
    const index = query.search(re);
    query = query.slice(0, index);
  } else {
    // Add keypress to search field
    query = (query + key).replace(/\r?\n|\r/g, '');
  }

  console.clear();
  console.log(`Enter search: ${query}`);

  if (query !== '') {
    results = Object.keys(data)
      .filter((command) => command.includes(query))
      .slice(0, process.stdout.rows - 2);

    results.forEach((result) => console.log(`${data[result].padEnd(10, ' ')} - ${result}`));
  } else {
    results = [];
  }
});
