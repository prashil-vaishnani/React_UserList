import React from "react";
import "./UserProfileCard.css";
import Image from "../UI/Image";
import ProgressBarChart from "./ProgressBarChart";

const UserProfileCard = (props: {
  user: { userAvatar: number; userName: string; userEmail: string } | null;
}) => {
  return (
    <>
      {props.user !== null && (
        <div className="userProfileCard">
          <img
            src={Image[props.user.userAvatar]}
            alt="user_avatar"
            className="userProfile"
          />

          <p className="cardUserName">
            {props.user.userName}
            <span className="userDot">&#729;</span>
          </p>
          <p className="cardUserEmail">{props.user.userEmail}</p>
          <p className="cardUserPlan">Your Plan: Standard</p>
          <button>Active User</button>
          <ProgressBarChart />
        </div>
      )}
    </>
  );
};

export default UserProfileCard;
