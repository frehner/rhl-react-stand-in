import React from 'react';
import Child from './child'

class Root extends React.Component {
  render() {
    return (
      <div>
        hi
        <Child name="Jack"/>
      </div>
    )
  }
}

export default Root;