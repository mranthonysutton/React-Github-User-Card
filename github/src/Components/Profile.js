import React from "react";

const Profile = props => {
  return (
    <div>
      <h1>{props.profile.name}</h1>
      <h2>{props.profile.login}</h2>
      <img src={props.profile.avatar_url} alt={props.profile.name} />
      <p>
        <a
          href={props.profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </a>
      </p>
      <p>{props.profile.location}</p>
      <p>Followers: {props.profile.followers}</p>
      <p>Following: {props.profile.following}</p>
      <button onClick={props.loadFollowers}>Load Followers</button>
    </div>
  );
};

export default Profile;
