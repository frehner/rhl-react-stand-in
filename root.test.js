import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import React from 'react';
import Root from './root'
import Child from './child'

it('should find the child component', () => {
  const wrapper = shallow(<Root/>)
  expect(wrapper.find(Child).at(0).prop('name')).toBe('Jack')
})