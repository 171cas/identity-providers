import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "aws-amplify/auth";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    console.log("hola");
    //{ isSignUpComplete, userId, nextStep }
    const response = await signUp({
      username: email,
      password: password,
      options: {
        userAttributes: {
          email: email,
          phone_number: "+15555555555",
        },
      },
    });
    console.log("response", response);
    navigate(`/confirmEmail/${email}`);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
