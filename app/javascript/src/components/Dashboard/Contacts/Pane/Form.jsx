import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoIcons";
import { Button, Pane } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import PropTypes from "prop-types";

import {
  INITIAL_CONTACT_VALUES,
  VALIDATION_SCHEMA,
  INITIAL_ROLE_VALUES,
} from "./constants";

const Form = ({ onClose, handleSubmit, initialContactValues }) => {
  const populateSelectOptions = options =>
    options.map(tag => ({
      label: tag,
      value: tag,
    }));

  return (
    <Formik
      initialValues={initialContactValues}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full space-x-4">
              <Input
                label="First Name*"
                name="firstName"
                placeholder="Enter first name"
                size="large"
              />
              <Input
                label="Last Name*"
                name="lastName"
                placeholder="Enter last name"
                size="large"
              />
            </div>
            <Input
              label="Email Address*"
              name="email"
              className="flex-grow-0 w-full"
              placeholder="Enter your email address"
              size="large"
            />
            <Select
              label="Role*"
              name="role"
              className="flex-grow-0 w-full"
              placeholder="Select role"
              options={populateSelectOptions(INITIAL_ROLE_VALUES)}
              onChange={e => setFieldValue("role", e.value)}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label="Save Changes"
              size="large"
              icon={Check}
              className="mr-3"
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  initialContactValues: PropTypes.object,
};

Form.defaultProps = {
  initialContactValues: INITIAL_CONTACT_VALUES,
};

export default Form;
