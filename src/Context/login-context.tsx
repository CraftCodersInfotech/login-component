import { createContext, useCallback, useMemo, useState } from "react";

export interface ILoginContext {
  registerUser: (
    fname: string,
    lname: string,
    password: string,
    email: string
  ) => void;
  userData: any;
}

const LoginContextDefaultValue = {
  registerUser: () => undefined,
  userData: null,
};

export const LoginContext = createContext<ILoginContext>(
  LoginContextDefaultValue
);

export const useLoginStore = () => {
  const [_userData, setUserData] = useState<any>(null);

  const registerUser = useCallback(
    (fname: string, lname: string, password: string, email: string) => {
      setUserData({
        firstname: fname,
        lastname: lname,
        email,
        password,
      });
    },
    []
  );

  return useMemo(
    () => ({
      registerUser,
      userData: _userData,
    }),
    [_userData]
  );
};
