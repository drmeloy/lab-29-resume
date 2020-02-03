import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title.jsx';

describe('Title component', () => {
  it('renders a Title component', () => {
    const wrapper = shallow(<Title title={''} />);
    expect(wrapper).toMatchSnapshot();
  })
});
