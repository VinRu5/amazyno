import React, { useContext } from "react";
import { LoginUser } from "../models/LoginUser";

export type GlobalContext = {
  loginUser: LoginUser | undefined;
  setLoginUser: (loginUser: LoginUser | undefined) => void;
};

export const AppContext = React.createContext<GlobalContext>({
  loginUser: undefined,
  setLoginUser: () => {},
});

export const useAppContext = () => useContext(AppContext);
