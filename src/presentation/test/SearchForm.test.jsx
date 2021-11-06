import React from 'react';
import { render } from '@testing-library/react';
import { SearchForm } from '../SearchForm';

describe('should render a search form', () => {
    it('it should render a component containing a form with an input, 5 radio buttons, and a button', () => {
        const { asFragment } = render(
        <SearchForm search='www.url.com' radioChange='GET'/>);
        expect(asFragment()).toMatchSnapshot()
    })
})