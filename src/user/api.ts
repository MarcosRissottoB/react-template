import {User} from './types'

export default {
  fetch: (): Promise<User> => new Promise(resolve => setTimeout(() => resolve(
    {
      id: "J345345ug3i45g34g3g45h345",
      name: "John Doe",
    }
  ), 1000)),
}