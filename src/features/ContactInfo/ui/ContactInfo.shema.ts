import { z } from 'zod';

import { checkField } from 'features/utils';

export type ContactsInfoFormValues = z.infer<typeof ContactsInfoSchema>;

export const ContactsInfoSchema = z.object({
  tel: z
    .string()
    .nullable()
    .refine((data) => checkField('PhoneNumber', data), {
      message: 'invalid_tel'
    }),
  email: z
    .string()
    .nullable()
    .refine((data) => checkField('Email', data), {
      message: 'invalid_email'
    })
});
