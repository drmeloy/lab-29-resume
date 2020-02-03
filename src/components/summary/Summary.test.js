import React from 'react';
import { shallow } from 'enzyme';
import Summary from './Summary.jsx';

describe('Summary component', () => {
  it('renders a Summary component', () => {
    const wrapper = shallow(<Summary summary={''} />);
    expect(wrapper).toMatchSnapshot();
  })
});
