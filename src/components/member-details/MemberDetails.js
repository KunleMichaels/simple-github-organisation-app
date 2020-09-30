import React from "react";
import { Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import useFetchUser from "../../hooks/useFetchUser";

import "./member-details.scss";

function MemberDetails({ match }) {
  const username = match.params.username;
  const { loading, user, error } = useFetchUser(username);

  return (
    <div className="member-details">
      {loading && (
        <div className="loader">
          <Spinner animation="border" />
        </div>
      )}
      {error && <h2>User Info Not Found</h2>}
      {user && (
        <div className="user">
          <div className="image">
            <img src={user.avatar_url} alt="profile" />
          </div>
          <div className="user-info">
            <div className="account">
              <h2 className="heading-2">{user.name}</h2>
              <p>{user.bio}</p>
            </div>
            <div className="stat">
              <div className="mb-3">
                <h3>{user.followers}</h3>
                <p>Followers</p>
              </div>
              <div className="mb-3">
                <h3>{user.following}</h3>
                <p>Following</p>
              </div>
              <div className="mb-3">
                <h3>{user.public_repos}</h3>
                <p>Public Repos</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default withRouter(MemberDetails);
