// NotificationItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('should render without crashing', () => {
    render(<NotificationItem id={1} type='default' value='test' markAsRead={() => {}} />);
  });

  it('should render correct html with dummy type and value props', () => {
    const type = 'default';
    const value = 'test';
    const { getByText } = render(<NotificationItem id={1} type={type} value={value} markAsRead={() => {}} />);
    expect(getByText(value)).toBeInTheDocument();
  });

  it('should render correct html with dummy html props', () => {
    const type = 'default';
    const value = 'test';
    const html = { __html: '<u>test</u>' };
    const { getByText } = render(<NotificationItem id={1} type={type} value={value} html={html} markAsRead={() => {}} />);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('should call markAsRead when clicked', () => {
    const markAsRead = jest.fn();
    render(<NotificationItem id={1} type='default' value='test' markAsRead={markAsRead} />);
    userEvent.click(screen.getByText('test'));
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
