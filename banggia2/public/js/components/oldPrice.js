class OldPriceGroup extends React.Component {
  render() {
    return (
      <div className="column ui internally celled grid row" style={{color: '#000'}}>
        <CeilingCell/>
        <OldPriceCell/>
        <FloorCell/>
      </div>
    )
  }
}

// class CeilingCell extends React.Component {
//   static contextTypes = {
//     ceiling: PropTypes.number,
//   };
  
  
//   render() {
//     return (
//       <div>{this.context.ceiling}</div>
//     );
//   }
// }

// class FloorCell extends React.Component {
//   static contextTypes = {
//     floor: PropTypes.number,
//   };
  
//   render() {
//     return (
//       <div>{this.context.floor}</div>
//     );
//   }
// }

// class OldPriceCell extends React.Component {
//   static contextTypes = {
//     oldPrice: PropTypes.number,
//   };
  
//   render() {
//     return (
//       <div>{this.context.oldPrice}</div>
//     );
//   }
// }

