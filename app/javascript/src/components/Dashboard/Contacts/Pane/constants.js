import * as yup from "yup";

const INITIAL_CONTACT_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

const VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().trim().required("First Name is required"),
  lastName: yup.string().trim().required("Last Name is required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .required("Email address is required"),
  role: yup.string().required("Role is required"),
});

const INITIAL_ROLE_VALUES = ["Owner", "Standard"];

export { INITIAL_CONTACT_VALUES, VALIDATION_SCHEMA, INITIAL_ROLE_VALUES };
