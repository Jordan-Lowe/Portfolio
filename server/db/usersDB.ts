import connection from './connection'
import { UserDraftInfo, UserInfo } from '../../models/userModels'

export function getAllInfo(db = connection): Promise<UserInfo[]> {
  return db('userInfoTBL').select()
}

// Add this new function
export function insertData(user: UserDraftInfo, db = connection): Promise<any> {
  return db('userInfoTBL').insert(user)
}
