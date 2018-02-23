import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <div>
        child name: {this.props.name}
      </div>
    )
  }
}

export default Child;