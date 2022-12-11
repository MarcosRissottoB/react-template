import React from "react";
import {CircularProgress, Center} from "@chakra-ui/react";
import { User } from "./types"
import api from "./api";

export interface Context {
  state: {user: User},
}

const UserContext = React.createContext({} as Context);

type Props = {
  children?: React.ReactNode;
}

const UserProvider: React.FC = (props: Props) => {
  const [user, setUser] = React.useState<User>();
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected" >("pending")

  React.useEffect(() => {
    api.fetch().then((user) => {
      setUser(user);
      setStatus("resolved");
    });
  }, []);


  if (!user || status === "pending") {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Center>
    );
  }

  const state : Context["state"] = {
    user
  };

  return <><UserContext.Provider value={{state}}>{props.children}</UserContext.Provider></>
}

export { UserContext as default, UserProvider as Provider }