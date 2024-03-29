import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">Boardwalk Pier Stage</div>
                <div className="footer_copyright">
                    BPS 2022 All rights reserved
                </div>
            </Fade>

        </footer>
    );
};

export default Footer;