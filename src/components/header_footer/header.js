import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                    position="fixed"
                    style={{
                        backgroundColor:'#2f2f2f',
                        boxShadow:'none',
                        padding: '10px 0px'
                    }}
                >
                    header
                </AppBar>
            </div>
        );
    }
}

export default Header;