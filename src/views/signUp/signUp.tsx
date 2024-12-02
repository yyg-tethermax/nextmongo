"use client";

import { VALIDATION_SCHEMA } from "@/constants/validation";
import { Field, useForm } from "@tanstack/react-form";
import type { FieldApi } from "@tanstack/react-form";
import { yupValidator } from "@tanstack/yup-form-adapter";
import classNames from "classnames/bind";
import styles from "@/scss/signUp/signUp.module.scss";
import TextField from "@mui/material/TextField";

const cx = classNames.bind(styles);

// email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailValidator = (value: string) =>
  !value ? "email is required" : emailRegex.test(value) ? "" : "invalid email";

function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  const errorStr = field.state.meta.errors.join(",");
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length
        ? errorStr
            .split(",")
            .map((error, index) => <em key={index}>{error}</em>)
        : null}
      {field.state.meta.isValidating ? "Validating..." : null}
    </>
  );
}
const SignUpForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
    validatorAdapter: yupValidator(),
  });
  return (
    <div className={cx("SignUpContainer")}>
      <h1>SIGN UP</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="email"
            validators={{
              onChange: VALIDATION_SCHEMA.EMAIL,
            }}
            children={(field) => (
              <>
                <TextField
                  error={field.state.meta.errors.length > 0}
                  id="email"
                  label="Email"
                  variant="standard"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="please enter your Email"
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name="password"
            validators={{
              onChange: VALIDATION_SCHEMA.PASSWORD,
            }}
            children={(field) => (
              <>
                <input
                  type="password"
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="please enter your PW"
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name="name"
            validators={{
              onChange: VALIDATION_SCHEMA.NAME,
            }}
            children={(field) => (
              <>
                <input
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="please enter your Name"
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
