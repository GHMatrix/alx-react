import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import WithLogging from './WithLogging';

describe('WithLogging HOC', () => {
  let container = null;
  const OriginalConsoleLog = console.log;

  beforeAll(() => {
    // Mock console.log to track calls
    console.log = jest.fn();
  });

  beforeEach(() => {
    // Set up a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // Clean up on exiting
    unmountComponentAtNode(container);
    container.remove();
  });

  afterAll(() => {
    // Restore original console.log after all tests
    console.log = OriginalConsoleLog;
  });

  it('should log mount and unmount messages with "Component" for pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p />);
    act(() => {
      render(<WrappedComponent />, container);
    });
    expect(console.log).toHaveBeenCalledWith('Component is mounted on componentDidMount()');

    act(() => {
      unmountComponentAtNode(container);
    });
    expect(console.log).toHaveBeenCalledWith('Component is going to unmount on componentWillUnmount()');
  });

  it('should log mount and unmount messages with the component name for Login component', () => {
    const Login = () => <div>Login component content</div>;
    const WrappedLogin = WithLogging(Login);
    act(() => {
      render(<WrappedLogin />, container);
    });
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted on componentDidMount()');

    act(() => {
      unmountComponentAtNode(container);
    });
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount on componentWillUnmount()');
  });
});
