import React from 'react'
import './PlayerBanner.css';

class PlayerBanner extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    renderInfo() {
        console.log(this.props.playerInfo)
        if(this.props.playerInfo.fullName) {
            return (
                <div>
                    <h2>{this.props.playerInfo.fullName} | #{this.props.playerInfo.primaryNumber}</h2>
                    <h3>{this.props.playerInfo.primaryPosition.abbreviation} | {this.props.playerInfo.height} | {this.props.playerInfo.weight} lb | Age: {this.props.playerInfo.currentAge}</h3>
                    <h2>{this.props.playerInfo.currentTeam.name}</h2>
                </div>

            )
        }
    }

    render() {
        return (
            <div className="PlayerBanner">
                <img width="250" src={this.props.headshotLink} alt=""></img>
                {this.renderInfo()}
                
            </div>
        )}
}

export default PlayerBanner;