import requester from '@/config/http/axios';

import {responseCharacter} from './types'

export default {
  characters: {
    findByName: (name: string, pageNumber: number): Promise<responseCharacter> => requester.get(`character/?page=${pageNumber}&name=${name}`, {}),
  }
}