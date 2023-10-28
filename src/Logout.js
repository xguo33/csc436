import React from "react";

export default function Logout({ userState, dispatchUser }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatchUser({ type: "LOGOUT" });
      }}
    >
      Logged in as: <b>{userState.username}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}