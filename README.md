# Git-help

This is a function to help learn git with oh-my-zsh's [git aliases](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git). Run the program, and start typing the command you'd like to use, and all aliases for that command will appear. Alternatively, pass the query as an argument to the function.

Quit with Ctrl-C, or typing 'q' or 'exit' and pressing return.

## How To Use

(Requires NodeJS) Clone this repo, and run with `node main.js`. You can add an alias to run this file to your terminal config for easy use (e.g, `gh = node /path/to/repo/main.js`).

If you have a different set of aliases you'd like to search through, simply edit the `data` object in `data.js`. It is a JSON object with command:alias key:value pairs.

## To-Do

* Would like to have something to open the man pages for a command.