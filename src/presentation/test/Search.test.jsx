import React from 'react';
import { render } from '@testing-library/react'
import { Search } from '../Search.jsx';

describe('should render a list from local storage', () => {
    it('it should render a list containing method and url', () => {
        const { asFragment } = render(
        <Search verb="POST" link="www.me.com" />);
        expect(asFragment()).toMatchSnapshot()
    })
})