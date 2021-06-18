import React, { useState } from "react";
import Auth from "./Auth.component";
import Header from "./Header.component";
import Profile from "./Profile.component";

const Homepage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {currentUser && currentUser.payment ? (
        <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <Auth currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </>
  );
};

export default Homepage;
