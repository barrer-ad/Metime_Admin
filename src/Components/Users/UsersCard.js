import React from "react";
import { Link } from "react-router-dom";

export default function UsersCard(props) {
  const { id, name, email, phone } = props.users;
  return (
    <tr>
      <td colSpan="2">
        <Link to={{ pathname: `/user/${id}`, state: { user: props.users } }}>
          <h6>{id}</h6>
        </Link>
      </td>
      <td>
        <div className="d-flex align-items-center">
          {/* <img
            className="rounded-circle"
            src="../img/ellipse-1-1@2x.png"
            width="30"
          /> */}
          <span className="ml-2">{name}</span>
        </div>
      </td>
      <td>
        {email}
        <br />
      </td>
      <td className="font-weight-bold">{phone}</td>
      <td>10-02-2020</td>
      <td>10-02-2020</td>
      <td>
        <Link
          to={{
            pathname: `/edit/${id}`,
            state: { user: props.users },
          }}
        >
          <img src="../img/icons8-write-24.png" alt="" />
        </Link>

        <img
          onClick={() => props.clickHandler(id)}
          src="../img/icons8-delete-24.png"
          alt=""
        />
      </td>
    </tr>
  );
}
