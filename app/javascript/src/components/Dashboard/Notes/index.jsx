import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "neetoIcons";
import { Button, PageLoader, Input } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import DeleteAlert from "./DeleteAlert";
import MenuBar from "./MenuBar";
import NewNote from "./NewNote";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNoteMenuBarOpen, setIsNoteMenuBarOpen] = useState(true);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [noteIdToDelete, setNoteIdToDelete] = useState(0);
  const [notes, setNotes] = useState([]);

  useEffect(() => fetchNotes(), []);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      {notes.length ? (
        <>
          <MenuBar isNoteMenuBarOpen={isNoteMenuBarOpen} />
          <Container>
            <Header
              title="All Notes"
              menuBarToggle={() => setIsNoteMenuBarOpen(!isNoteMenuBarOpen)}
              actionBlock={
                <div className="flex w-full space-x-2">
                  <Input
                    className="w-80"
                    placeholder="Search Name, Email, Phone Number, Etc."
                    prefix={<Search />}
                  />
                  <Button
                    onClick={() => setIsNewNotePaneOpen(true)}
                    label="Add Note"
                    icon="ri-add-line"
                  />
                </div>
              }
            />
            <div className="w-full space-y-3">
              {notes.map((note, index) => (
                <Card
                  key={index}
                  note={note}
                  setNoteIdToDelete={setNoteIdToDelete}
                />
              ))}
            </div>
          </Container>
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setIsNewNotePaneOpen(true)}
          primaryActionLabel="Add New Note"
        />
      )}
      <NewNote
        isNewNotePaneOpen={isNewNotePaneOpen}
        setIsNewNotePaneOpen={setIsNewNotePaneOpen}
        fetchNotes={fetchNotes}
      />
      {noteIdToDelete !== 0 && (
        <DeleteAlert
          noteIdToDelete={noteIdToDelete}
          setNoteIdToDelete={setNoteIdToDelete}
          onClose={() => setNoteIdToDelete(0)}
          refetch={fetchNotes}
        />
      )}
    </>
  );
};

export default Notes;
