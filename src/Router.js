import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Page1 from './Page1';
import Page2 from './Page2';



const Router = () => {
    const [current, setCurrent] = useState('home')

    useEffect(() => {
        setRoute()
        window.addEventListener('hashchange', setRoute)
        return () => window.removeEventListener('hashchange', setRoute)
    }, [])

    const setRoute = () => {
        const location = window.location.href.split('/')
        const pathname = location[location.length - 1]
        setCurrent(pathname ? pathname : 'home')
    }

    return (
        <HashRouter>
            <Nav current = {current} />
            <Routes>
                <Route exact path="/Page1" element={<Page1 />} />
                <Route exact path="/Page2" element={<Page2 />} />
            </Routes>
        </HashRouter>
    )
}

export default Router