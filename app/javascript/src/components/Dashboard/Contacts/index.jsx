import React, { useState } from "react";

import { Search } from "neetoIcons";
import { Input, Button, Alert, Toastr } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";

import { SAMPLE_CONTACTS, FORMATTED_DATE } from "./constants";
import MenuBar from "./MenuBar";
import NewContact from "./NewContact";
import Table from "./Table";

const Contacts = () => {
  const [contacts, setContacts] = useState(SAMPLE_CONTACTS);
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(true);
  const [isCreatePaneOpen, setIsCreatePaneOpen] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(0);

  const handleDelete = () => {
    setContacts(contacts.filter(({ id }) => id !== contactIdToDelete));
    setContactIdToDelete(0);
    Toastr.success("Contact deleted successfully.");
  };

  const handleSubmit = values => {
    const newContact = {
      ...values,
      id: contacts.length + 1,
      createdAt: FORMATTED_DATE,
    };
    setContacts([...contacts, newContact]);
    setIsCreatePaneOpen(false);
    Toastr.success("Contact added successfully.");
  };

  return (
    <>
      {contacts.length ? (
        <>
          <MenuBar isMenuBarOpen={isMenuBarOpen} />
          <Container>
            <Header
              title="All Contacts"
              menuBarToggle={() => setIsMenuBarOpen(!isMenuBarOpen)}
              actionBlock={
                <div className="flex w-full space-x-2">
                  <Input
                    className="w-80"
                    placeholder="Search Name, Email, Phone Number, Etc."
                    prefix={<Search />}
                  />
                  <Button
                    onClick={() => setIsCreatePaneOpen(true)}
                    label="Add Contact"
                    icon="ri-add-line"
                  />
                </div>
              }
            />
            <div className="w-full h-full space-y-3">
              <Table
                contacts={contacts}
                setContactIdToDelete={setContactIdToDelete}
              />
            </div>
          </Container>
        </>
      ) : (
        <EmptyState
          title="Looks like you don't have any contacts!"
          subtitle="Add contacts to see them."
          primaryAction={() => setIsCreatePaneOpen(true)}
          primaryActionLabel="Add New Contact"
        />
      )}
      <NewContact
        handleSubmit={handleSubmit}
        isCreatePaneOpen={isCreatePaneOpen}
        setIsCreatePaneOpen={setIsCreatePaneOpen}
      />
      {contactIdToDelete !== 0 && (
        <Alert
          isOpen
          onSubmit={handleDelete}
          onClose={() => setContactIdToDelete(0)}
          message="Are you sure you want to delete the note? This action cannot be undone."
          title="Delete note"
        />
      )}
    </>
  );
};

export default Contacts;
