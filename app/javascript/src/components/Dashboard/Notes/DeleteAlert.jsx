import React, { useState } from "react";

import { Alert } from "neetoui/v2";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  setNoteIdToDelete,
  noteIdToDelete,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await notesApi.destroy({ ids: noteIdToDelete });
      onClose();
      setNoteIdToDelete(0);
      refetch();
    } catch (error) {
      logger.error(error);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete the note? This action cannot be undone."
      title="Delete note"
      isSubmitting={isDeleting}
    />
  );
};

export default DeleteAlert;
