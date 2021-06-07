import * as yup from 'yup';

const step1Schema = yup.object().shape({
  first_name: yup.string().required("first name is a required field"),
  last_name: yup.string().required("last name is a required field"),
  phoneNumber: yup.string().required("phone number is a required field"),
  email: yup.string().email().required()
});

const step2Schema = yup.object().shape({
  department: yup.string().required(),
  job_title: yup.string().required("job title is a required field"),
  country: yup.string().required(),
  city: yup.string().required()
});

export { step1Schema, step2Schema };
