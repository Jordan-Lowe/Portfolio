import connection from './connection'
import { LanguageInfo } from '../../models/languageModels'

export function getAllLanguages(db = connection): Promise<LanguageInfo[]> {
  return db('languageInfoTBL').select()
}