import React from "react";

import { Pane, Typography } from "neetoui/v2";

import Form from "./Form";

const NewContact = ({
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

export default NewContact;
