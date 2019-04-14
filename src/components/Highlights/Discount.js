import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <div className="discount_percentage">
                        <span>25%</span>
                        <span>OFF</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Discount;