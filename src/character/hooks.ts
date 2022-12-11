import React from 'react'

import CharacterContext, {Context} from './context'

export function useCharacters(): Context["state"]["characters"] {
  const {state: {characters}} = React.useContext(CharacterContext)
  console.log("characters", characters);
  return characters
}