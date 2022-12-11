import React from 'react'

import UserContext, {Context} from './context'

export function useUser(): Context["state"]["user"] {
  const {state: {user}} = React.useContext(UserContext)
  return user
}