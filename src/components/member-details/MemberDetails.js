import React from "react";
import { Spinner } from "react-bootstrap";
import useFetchUser from "../../hooks/useFetchUser";

export default function MemberDetails({ username }) {
  const { loading, user, error } = useFetchUser(username);

  return (
    <div>
      {loading && <Spinner animation="border" />}
      {error && <h2>User Info Not Found</h2>}
      {user && console.log(user)}
    </div>
  );
}
