import React from 'react';
import UserCard from "./components/UserCard.js";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    console.log("Component Did Mount");
    fetch("https://api.github.com/users/AdamMaley")
      .then(res => res.json())
      .then(user => {
        console.log("User: ", user);
        this.setState({ 
          user: user.name,
        });
      })
      .catch(err => {
        console.log("The Error Is: ", err);
      });
      
  }


  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.user !== this.state.user) {
      console.log("New User Updated");
    }
  }


  render() {
    console.log("Rendering");

    return (
      <div>
        <h1>Hello User!</h1>
        <UserCard user={user} />
      </div>
    )
  }
}



export default App;
