import React, { useState } from "react";

import { Check } from "@bigbinary/neeto-icons";
import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui/v2";
import { Input, Textarea, Select } from "neetoui/v2/formik";

import notesApi from "apis/notes";
import formValidationSchemas from "constants/formValidationSchemas";

import { INITIAL_CONTACT_VALUES, INITIAL_TAG_VALUES } from "./constants";

export default function NoteForm({ onClose, refetch, note, isEdit }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async values => {
    try {
      setIsSubmitted(true);
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  const populateSelectOptions = options =>
    options.map(tag => ({
      label: tag,
      value: tag,
    }));

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={isSubmitted}
      validateOnChange={isSubmitted}
      validationSchema={formValidationSchemas.notesForm}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="flex-grow-0 w-full"
              placeholder="Enter the note title"
              size="large"
              required
            />
            <Textarea
              label="Description"
              name="description"
              className="flex-grow-0 w-full"
              placeholder="Enter the note description"
              rows={2}
              required
            />
            <Select
              label="Assigned Contact"
              name="contact"
              className="flex-grow-0 w-full"
              placeholder="Select contact"
              isSearchable
              options={populateSelectOptions(INITIAL_CONTACT_VALUES)}
              required
            />
            <Select
              label="Tags"
              name="tags"
              className="flex-grow-0 w-full"
              placeholder="Select tags"
              isMulti
              isSearchable
              options={populateSelectOptions(INITIAL_TAG_VALUES)}
              required
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              icon={Check}
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={e => {
                e.preventDefault();
                setIsSubmitted(true);
                handleSubmit();
              }}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
