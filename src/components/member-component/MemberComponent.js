import React from "react";
import { withRouter } from "react-router-dom";

import "./member-component.scss";

function MemberComponent({ login, avatar_url, history, match }) {
  return (
    <div
      className={`menu-item`}
      onClick={() => history.push(`${match.url}${login}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${avatar_url})`,
        }}
      />
      <div className="content">
        <h1 className="title">{login.toUpperCase()}</h1>
        <span className="subtitle">View Details</span>
      </div>
    </div>
  );
}

export default withRouter(MemberComponent);
