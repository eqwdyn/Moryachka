import { AuthRepo } from "../../shared/api/Auth.repo";
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
  isAdmin: boolean | null;
  setIsAdmin: Dispatch<SetStateAction<boolean | null>>;
}

const AuthContext = createContext<ContextValues>({
  isPrimaryLoading: true,
  setIsPrimaryLoading: () => {},
  isAdmin: null,
  setIsAdmin: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: FC<Props> = ({ children }) => {
  const [isPrimaryLoading, setIsPrimaryLoading] = useState<boolean>(true);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  const check = async () => {
    const bool = await AuthRepo.validateToken();
    setIsAdmin(bool);
    setIsPrimaryLoading(false);
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
