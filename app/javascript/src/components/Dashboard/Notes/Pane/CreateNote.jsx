import React from "react";

import { Pane, Typography } from "neetoui/v2";

import formInitialValues from "constants/formInitialValues";

import Form from "./Form";

export default function NewNotePane({
  fetchNotes,
  isNewNotePaneOpen,
  setIsNewNotePaneOpen,
}) {
  const onClose = () => setIsNewNotePaneOpen(false);

  return (
    <Pane isOpen={isNewNotePaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        refetch={fetchNotes}
        note={formInitialValues.notesForm}
        isEdit={false}
      />
    </Pane>
  );
}
