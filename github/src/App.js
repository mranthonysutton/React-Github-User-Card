import React, { Component } from "react";
import axios from "axios";
import Profile from "./Components/Profile";
// import Profile from "./Components/Profile";
import "./App.css";

class App extends Component {
  state = { profile: [], followers: [] };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/mranthonysutton")
      .then(response => {
        // console.log(response);
        this.setState({
          profile: response.data
        });
      })
      .catch(error => console.log(error));
  }

  loadFollowers = () => {
    axios
      .get(this.state.profile.followers_url)
      .then(response => this.setState({ followers: response.data }))
      .catch(error => console.log(error));
  };

  render(props) {
    return (
      <div className="App">
        <Profile
          profile={this.state.profile}
          loadFollowers={this.loadFollowers}
        />
        {this.state.followers.map(item => (
          <div key={item.id}>
            <h3>{item.login}</h3>
            <img src={item.avatar_url} alt={item.login} />
            <a href={item.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
