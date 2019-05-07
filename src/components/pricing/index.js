import React, { Component } from 'react';
import MyButton from '../utlis/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Floor','Balcony','VIP'],
        desc:[
            'Nice comfortable seating. Good if you want a nice view but do not mind being farther away from the performers',
            'This is the general admission standing area. Hang out at one of the side bars or get up close to the stage. Your choice!',
            'This all inclusive package gives you access to the floor, balcony, and backstage VIP area (with bottle service)' 
        ],
        linkto:['http://sales/f','http://sales/b','http://sales/v'],
        delay:[500,0,500]
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>${this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            bck="#ffa800"
                            color="#ffffff"
                            link={this.state.linkto[i]}
                        />
                    </div>
                </div>
            </div>
            </Zoom>
            
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Pricing;