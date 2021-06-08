import React from 'react';
import './YearStats.css';

class YearStats extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.season}</td>
                <td>{this.props.team}</td>
                <td>{this.props.gp}</td>
                <td>{this.props.g}</td>
                <td>{this.props.a}</td>
                <td>{this.props.p}</td>
                <td>{this.props.plusMinus}</td>
                <td>{this.props.pim}</td>
                <td>{this.props.ppg}</td>
                <td>{this.props.ppp}</td>
                <td>{this.props.shg}</td>
                <td>{this.props.shp}</td>
                <td>{this.props.gwg}</td>
                <td>{this.props.otg}</td>
                <td>{this.props.s}</td>
                <td>{this.props.sPct}</td>
            </tr>
        )
    }
}

export default YearStats;