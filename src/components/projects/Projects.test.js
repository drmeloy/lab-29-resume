import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects.jsx';

describe('Projects component', () => {
  it('renders a Projects component', () => {
    const wrapper = shallow(<Projects projects={[]} />);
    expect(wrapper).toMatchSnapshot();
  })
});
