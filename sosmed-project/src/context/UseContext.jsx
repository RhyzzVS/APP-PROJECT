import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);

  const [theme, setTheme] = useState("light");

  const [isOpen, setIsOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [following, setFollowing] = useState(() => {
    const saved = localStorage.getItem("following");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("following", JSON.stringify(following));
  }, [following]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const user = {
    name: "Van WebDev",
    username: "rhyzvan13",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWylntCWT2dpPwrCm7XlEoouRQnFoDwUkb5w&s",
  };

  const toggleFollow = (usernameTarget) => {
    setFollowing((preFollow) => {
      if (preFollow.includes(usernameTarget)) {
        return preFollow.filter((u) => u !== usernameTarget);
      } else {
        return [...preFollow, usernameTarget];
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        following,
        toggleFollow,
        user,
        isOpen,
        setIsOpen,
        theme,
        toggleTheme,
        showProfile,
        setShowProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
