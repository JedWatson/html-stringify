html-stringify
================

Converts Javascript Objects or Arrays to pretty HTML string for rendering in a browser.

## Usage

Available as an npm module:

`npm install html-stringify`

Then:

    var htmlStringify = require('html-stringify');
    
    var myObj = {
      str: 'It formats strings, numbers, booleans and dates',
      bool: true,
      date: new Date(),
      num: 42,
      arr: [
        'And nested arrays / objects',
        {
          key: 'value'
        }
      ]
    };
    
    var output = htmlStringify(myObj);
    
For a client-side implementation, see [react-domify](https://github.com/JedWatson/react-domify)
