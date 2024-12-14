import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import kuva from '../images/omakuva.png';

function Mina() {

    return(
        <div>
        <br></br>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={4} data-testid="grid-item">
                    <div><img id='kuva' src={kuva} alt='Omakuva' height={'auto'} width={'100%'} /></div>
                </Grid>
                <Grid item xs={6.5} data-testid="grid-item">
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>Hei ja tervetuloa Länsituulen koirahoitopalvelut sivustolle!</p>
                        <p>Olen yrityksen omistaja Edvin "Evi" West ja olen työskennellyt koirien parissa vuodesta 2019. 
                            Asun Kanta-Hämeessä Lopella ja kotoa löytyy 6 koiraa, joista kaikki on saksanpystykorvia.</p>
                        <p>Tällä hetkellä toimin päätoimisesti koiratrimmaajana mutta tulevaisuudessa toivon myös saavani tutkinnot koirahierojana toimimiseen sekä koirahoitolan pitämiseen.</p>
                    </div>
            </Grid>
        </Grid>
        </Container>
        </div>
    );
}

export default Mina;