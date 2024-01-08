import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
    it('should render without crashing', () => {
        render(<NotificationItem type='default' value='test' />);
    });

    it('should render correct html with dummy type and value props', () => {
        const type = 'default';
        const value = 'test';
        const { getByText } = render(<NotificationItem type={type} value={value} />);
        expect(getByText(value)).toBeInTheDocument();
    });

    it('should render correct html with dummy html props', () => {
        const type = 'default';
        const value = 'test';
        const html = { __html: '<u>test</u>' };
        const { getByText } = render(<NotificationItem type={type} value={value} html={html} />);
        expect(getByText('test')).toBeInTheDocument();
    });
});
