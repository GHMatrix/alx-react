import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe('Header Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render the logo and header text', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').prop('src')).toEqual(expect.stringContaining('holberton-logo.jpeg'));
    expect(wrapper.find('h1').text()).toBe('School dashboard');
  });

  // Add more tests as needed
});
