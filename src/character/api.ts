import requester from '@/config/http/axios';
import {Character} from './types'

export default {
  list: (name = "rick"): Promise<Character[]> => requester.get(`character/?name=${name}`, {}),
}