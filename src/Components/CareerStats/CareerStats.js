import React from 'react';
import './CareerStats.css';
import YearStats from '../YearStats/YearStats'

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
                        <th>PPG</th>
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
                {this.props.stats.map(statline => 
                    <YearStats key={statline.season} 
                            season={statline.season}
                            team={statline.team.name} 
                            gp={statline.stat.games} 
                            g={statline.stat.goals} 
                            a={statline.stat.assists} 
                            p={statline.stat.points} 
                            plusMinus={statline.stat.plusMinus} 
                            pim={statline.stat.penaltyMinutes} 
                            ppg={statline.stat.powerPlayGoals} 
                            ppp={statline.stat.powerPlayPoints} 
                            shg={statline.stat.shortHandedGoals}
                            shp={statline.stat.shortHandedPoints}
                            gwg={statline.stat.gameWinningGoals}
                            otg={statline.stat.overTimeGoals}
                            s={statline.stat.shots}
                            sPct={statline.stat.shotPct}/>
                )}
            </table>
        )
    }
}

export default CareerStats;