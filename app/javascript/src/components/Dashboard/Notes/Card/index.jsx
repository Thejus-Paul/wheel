import React from "react";

import * as dayjs from "dayjs";

import { Card as NoteCard } from "./Card";
import { DEFAULT_USER_VALUES } from "./constants";

const Card = ({
  note: { id, created_at, title, description },
  setNoteIdToDelete,
}) => {
  const handleDelete = () => setNoteIdToDelete(id);

  const createdTime = dayjs(created_at);
  const getTimeDiffInHours = dayjs().hour() - createdTime.hour();

  return (
    <NoteCard>
      <NoteCard.Header title={title} handleDelete={handleDelete} />
      <NoteCard.Body description={description} />
      <hr />
      <NoteCard.Footer
        createdTime={createdTime.format("dddd, h:mmA")}
        getTimeDiffInHours={getTimeDiffInHours}
        userValues={DEFAULT_USER_VALUES}
      />
    </NoteCard>
  );
};

export default Card;
