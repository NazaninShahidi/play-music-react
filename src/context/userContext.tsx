import { ReactNode, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  userName: string;
  password: string;
}

interface IContext {
  user?: UserInfo;
  login?: (item: UserInfo) => void;
  logout?: () => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const userContext = createContext<IContext>({
  user: { userName: "", password: "" },
  login: () => {},
  logout: () => {},
});

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { userName: "", password: "" };
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo.userName) {
      localStorage.setItem("user", JSON.stringify(userInfo));
    } else {
      localStorage.removeItem("user");
    }
  }, [userInfo]);

  function loginHandler(user: UserInfo) {
    if (user.userName === "user" && user.password === "123456") {
      setUserInfo({ userName: user.userName, password: user.password });
      navigate("/");
    } else {
      alert("user not exist");
    }
  }

  function logoutHandler() {
    setUserInfo({
      userName: "",
      password: "",
    });
    localStorage.removeItem("user");
    navigate("/login");
  }

  const contextValue: IContext = {
    user: userInfo,
    logout: logoutHandler,
    login: loginHandler,
  };

  return (
    <userContext.Provider value={contextValue}>{children}</userContext.Provider>
  );
}
