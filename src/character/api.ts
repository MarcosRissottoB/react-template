import requester from '@/config/http/axios';

import {responseCharacter} from './types'

export default {
  characters: {
    findByName: (name: string): Promise<responseCharacter> => requester.get(`character/?name=${name}`, {}),
  }
}