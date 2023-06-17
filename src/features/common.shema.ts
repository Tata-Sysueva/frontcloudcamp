import { type z } from 'zod';

import { AdvantagesEditSchema } from './AdvantagesInfo/ui/Advantages.shema';
import { GeneralInfoSchema } from './GeneralInfo/ui/GeneralInfo.shema';

export const FormDataValidationShema =
  GeneralInfoSchema.merge(AdvantagesEditSchema);

export type FormDataValidation = z.infer<typeof FormDataValidationShema>;

export type ChangedFormInfoValues = {
  [DataKey in keyof FormDataValidation]?: FormDataValidation[DataKey];
};
