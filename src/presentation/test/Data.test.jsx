import React from 'react';
import ReactJson from 'react-json-view';
import { Data } from '../Data.jsx';
import { render } from '@testing-library/react';

describe('should render a data component', () => {
    it('it should render an object with reactjson', () => {
        const { asFragment } = render(
        <Data data={[{"Hello": "This is a test"}]} />);
        expect(asFragment()).toMatchSnapshot()
    })
})