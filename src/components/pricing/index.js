import React, { Component } from 'react';

class Pricing extends Component {

    state = {
        prices:[100,150,250],
        positions:['Balcony','Floor','VIP'],
        desc:[
            'Per dolorum detraxit expetendis ei, eam sint timeam an. Ei dolores apeirian pri. Quo in habemus insolens, eu vidit',
            'referrentur nam, eam ea discere facilisis. Ne sea sonet graeci comprehensam. Graece salutandi persecuti ad qui.',
            'Quo in habemus insolens, eu vidit referrentur nam, eam ea discere facilisis. Ne sea sonet graeci comprehensam.ece ndi cuti ad qui.' 
        ],
        linkto:['http://sales/b','http://sales/f','http://sales/v']
    }

    showBoxes = () => (
        this.state.prices.map((box,i)=>(
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
                        button
                    </div>
                </div>
            </div>
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