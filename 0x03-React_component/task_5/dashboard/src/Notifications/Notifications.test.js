import React from 'react';
import Notifications from './Notifications';
import { getFullYear } from '../Utils/utils';
import { render, screen, act } from '@testing-library/react';

describe('Notifications Component', () => {
  // ... (existing tests)

  test('does not rerender with the same listNotifications props', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'default', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<p>Latest notification</p>' } },
    ];

    // Render the component with the initial listNotifications
    const { rerender } = render(<Notifications listNotifications={listNotifications} />);

    // Capture the current rendered component
    const initialRender = screen.baseElement;

    // Rerender with the same listNotifications
    act(() => {
      rerender(<Notifications listNotifications={listNotifications} />);
    });

    // Check if the component did not rerender (should be the same instance)
    expect(screen.baseElement).toBe(initialRender);
  });

  test('rerenders with a longer listNotifications props', () => {
    const initialListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
    ];

    const updatedListNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'default', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<p>Latest notification</p>' } },
    ];

    // Render the component with the initial listNotifications
    const { rerender } = render(<Notifications listNotifications={initialListNotifications} />);

    // Capture the current rendered component
    const initialRender = screen.baseElement;

    // Rerender with a longer listNotifications
    act(() => {
      rerender(<Notifications listNotifications={updatedListNotifications} />);
    });

    // Check if the component rerendered (should be a different instance)
    expect(screen.baseElement).not.toBe(initialRender);
  });
});
