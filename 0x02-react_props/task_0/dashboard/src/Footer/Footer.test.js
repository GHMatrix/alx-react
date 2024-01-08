import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct copyright text', () => {
    const wrapper = shallow(<Footer />);
    const copyrightText = wrapper.find('p').text();
    const currentYear = new Date().getFullYear();
    expect(copyrightText).toEqual(`Copyright ${currentYear} - All rights reserved.`);
  });
});
