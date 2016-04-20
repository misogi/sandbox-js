var Example = React.createClass({
  render: function() {
    return React.DOM.p(null, "Hello!");
  }
});

var ExampleFactory = React.createFactory(Example);
ReactDOM.render(ExampleFactory(), document.getElementById('container'));