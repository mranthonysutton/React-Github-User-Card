import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "@material-ui/core";
import Profile from "./Components/Profile";
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

        <div className="followers-card-container">
          {this.state.followers.map(item => (
            <Card key={item.id} className="custom-card-component">
              <h1>{item.login}</h1>
              <img src={item.avatar_url} alt={item.login} />
              <br />
              <Button
                className="button button-spacing"
                color="primary"
                variant="contained"
                href={item.html_url}
                target="_blank"
              >
                View Profile
              </Button>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
