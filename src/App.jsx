import React, { Component } from 'react'

export default class App extends Component {
//Fetching Data from external API
  constructor() {
    super();

    this.state ={
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    //fetching
    fetch('https://jsonplaceholder.typicode.com/users')
    //fetch returns response(data) thus, we turn
    //that data into json()
    .then((response) => response.json())
    //After turning it to response
    //I can use it for whatever I want
    //thus I use the return data to monsters
    //state
    .then((users) => this.setState(() => {
      return { monsters: users }
    }))
  }


  render() {
    return (
      <div>

        {
          //displaying it on the screen
          this.state.monsters.map((monster) => {
            return <div key={monster.key} >
              {monster.name} </div>
          })
        }
        
      </div>
    )
  }
}
