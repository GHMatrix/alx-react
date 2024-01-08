import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns correct string when argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns correct string when argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test("returns right notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
