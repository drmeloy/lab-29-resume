import React from 'react';
import { shallow } from 'enzyme';
import Name from './Name.jsx';

describe('Name component', () => {
  it('renders a Name component', () => {
    const wrapper = shallow(<Name name={''} />);
    expect(wrapper).toMatchSnapshot();
  })
});
