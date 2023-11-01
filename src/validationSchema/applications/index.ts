import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  cover_letter: yup.string().nullable(),
  resume: yup.string().nullable(),
  job_post_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
