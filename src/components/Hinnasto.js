import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import kuva from '../images/tokakuva.jpg'

function Hinnasto() {

    return(
        <div>
        <br></br>
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <div><img id='kuva' src={kuva} alt='Kuva' height={'auto'} width={'100%'} /></div>
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <table>
                            <tr>
                                <th>Palvelu</th>
                                <th>Hinta (alkaen)</th>
                            </tr>
                            <tr>
                                <td>Pesu ja trimmaus</td>
                                <td>80€</td>
                            </tr>
                            <tr>
                                <td>Pesu</td>
                                <td>40€</td>
                            </tr>
                            <tr>
                                <td>Nyppiminen</td>
                                <td>90€</td>
                            </tr>
                            <tr>
                                <td>Pentupaketit</td>
                                <td>30€</td>
                            </tr>
                            <tr>
                                <td>Siistimiset</td>
                                <td>15€</td>
                            </tr>
                            <tr>
                                <td>Kynsien leikkaus</td>
                                <td>10€</td>
                            </tr>
                        </table>
                        <p>Kaikki trimmauspalvelut sisältävät kynsienleikkuun.</p>
                        <br></br>
                        <p>Tarkemmat hinnat <a href='https://www.varaaheti.fi/lansituulenkoirahoitopalvelut/fi/lansituulen_koirahoitopalvelut/services'>ajanvarauksesta</a>.</p>
                        <br></br>
                    </div>
            </Grid>
        </Grid>
        </Container>
        </div>
    );
}

export default Hinnasto;