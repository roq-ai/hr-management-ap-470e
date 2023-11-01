import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  phone: yup.string().nullable(),
  website: yup.string().nullable(),
  industry_type: yup.string().nullable(),
  name: yup.string().required(),
});
