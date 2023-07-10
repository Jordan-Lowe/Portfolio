import connection from './connection'
import { Fruit } from '../../models/userModels'

export function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}
