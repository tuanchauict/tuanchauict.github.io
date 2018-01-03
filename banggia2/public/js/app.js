class App extends React.Component {
  render() {
    return (
      <div id="desktop">
        <PTable />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('content'));