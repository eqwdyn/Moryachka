"use client";

import { AuthService } from "@/shared/api/AuthService";
import { getAccessToken } from "@/shared/utils/getAccessToken";
import {
  createContext,
  useState,
  useContext,
  type FC,
  type Dispatch,
  type SetStateAction,
  useEffect,
} from "react";

interface ContextValues {
  isPrimaryLoading: boolean;
  setIsPrimaryLoading: Dispatch<SetStateAction<boolean>>;
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<ContextValues>({
  isPrimaryLoading: true,
  setIsPrimaryLoading: () => {},
  isAdmin: true,
  setIsAdmin: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [isPrimaryLoading, setIsPrimaryLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const token = getAccessToken();

  const check = async () => {
    console.log("check");
    if (!token) {
      setIsPrimaryLoading(false);
      setIsAdmin(false);

      console.log("Check failed");
      return;
    }

    const bool = await AuthService.checkAuth();
    setIsAdmin(bool);
    setIsPrimaryLoading(false);

    console.log("Check approved");
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        isPrimaryLoading,
        setIsAdmin,
        setIsPrimaryLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
