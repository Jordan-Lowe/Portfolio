import * as z from 'zod'

export const userInfoSchema = z.object({
  name: z.string(),
  email: z.string(),
  cellNumber: z.number(),
  enquiry: z.string().nullable(),
})

export const userInfo = userInfoSchema.extend({
  id: z.number(),
})

export type UserDraftInfo = z.infer<typeof userInfoSchema>
export type UserInfo = z.infer<typeof userInfo>
