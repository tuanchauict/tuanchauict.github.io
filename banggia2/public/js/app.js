class PriceTable extends React.Component {

  render() {
    return (
      <div>
        <TableHeader/>
        <TableBody/>
      </div>
    );
  }
}

class TableHeader extends React.Component {

  render() {
    return (
      <div></div>
    );
  }
}

class TableBody extends React.Component {

  render() {
    return (
      <div className='ui internally celled grid'>
        <BodyRow/>
        <BodyRow/>
      </div>
    );
  }
}

class BodyRow extends React.Component {

  render() {
    const data = {
      code: 'HAG',
      name: 'Hoang Anh Gia Lai',
      oldPrice: {
        ceil: 7.97,
        floor: 6.93,
        price: 7.45
      },
      stats: {
        total: 233455,
        avg: 7.37,
        high: 7.46,
        low: 7.33,
        foreign: {
          buy: 714,
          sell: 100
        }
      },
      match: {
        price: 7.35,
        amount: 21735
      },
      buy: {
        one: {
          price: 7.34,
          amount: 6066
        },
        two: {
          price: 7.33,
          amount: 10606
        },
        three: {
          price: 7.32,
          amount: 9215
        }
      },
      sell: {
        one: {
          price: 7.35,
          amount: 6066
        },
        two: {
          price: 7.38,
          amount: 10606
        },
        three: {
          price: 7.39,
          amount: 9215
        }
      }
    }
    return (
      <div className='row'>
        <NameCell
          oldPrice={data.oldPrice.price}
          price={data.match.price}
          name={data.code}/>
        <CeilingCell
          ceil={data.oldPrice.ceil}
        />
        <FloorCell 
          floor={data.oldPrice.floor}
        />
      </div>
    );
  }
}

class BodyCell extends React.Component {

  state = {
    lastValue: 0
  };

  componentDidMount = () => {}

  render() {
    console.log();
    return (
      <div></div>
    );
  }
}

class NameCell extends React.Component {
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

class CeilingCell extends React.Component {
  render() {
    return (
      <div>{this.props.ceil}</div>
    );
  }
}

class FloorCell extends React.Component {
  render() {
    return (
      <div>{this.props.floor}</div>
    );
  }
}

class RefCell extends React.Component {
  render() {
    return (
      <div>{this.props.ref}</div>
    );
  }
}

class PriceAmountCells extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

ReactDOM.render(
  <PriceTable/>, document.getElementById('content'));