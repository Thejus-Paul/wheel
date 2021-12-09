import React from "react";

import { Pane, Typography } from "neetoui/v2";
import PropTypes from "prop-types";

import Form from "./Form";

const CreateContact = ({
  handleSubmit,
  isCreatePaneOpen,
  setIsCreatePaneOpen,
}) => {
  const onClose = () => setIsCreatePaneOpen(false);

  return (
    <Pane isOpen={isCreatePaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} handleSubmit={handleSubmit} />
    </Pane>
  );
};

CreateContact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isCreatePaneOpen: PropTypes.bool.isRequired,
  setIsCreatePaneOpen: PropTypes.func.isRequired,
};

export default CreateContact;
