import React from 'react';
import NavComponent from './NavComponent';
import Footer from './Footer';

const Layouts = ({children}) => {
    return (
        <div>
            <NavComponent/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layouts;