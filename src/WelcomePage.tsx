import React, { useEffect, useState } from "react";
import { fetchUserAttributes, getCurrentUser, signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>({});

  const fetchUser = async () => {
    try {
      const response = await getCurrentUser();
      console.log("getCurrentUser", response);
      handleFetchUserAttributes();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleFetchUserAttributes = async () => {
    const {
      email: email,
      given_name: firstName,
      family_name: lastName,
      phone_number: phoneNumber,
      preferred_username: username,
      phone_number_verified: phoneNumberVerified,
      email_verified: emailVerified,
      sub: userID,
    } = await fetchUserAttributes();
    setUser({
      email,
      lastName,
      firstName,
      phoneNumber,
      username,
      phoneNumberVerified,
      emailVerified,
      userID,
    });
    console.log("user", {
      email,
      lastName,
      firstName,
      phoneNumber,
      username,
      phoneNumberVerified,
      emailVerified,
      userID,
    });
  };

  const handleSignOut = async () => {
    setUser({});
    await signOut();
    navigate("/");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user.userID) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>Welcome! {user.username}</h1>
      <p>
        Nice meeting you {user.firstName} {user.lastName}!
      </p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default WelcomePage;
