/*globals define*/
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    var firstSurface = new Surface({
      size: [200,400],
      content: 'hello world',
      properties: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#FA5C4F'
      }
    })
    
    mainContext.add(firstSurface);
});
