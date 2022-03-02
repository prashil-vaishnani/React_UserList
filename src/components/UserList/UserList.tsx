import React from "react";
import "./UserList.css";
import * as Icon from "react-feather";
import Image from "../UI/Image";

interface user {
  userAvatar: number;
  userName: string;
  userEmail: string;
  userStatus: string;
  userAccess: string;
}

export const UserList = (props: {
  users: user[];
  handleHover: (arg0: user | null) => void;
}) => {
  return (
    <table>
      {/* headings of userlist */}
      <thead>
        <tr className="headRow">
          <th className="col-1">Name</th>
          <th>Status</th>
          <th>Access</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* showing UsersList */}
        {props.users.map((user, index) => {
          return (
            <>
              {/* first row for owner */}
              {index === 0 && (
                <tr>
                  <td className="userDetailsWrapper">
                    <img
                      src={Image[user.userAvatar]}
                      alt="user_avatar"
                      className="profileImg"
                    />

                    <span className="userName">{user.userName}</span>
                    <span className="userEmail">{user.userEmail}</span>
                  </td>
                  <td style={{ color: "#04AA6D", fontWeight: "700" }}>
                    {user.userStatus}
                  </td>
                  <td>{user.userAccess}</td>
                  <td>
                    <Icon.Lock
                      size={18}
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    />
                  </td>
                </tr>
              )}
              {/* other users row */}
              {index !== 0 && (
                <tr
                  onMouseEnter={() => {
                    props.handleHover(user);
                  }}
                  onMouseLeave={() => {
                    props.handleHover(null);
                  }}
                >
                  <td className="userDetailsWrapper">
                    <img
                      src={Image[user.userAvatar]}
                      alt="user_avatar"
                      className="profileImg"
                    />

                    <span className="userName">{user.userName}</span>
                    <span className="userEmail">{user.userEmail}</span>
                  </td>
                  <td className="">
                    <select className="selectMenu" value={user.userStatus}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="">
                    <select className="selectMenu" value={user.userAccess}>
                      <option value="Manager">Manager</option>
                      <option value="Read">Read</option>
                    </select>
                  </td>
                  <td className="">
                    <Icon.Trash2
                      size={18}
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    />
                  </td>
                </tr>
              )}
            </>
          );
        })}
      </tbody>
    </table>
  );
};
