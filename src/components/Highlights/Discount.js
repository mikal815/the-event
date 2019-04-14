import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade>
                        <div className="discount_percentage">
                            <span>25%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before June 20th</h3>
                            <p>
                                Per dolorum detraxit expetendis ei, eam sint timeam an. Ei dolores apeirian pri. 
                                Quo in habemus insolens, eu vidit referrentur nam, eam ea discere facilisis. 
                                Ne sea sonet graeci comprehensam. Graece salutandi persecuti ad qui.
                            </p>
                            
                            <div>
                                Button
                            </div>
                        </div>

                    </Slide>
                    
                </div>
            </div>
        );
    }
}

export default Discount;