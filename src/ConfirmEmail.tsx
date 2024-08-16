import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { confirmSignUp } from "aws-amplify/auth";

const ConfirmEmail: React.FC = () => {
  const params = useParams();
  const [email, setEmail] = useState<string>(params.email as string);
  const [code, setCode] = useState<string>("");
  const navigate = useNavigate();

  const handleConfirmEmail = async () => {
    //{ isSignUpComplete, nextStep }
    const response = await confirmSignUp({
      username: email,
      confirmationCode: code,
    });
    console.log("response", response);
    navigate(`/welcome`);
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
        type="text"
        placeholder="Confirmation Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={handleConfirmEmail}>Sign Up</button>
    </div>
  );
};

export default ConfirmEmail;
