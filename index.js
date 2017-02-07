const reactComponentCache = require('react-ssr-optimization');
reactComponentCache({
  components: {
    "HelloWorld": function (props) {
      return props.text;
    }
  }
});

const React = require('react');
const ReactDomServer = require('react-dom/server');

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
ReactDomServer.renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);

// Cache Hit -- render count should *not* increment
ReactDomServer.renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);

// Cache Hit -- render count should *not* increment
ReactDomServer.renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);
