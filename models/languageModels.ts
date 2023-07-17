import * as z from 'zod'

export const languageInfoSchema = z.object({
  language_name: z.string(),
  language_info: z.string(),
})

export const languageInfo = languageInfoSchema.extend({
  id: z.number(),
})

export type LanguageDraftInfo = z.infer<typeof languageInfoSchema>
export type LanguageInfo = z.infer<typeof languageInfo>
