import React from 'react';
import { shallow } from 'enzyme';
import Skills from './Skills.jsx';

describe('Skills component', () => {
  it('renders a Skills component', () => {
    const wrapper = shallow(<Skills skills={[]} />);
    expect(wrapper).toMatchSnapshot();
  })
});
