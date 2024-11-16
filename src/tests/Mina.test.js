import { render, screen} from '@testing-library/react';
import Mina from '../components/Mina';
import kuva from '../images/omakuva.png';

describe('Mina component', () => {

    test('renders the image', () => {
        render(<Mina />);
        const image = screen.getByAltText(/Omakuva/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', kuva);
        expect(image).toHaveAttribute('alt', 'Omakuva');
    });

    test('renders the first line', () => {
        const firstLine = screen.getByText(/Hei ja tervetuloa Länsituulen koirahoitopalvelut sivustolle!/i);
        expect(firstLine).toBeInTheDocument();
    });

    test('renders the last line', () => {
        const lastLine = screen.getByText(/Tällä hetkellä toimin päätoimisesti koiratrimmaajana mutta tulevaisuudessa toivon myös saavani tutkinnot koirahierojana toimimiseen sekä koirahoitolan pitämiseen./i);
        expect(lastLine).toBeInTheDocument();
    });
})