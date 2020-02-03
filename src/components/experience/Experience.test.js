import React from 'react';
import { shallow } from 'enzyme';
import Experience from './Experience.jsx';

describe('Experience component', () => {
  it('renders a Experience component', () => {
    const wrapper = shallow(<Experience experience={[]} />);
    expect(wrapper).toMatchSnapshot();
  })
});
