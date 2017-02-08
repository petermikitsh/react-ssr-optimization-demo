// There are two approaches to requiring the electrode-react-ssr-caching module.

/* The first approach is to require "electrode-react-ssr-caching' *before*
 * importing react or react-dom/server.
 */

const SSRCaching = require("electrode-react-ssr-caching");

/* Alternatively, add the folloing plugin to your Webpack 1.x config:
 *
 * plugins: [
   new webpack.BannerPlugin(
    'global.SSRCaching = require("electrode-react-ssr-caching");',
      {
        raw: true,
        entryOnly: false
      }
    )
  ],
 */

const React = require('react');

/*
 * If you're babelifying your code, the ES6 import syntax will work too:
 */
 
// import {renderToString} from 'react-dom/server';

const renderToString = require('react-dom/server').renderToString;

/* Then -- anywhere in your code -- (e.g., before or after React and
 * react-dom/server import), configure cache settings.
 *
 * You'd probably want to configure your cache before ever calling
 * renderToString.
 */

SSRCaching.enableCaching();
SSRCaching.setCachingConfig({
  components: {
    HelloWorld: {
      strategy: "simple",
      enable: true
    }
  }
});

let renderCount = 0;

class HelloWorld extends React.Component {
  render() {
    renderCount++;
    return React.DOM.div(null, this.props.text);
  }
}

HelloWorld.propTypes = {
  text: React.PropTypes.string
};


// Cache Miss
renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);

// Cache Hit -- render count should *not* increment
renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);

// Cache Hit -- render count should *not* increment
renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);
