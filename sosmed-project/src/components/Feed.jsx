import React, { useState, useEffect } from "react";
import { AppContext } from "../context/UseContext";
import PostCard from "./PostCard";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const { search } = React.useContext(AppContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((data) => setPosts(data))

      .catch((error) => console.error("Data tidak ditemukan!!", error));
  }, []);

  const filteredPosts = posts.filter((post) => {
    const searchTerm = search.toLowerCase();
    return (
      post.name.toLowerCase().includes(searchTerm) ||
      post.username.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="feed-container">
      <div className="feed-container">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div
            style={{
              textAlign: "center",
              marginTop: "40px",
              color: "#888",
              fontSize: "1rem",
            }}
          >
            <p>Postingan tidak ditemukan. 🔍</p>
          </div>
        )}
      </div>
    </div>
  );
}
