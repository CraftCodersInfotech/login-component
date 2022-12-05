import { LoginContext, useLoginStore } from "../Context/login-context";
import React from "react";

export interface LoginProviderProps {
  children: React.ReactNode;
}

const LoginProvider: React.FC<LoginProviderProps> = (props) => {
  const { children } = props;
  const userData = useLoginStore();
  return (
    <LoginContext.Provider value={userData}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
