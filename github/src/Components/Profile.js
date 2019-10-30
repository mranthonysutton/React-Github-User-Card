import React from "react";
import { Card, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const Profile = props => {
  const classes = useStyles();

  return (
    <div className="profile-container">
      <Card>
        <h1>{props.profile.name}</h1>
        <h2>{props.profile.login}</h2>
        <img src={props.profile.avatar_url} alt={props.profile.name} />
        <p>
          <Button
            variant="contained"
            className={classes.button}
            href={props.profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </Button>
        </p>
        <p>{props.profile.location}</p>
        <p>Followers: {props.profile.followers}</p>
        <p>Following: {props.profile.following}</p>
        <Button
          variant="contained"
          className={classes.button}
          onClick={props.loadFollowers}
          color="primary"
        >
          Load Followers
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
