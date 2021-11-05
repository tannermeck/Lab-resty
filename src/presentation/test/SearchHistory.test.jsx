import React from 'react';
import { render } from '@testing-library/react';
import { SearchHistory } from '../SearchHistory.jsx';

describe('renders a list of methods and urls', () => {
    it('should render a list from local storage', () => {
        const fakeStorage = [{ method: 'GET', url: 'www.me.com' }]
        localStorage.setItem('STORE', JSON.stringify(fakeStorage))
        const { asFragment } = render(
            <SearchHistory />
        )
        expect(asFragment()).toMatchSnapshot();
    })
})