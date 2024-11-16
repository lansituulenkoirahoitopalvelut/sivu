import { render, screen} from '@testing-library/react';
import Home from '../components/Home';

describe('Home component', () => {

    test('renders first line', () => {
        render(<Home />);
        const firstLine = screen.getByText(/Tervetuloa Länsituulen koirahoitopalvelut sivustolle!/i);
        expect(firstLine).toBeInTheDocument();
    });

    test('renders second line', () => {
        render(<Home />);
        const secondLine = screen.getByText(/Tältä sivustolta löydät tietoa tarjoamastani palveluista, hinnastoni, sekä hieman taustaa minusta itsestäni!/i);
        expect(secondLine).toBeInTheDocument();
    });

    test('renders third line', () => {
        render(<Home />);
        const thirdLine = screen.getByText(/Antoisia selaushetkiä!/i);
        expect(thirdLine).toBeInTheDocument();
    });
});