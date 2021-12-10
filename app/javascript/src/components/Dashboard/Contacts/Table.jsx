import React from "react";

import { MenuHorizontal } from "neetoIcons";
import { Table, Pagination, Dropdown, Avatar } from "neetoui/v2";
import PropTypes from "prop-types";

import { USER_IMAGE_URL, DEFAULT_COLUMN_DATA } from "./constants";

const ContactTable = ({ contacts, setContactIdToDelete }) => {
  const columnData = [
    {
      title: "Name & Role",
      render: (_, { firstName, lastName, role }) => {
        const fullName = `${firstName} ${lastName}`;
        return (
          <div className="flex items-center space-x-3">
            <Avatar
              size="large"
              user={{
                name: fullName,
                imageUrl: USER_IMAGE_URL,
              }}
            />
            <div className="flex flex-col">
              <span className="font-bold">{fullName}</span>
              <span>{role}</span>
            </div>
          </div>
        );
      },
      width: "25%",
    },
    ...DEFAULT_COLUMN_DATA,
    {
      title: "",
      render: (_, { id }) => (
        <div className="flex justify-end">
          <Dropdown
            buttonProps={{
              icon: MenuHorizontal,
              className: "-m-2",
            }}
            buttonStyle="text"
            position="bottom-end"
          >
            <li>Edit</li>
            <li onClick={() => setContactIdToDelete(id)}>Delete</li>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table className="h-full" rowData={contacts} columnData={columnData} />
      <div className="flex justify-end">
        <Pagination count={100} pageNo={3} pageSize={10} />
      </div>
    </>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContactIdToDelete: PropTypes.func.isRequired,
};

export default ContactTable;
