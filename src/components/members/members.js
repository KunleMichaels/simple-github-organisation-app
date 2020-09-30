import React from "react";
import { Spinner } from "react-bootstrap";
import useFetchMembers from "../../hooks/useFetchMembers";
import Member from "../member-component/MemberComponent";

import "./members.scss";

function Members() {
  const { loading, members, error } = useFetchMembers();

  return (
    <div className="my-4 members-menu">
      {loading && (
        <div className="loader">
          <Spinner animation="border" />
        </div>
      )}
      {error && <h1>Data not Found</h1>}
      {members.map(({ id, ...otherProps }) => {
        return <Member key={id} {...otherProps} />;
      })}
    </div>
  );
}

export default Members;
