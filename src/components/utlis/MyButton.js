import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
    return (
        <Button
            href="http://google.com"
            variant="contained"
        >
            <img
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
                size="small"
                style={{
                    background: 'red',
                    color: 'white'
                }}
            />
            Button
        </Button>
    );
};

export default MyButton;