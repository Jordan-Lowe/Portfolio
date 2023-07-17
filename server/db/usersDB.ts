import connection from './connection'
import { UserInfo } from '../../models/userModels'

export function getAllInfo(db = connection): Promise<UserInfo[]> {
  return db('userInfoTBL').select()
}
