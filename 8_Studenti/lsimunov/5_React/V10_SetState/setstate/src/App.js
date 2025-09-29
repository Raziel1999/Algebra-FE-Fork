import React from 'react'

import './App.css';
import { users } from './data/dummyData';
import { UserFunction, UserClass, UserChildren } from './user';



class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      users: users,
      childrenText: "A hobi mi je plivanje"
    };
  }

  btnClickHandler = (event) =>{
    console.log("Kliknuo!");

    const newUsers = this.state.users.map(user => {
      return {...user, years: user.years + 1};
    });

    this.setState ({users: newUsers})
  }

  render (){

    const { users, childrenText }= this.state;


    return (
      <div className="App">
       <h1>React aplikacija</h1>
       <p>Ovo zaista radi</p>
       <UserFunction ime={users[0].name} years={users[0].years} />
       <UserClass ime={users[1].name} years={users[1].years} />
       <UserChildren ime={users[2].name} years={users[2].years}>{childrenText}</UserChildren>
       <button onClick={this.btnClickHandler}>Uvečaj godine!</button>
      </div>
    );
  }
}

export default App;
