import { z } from 'zod';

import { checkField } from 'features/utils';

export type GeneralInfoFormValues = z.infer<typeof GeneralInfoSchema>;

export const GeneralInfoSchema = z.object({
  about: z.string().trim().max(200, { message: 'invalid_textaria' }).nullable(),
  nickname: z
    .string()
    .max(30)
    .nullable()
    .refine((data) => checkField('Nickname', data), {
      message: 'invalid_nickname'
    }),
  name: z
    .string()
    .max(50)
    .nullable()
    .refine((data) => checkField('Name', data), {
      message: 'invalid_name'
    }),
  surname: z
    .string()
    .max(50)
    .nullable()
    .refine((data) => checkField('Name', data), {
      message: 'invalid_name'
    }),
  sex: z
    .object({
      value: z.enum(['man', 'woman']),
      label: z.string()
    })
    .nullable()
});
