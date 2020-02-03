import React from 'react';
import { shallow } from 'enzyme';
import Education from './Education.jsx';

describe('Education component', () => {
  it('renders a Education component', () => {
    const wrapper = shallow(<Education education={[]} />);
    expect(wrapper).toMatchSnapshot();
  })
});
