import React from 'react';
import './CareerStats.js';

class CareerStats extends React.Component {
    
    renderHead() {
        if(this.props.stats[0]){
            return (
                <thead>
                    <tr>
                        <th>Season</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>G</th>
                        <th>A</th>
                        <th>P</th>
                        <th>+/-</th>
                        <th>PIM</th>
                        <th>PPP</th>
                        <th>SHG</th>
                        <th>SHP</th>
                        <th>GWG</th>
                        <th>OTG</th>
                        <th>S</th>
                        <th>S%</th>
                    </tr>
                </thead>
            )
        }

    }

    render() {
        return (
            <table>
                {this.renderHead()}
                
            </table>
        )
    }
}

export default CareerStats;