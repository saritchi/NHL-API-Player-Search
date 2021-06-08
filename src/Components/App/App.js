import React from 'react';
import './App.css';
import $ from 'jquery'
import PlayerBanner from '../PlayerBanner/PlayerBanner'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      teamIds: [],
      players: [{player: "", id:""}],
      searchedPlayer: "",
      headshotLink: "",
      stats: []
    }

    this.performSearch()
    
  }

  performSearch(searchTerm) {
    const playerList = this.state.players
    playerList.forEach((player) => {
      if(searchTerm === player.name){
        console.log("Player Found")
        console.log(player.link)
        const urlString = "https://statsapi.web.nhl.com/api/v1/people/" + player.link;
        // Retrieve Player Headshot
        $.ajax({
          url: urlString,
          success: (searchResults) => {
            console.log(searchResults.people[0])
            this.setState({searchedPlayer: searchResults.people[0], headshotLink:"http://nhl.bamcontent.com/images/headshots/current/168x168/"+ searchResults.people[0].id +".jpg"})
          },
          error: (xhr, status, err) => {
            console.log("Player headshot does not exist")
          }
        })
        // Retrieve player statistics
        $.ajax({
          url: urlString + "/stats?stats=yearByYear",
          success: (searchResults) => {
            const yearStats = searchResults.stats[0].splits;
            const stats = [];
            yearStats.forEach((year) => {
              stats.push(year);
            })
            console.log(stats)
            this.setState({stats: stats})
          },
          error: (xhr, status, err) => {
            console.log("Player statistics does not exist")
          }
        })
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const playerTerm = event.target.value
    console.log("Searching for player...")
    this.performSearch(playerTerm)
  }

  componentDidMount() {
    /* In order to search up players using the NHL api, the given ID of the player must be used. i.e: https://statsapi.web.nhl.com/api/v1/people/ID
       To obtain the player ID you must:
       1. Get the ID's of each NHL Team
       2. Use the team ID to find thier respective roster
       3. Find the player you want to lookup and use thier associated ID for the query
    */
    // Extract Team Ids
    const urlString = "https://statsapi.web.nhl.com/api/v1/teams"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched NHL team data")
        const teams = searchResults.teams
        const teamIds = []
        teams.forEach((team) => {
          teamIds.push(team.id)
        })
        this.setState({teamIds: teamIds});
        console.log(this.state.teamIds)

        // Extract player names and thier Ids/Links
        this.state.teamIds.forEach((teamId) => {
          $.ajax({
            url: "https://statsapi.web.nhl.com/api/v1/teams/" + teamId + "/roster",
            success: (searchResults2) => {
              console.log("Fetched NHL Roster data")
              const rosters = searchResults2.roster
              var playerList = this.state.players
              rosters.forEach((player) => {
                let playerObject = {
                  name: player.person.fullName,
                  link: player.person.id
                }
                playerList.push(playerObject)
              })

              this.setState({players: playerList});
              console.log(this.state.players)
            },
            error: (xhr, status, err) => {
              console.log("Failed to fetch seondary results")
            }
          })
        })
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch")
      }
    })
  }

  render(){
    return (
      <div className="App">
  
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img width="100" src="Ice_hockey_stick.svg" alt="hockey stick icon"></img>
              </td>
              <td width="24"/>
              <td>
                <h1>Hockey Off-nights Tool</h1>
              </td>
            </tr>
          </tbody>
        </table>
  
        <input className="playerSearch" placeholder="Enter a players name..." onChange={this.searchChangeHandler.bind(this)}></input>

        <PlayerBanner headshotLink={this.state.headshotLink} playerInfo={this.state.searchedPlayer}/>
  
      </div>
    );
  }
}

export default App;
