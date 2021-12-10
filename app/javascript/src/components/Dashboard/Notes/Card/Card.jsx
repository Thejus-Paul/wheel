import React from "react";

import { MenuVertical, Clock } from "neetoIcons";
import { Dropdown, Typography, Tag, Avatar, Tooltip } from "neetoui/v2";

const Card = ({ children }) => {
  return (
    <div className="flex flex-col p-3 space-y-2 border shadow-sm">
      {children}
    </div>
  );
};

const Header = ({ title, handleDelete }) => (
  <div className="flex items-center justify-between">
    <Typography style="h4">{title}</Typography>

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
);

const Body = ({ description }) => (
  <Typography style="body1">{description}</Typography>
);

const Footer = ({ createdTime, getTimeDiffInHours, userValues }) => (
  <div className="flex items-center justify-between">
    <Tag label="Getting Started" />
    <div className="flex items-center justify-between space-x-1">
      <Clock size="14" />
      <Tooltip
        content={createdTime}
        followCursor="horizontal"
        position="bottom"
      >
        <Typography style="body3">
          Created {getTimeDiffInHours} hours ago
        </Typography>
      </Tooltip>
      <Avatar size="small" user={userValues} />
    </div>
  </div>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export { Card };