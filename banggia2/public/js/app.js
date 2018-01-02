class App extends React.Component {

  render() {
    return (
      <div>
        <PTable />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('content'));