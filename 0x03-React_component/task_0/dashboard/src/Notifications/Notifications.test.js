import React from 'react';
import Notifications from './Notifications';
import { getFullYear } from '../Utils/utils';
import { render, screen } from '@testing-library/react';

describe('Notifications Component', () => {
  test('renders without crashing', () => {
    render(<Notifications />);
  });

  test('renders three list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('renders the text "Here is the list of notifications"', () => {
    render(<Notifications />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  test('getFullYear returns correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });

  test('renders correctly with an empty listNotifications array', () => {
    render(<Notifications listNotifications={[]} />);
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
    expect(screen.queryByText('Here is the list of notifications')).toBeNull();
  });

  test('renders listNotifications correctly with the right number of NotificationItem', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'default', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<p>Latest notification</p>' } },
    ];

    render(<Notifications listNotifications={listNotifications} />);
    
    listNotifications.forEach(notification => {
      expect(screen.getByText(notification.value)).toBeInTheDocument();
    });

    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
    expect(screen.queryByText('No new notification for now')).toBeNull();
  });
});
