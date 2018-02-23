import React from 'react';
import Child from './child'
import {hot} from 'react-hot-loader';

@hot(module)
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