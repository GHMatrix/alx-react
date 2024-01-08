import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './Login';

describe('Login Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Login />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // Add more tests as needed
});
