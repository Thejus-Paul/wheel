import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import * as dayjs from "dayjs";
import { Dropdown, Typography, Tag, Avatar, Tooltip } from "neetoui/v2";

const Card = ({ note, setNoteIdToDelete }) => {
  const handleDelete = () => setNoteIdToDelete(note.id);

  const createdTime = dayjs(note.created_at);
  const getTimeDiffInHours = dayjs().hour() - createdTime.hour();

  return (
    <div className="flex flex-col p-3 space-y-2 border shadow-sm">
      <div className="flex items-center justify-between">
        <Typography style="h4">{note.title}</Typography>

        <Dropdown
          buttonProps={{
            icon: MenuVertical,
            className: "-m-2",
          }}
          buttonStyle="text"
          position="bottom-end"
        >
          <li>Edit</li>
          <li onClick={handleDelete}>Delete</li>
        </Dropdown>
      </div>

      <Typography style="body1">{note.description}</Typography>

      <hr />

      <div className="flex items-center justify-between">
        <Tag label="Getting Started" />
        <div className="flex items-center justify-between space-x-1">
          <Clock size="14" />
          <Tooltip
            content={createdTime.format("dddd, h:mmA")}
            followCursor="horizontal"
            position="bottom"
          >
            <Typography style="body3">
              Created {getTimeDiffInHours} hours ago
            </Typography>
          </Tooltip>
          <Avatar
            size="small"
            user={{
              name: "Oliver Smith",
              imageUrl: "https://i.pravatar.cc/300",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
