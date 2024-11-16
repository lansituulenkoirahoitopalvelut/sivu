import { render, screen, fireEvent} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/Menu';

// Wrapper to provide Router context
const renderWithRouter = (ui) => {
    return render(<Router>{ui}</Router>);
  };

describe('Menu component', () => {

    test('renders the links', () => {
        renderWithRouter(<Menu />);
        expect(screen.getByRole('link', { name: /Koti/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Minä/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Hinnasto/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Ajanvaraus/i })).toBeInTheDocument();
    });

    test ('renders Koti component when the route is /', () => {
        renderWithRouter(<Menu />);
        fireEvent.click(screen.getByText(/Koti/i));
        expect(screen.getByText(/Tervetuloa Länsituulen koirahoitopalvelut sivustolle!/i)).toBeInTheDocument();
    })
});