import { z } from 'zod';

export const AdvantagesEditInfoSchema = z.object({
  id: z.number().optional(),
  advantage: z.string().nullable()
});

export const AdvantagesInfoSchema = z.object({
  id: z.number().optional(),
  advantage: z.string()
});

export const AdvantagesValidationSchema = z.object({
  advantages: AdvantagesInfoSchema.array(),
  radio: z.string().nullable().optional(),
  checkboxes: z.string().array().nullable().optional()
});

export const AdvantagesEditSchema = z.object({
  advantages: AdvantagesEditInfoSchema.array().nullable(),
  radio: z.string().nullable().optional(),
  checkboxes: z.string().array().nullable().optional()
});

export type AdvantagesInfoFormValues = z.infer<typeof AdvantagesEditSchema>;
export type EmployeeLanguageValues = z.infer<typeof AdvantagesEditInfoSchema>;
