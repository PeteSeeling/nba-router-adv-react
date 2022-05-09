import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
    it('renders clickable names on list view. Onclick redirects to detail page', async () => {
        render(
            <MemoryRouter  initialEntries={['/']} initialIndex={1}>
                <App />
            </MemoryRouter>
        );

        screen.getByText(/loading/i);
        await waitForElementToBeRemoved(await screen.findByText(/loading/i));

        const detailsLink = await screen.findByText('Summer Smith');
        userEvent.click(detailsLink);

        await screen.findByText('Status: Alive');
    });

    it('renders the Summer Smith Detail Page', async () => {
        render(
            <MemoryRouter initialEntries={['/character/3']} initialIndex={0}>
                <App />
            </MemoryRouter>
        );
        
        screen.getByText(/loading/i);
        await waitForElementToBeRemoved(await screen.findByText(/loading/i));

        const name = await screen.findByText('Summer Smith');
  
    })
})