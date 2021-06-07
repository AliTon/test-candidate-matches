import * as yup from 'yup';

const step1Schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phoneNumber: yup.string().required(),
  email: yup.string().email().required()
});

const step2Schema = yup.object().shape({
  department: yup.string().required(),
  job_title: yup.string().required(),
  country: yup.string().required(),
  city: yup.string().required()
});

export { step1Schema, step2Schema };
