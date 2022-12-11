import React from "react";
import {CircularProgress, Center, Flex, Text} from "@chakra-ui/react";

import { User } from "./types"
import api from "./api";

export interface Context {
  state: {user: User},
}

const UserContext = React.createContext({} as Context);

interface Props {
  children: React.ReactNode
}

const UserProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = React.useState<User>();
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected" >("pending")

  React.useEffect(() => {
    api.fetch().then((user) => {
      setUser(user);
      setStatus("resolved");
    })
    .catch(() => {
      setUser(undefined);
      setStatus("rejected");
    });
  }, []);

  if (status === "rejected") {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <Text backgroundColor="primary.100" borderRadius="md" color="primary.700" padding={4}>
          Press F to pay respect
        </Text>
      </Flex>
    );
  }

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

  return <><UserContext.Provider value={{state}}>{children}</UserContext.Provider></>
}

export { UserContext as default, UserProvider as Provider }