import React from "react";
import useFetchMembers from "../../hooks/useFetchMembers";
import Member from "../member-component/MemberComponent";

import "./members.scss";

function Members() {
  const { loading, members, error } = useFetchMembers();

  return (
    <div className="my-4 members-menu">
      {loading && <h1>Loading....</h1>}
      {error && <h1>Data not Found</h1>}
      {members.map(({ id, ...otherProps }) => {
        return <Member key={id} {...otherProps} />;
      })}
    </div>
  );
}

export default Members;
