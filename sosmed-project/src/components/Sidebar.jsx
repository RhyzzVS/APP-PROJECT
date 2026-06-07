import { useContext } from "react";
import { AppContext } from "../context/UseContext";
import { useState } from "react";

export default function Sidebar() {
  const { following, toggleFollow, showProfile, setShowProfile, user } =
    useContext(AppContext);

  return (
    <>
      <aside className="sidebar-left">
        <div className="sidebar-left-icons">
          <button className="home"></button>
          <button className="explore"></button>
          <button className="messages"></button>
          <button className="notifications"></button>
          <button className="bookmarks"></button>
        </div>
      </aside>

      <aside className={`sidebar-right ${showProfile ? "open" : ""}`}>
        <div className="sidebar-right-content">
          <img src={user.profilePicture} alt="usen.name" className="avatar" />
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
          <p style={{ fontSize: "14px", marginTop: "10px" }}>
            Mengikuti: <strong>{following ? following.length : "0"}</strong>{" "}
            orang
          </p>
        </div>
      </aside>
    </>
  );
}
