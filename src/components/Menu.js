import React, { useEffect } from "react";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import { logEvent } from "firebase/analytics";
import { analytics } from '../firebase/firebase';

import Home from "./Home";
import Mina from "./Mina";
import Hinnasto from "./Hinnasto";

//track page views
function usePageViews() {
    const location = useLocation(); //get current route

    useEffect(() => {
        //Log the page view event whenever the route changes
        logEvent(analytics, 'page_view', {
            page_path: location.pathname,
        });
    }, [location]);
}

function Menu() {
    usePageViews();

    return(
        <>
        <nav>
            <NavLink to="/" end>Koti</NavLink>{" "}
            <NavLink to="/mina">Minä</NavLink>{" "}
            <NavLink to="/hinnasto">Hinnasto</NavLink>{" "}
            <a href="https://www.varaaheti.fi/lansituulenkoirahoitopalvelut/fi/lansituulen_koirahoitopalvelut/services" target="_blank" rel="noopener noreferrer">Ajanvaraus</a>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mina" element={<Mina />} />
            <Route path="/hinnasto" element={<Hinnasto />} />
        </Routes>
    </>
    );
}

export default Menu;