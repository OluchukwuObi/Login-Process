import * as yup from "yup";
const passwordRules = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;

export const schema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .max(10)
    .matches(passwordRules, {
      message:
        "Passwords must contain 8-10 characters, one special character, one lowercase letter, and one uppercase letter",
    })
    .required("Required"),
  /*   confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"), */
  username: yup.string().trim().required("Required"),
  firstName: yup.string().trim().required("Required"),
  lastName: yup.string().trim().required("Required"),
  phoneNumber: yup.string().required("Required"),
});
