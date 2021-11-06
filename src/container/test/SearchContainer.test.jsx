import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import SearchContainer from '../SearchContainer';

describe('it should display a todo', () => {
    it('should list one todo by its id', async () => {
        render(<SearchContainer />)
        const urlInput = await screen.findByPlaceholderText('URL')
        userEvent.type(urlInput, 'https://jsonplaceholder.typicode.com/todos/1')
        const submit = await screen.findByRole('button');
        userEvent.click(submit);
        await waitFor(() => {
            const data = screen.getAllByText('root', {exact: false})
            expect(data).toHaveLength(1);
        })
        const ul = await screen.findByRole('list')
        expect(ul).toMatchSnapshot();
    })
})