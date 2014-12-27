markedReact.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  langPrefix: 'language-',
});

var MarkdownBox = React.createClass({
  getInitialState: function() {
    return { text: "" };
  },
  componentDidMount: function() {
  },
  render: function() {
    return (
      <div className="MarkdownBox">
      <textarea ref="text" /><br />
        <button onClick={this.handleClick}>do</button>
        <Markdown text={this.state.text} />
      </div>
    );
  },
  handleClick: function(ev) {
    ev.preventDefault();
    var text = this.refs.text.getDOMNode().value.trim();
    this.setState({text: text});
  },
});

var Markdown = React.createClass({
  render: function() {
    return React.createElement('div', {className: 'Markdown'}, markedReact(this.props.text));
  },
});

React.render(
  React.createElement(MarkdownBox, null),
  document.getElementById('content')
);
