import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact.jsx';

describe('Contact component', () => {
  it('renders a Contact component', () => {
    const wrapper = shallow(<Contact phone={''} email={''} sites={[]} />);
    expect(wrapper).toMatchSnapshot();
  })
});
