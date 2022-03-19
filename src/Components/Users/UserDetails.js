import React from "react";
import { Link } from "react-router-dom";

export default function UserDetails(props) {
  const { name, email, phone } = props.location.state.user;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{name}</li>
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{phone}</li>
      </ul>
      <Link to="/">
        <button className="btn btn-dark m-3">back to liste</button>
      </Link>
    </div>
  );
}
