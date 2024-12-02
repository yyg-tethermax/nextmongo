import * as yup from "yup";

const EMAIL = yup.string().email("invalid email").required("email is required");
const PASSWORD = yup
  .string()
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "영문+숫자+특수문자1개 이상 조합"
  )
  .min(8, "PW must be at least 8 characters")
  .required("PW is required");
const NAME = yup.string().required("name is required");

export const VALIDATION_SCHEMA = {
  EMAIL,
  PASSWORD,
  NAME,
};
