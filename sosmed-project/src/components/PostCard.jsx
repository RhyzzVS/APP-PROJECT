import React, { useState } from "react";
import { AppContext } from "../context/UseContext";

export default function PostCard({ post }) {
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100));
  const [isliked, setIsLiked] = useState(false);
  const { following, toggleFollow } = React.useContext(AppContext);

  const isFollowing = following.includes(post.username);

  const toggleLike = () => {
    if (isliked === false) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <div className="postcard-container">
      <div className="header-post">
        <img
          src={`https://robohash.org/${post.id}?set=set4`}
          alt=""
          className="ava-post"
        />
        <div className="name-post">
          <strong className="nick-post">{post.name}</strong>
          <h4 className="usn-post">@{post.username.trim().toLowerCase()}</h4>
        </div>
        <button
          className={`follow-btn ${isFollowing ? 'active' : ''}`}
          onClick={() => {
            toggleFollow(post.username);
          }}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      <div className="main-post">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, nihil aspernatur! Nobis beatae et alias iure? Magnam at unde sint earum quasi dolore nemo!</p>
      </div>

      <div className="footer-post">
        <button className={`like-btn ${isliked ? 'liked' : ''}`} onClick={toggleLike}>
          <span>{likeCount}</span>
        </button>
      </div>
    </div>
  );
}
