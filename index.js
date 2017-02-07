const reactComponentCache = require('react-ssr-optimization');
const React = require('react');
const ReactDomServer = require('react-dom/server');

let renderCount = 0;

class HelloWorld extends React.PureComponent {
  render() {
    renderCount++;
    return React.DOM.div(null, this.props.text);
  }
}

HelloWorld.propTypes = {
  text: React.PropTypes.string
};


reactComponentCache({
  components: {
    "HelloWorld": function (props) {
      return props.text;
    }
  }
});

// Cache Miss
ReactDomServer.renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);

// Cache Hit -- render count should *not* increment
ReactDomServer.renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);

// Cache Hit -- render count should *not* increment
ReactDomServer.renderToString(React.createFactory(HelloWorld)({text: "Hello World X!"}));
console.log('renderCount is', renderCount);
