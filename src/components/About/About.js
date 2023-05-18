import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const About = () => {
  // const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Secret about us!</h1>
      {/* <p>{user?.email}</p> */}
    </div>
  );
};

export default About;
