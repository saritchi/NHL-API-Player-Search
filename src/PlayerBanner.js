import React from 'react'
import './PlayerBanner.css';

class PlayerBanner extends React.Component {

    render() {
        return (
            <div >

                <table className="playerCard">
                    <tbody>
                        <tr>
                            <td>
                                <img width="250" src={this.props.headshotLink}></img>
                            </td>
                            <td>
                                <p>{this.props.playerInfo.fullName} {this.props.playerInfo.primaryNumber}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )}
}

export default PlayerBanner;