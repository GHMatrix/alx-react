import React from 'react';
import Notifications from './Notifications';
import { getFullYear } from '../Utils/utils';
import { render, screen } from '@testing-library/react';

test('Notifications renders without crashing', () => {
    render(<Notifications />);
});

test('Notifications renders three list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('Notifications renders the text Here is the list of notifications', () => {
    render(<Notifications />);
    expect(screen.getByText('Here is the list of notifications'))
});
test('getFullYear returns correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
});
