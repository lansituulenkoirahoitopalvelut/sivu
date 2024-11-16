import { render, screen} from '@testing-library/react';
import Hinnasto from '../components/Hinnasto';
import kuva from '../images/tokakuva.jpg';

describe('Hinnasto component', () => {

    test('renders the image', () => {
        render(<Hinnasto />);
        const image = screen.getByAltText(/Kuva/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', kuva);
        expect(image).toHaveAttribute('alt', 'Kuva');
    });

    test('renders the table correctly', () => {
        render(<Hinnasto />);

        //Check for headers
        const headerCells = screen.getAllByRole('columnheader');
        expect(headerCells).toHaveLength(2);  // Check there are 2 headers
        expect(headerCells[0]).toHaveTextContent('Palvelu');
        expect(headerCells[1]).toHaveTextContent('Hinta (alkaen)');

        //Check the number of rows
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(7);

        //Check one row for correct content
        expect(rows[1]).toHaveTextContent('Pesu ja trimmaus');
        expect(rows[1]).toHaveTextContent('80€');
    });

    test ('renders the link correctly', () => {
        render(<Hinnasto />);
        const link = screen.getByRole('link', { name: /ajanvarauksesta/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://www.varaaheti.fi/lansituulenkoirahoitopalvelut/fi/lansituulen_koirahoitopalvelut/services');
    })

    test('renders the grid correctly', () => {
        render(<Hinnasto />);
        const gridItems = screen.getAllByTestId('grid-item');
        expect(gridItems.length).toBeGreaterThanOrEqual(2);
    });
});