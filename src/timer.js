var Timer = React.createClass({
  getInitialState: function() {
    return {
      ore: new Date(),
      are: new Date(),
    };
  },
  componentDidMount: function() {
    setInterval((function(){
      this.setState({
        ore: this.state.ore,
        are: new Date(),
      });
    }).bind(this), 1000);
  },
  render: function() {
    return (
      <div className="Timer">
        <div>{this.state.ore.toString()}</div>
        <div>{this.state.are.toString()}</div>
      </div>
    );
  },
});

React.render(
  <Timer />,
  document.getElementById('content')
);
