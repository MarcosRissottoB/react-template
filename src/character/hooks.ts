import React from 'react'

import CharacterContext, {Context} from './context'

export function useCharacters(): [Context["state"]["characters"], Context["state"]["secondCharacters"], Context["actions"]["searchByName"]] {
  const {
    state: {characters, secondCharacters},
    actions: {searchByName}
  } = React.useContext(CharacterContext)
  return [characters, secondCharacters, searchByName]
}