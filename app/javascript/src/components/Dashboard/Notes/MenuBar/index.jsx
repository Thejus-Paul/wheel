import React from "react";

import { Typography } from "neetoui/v2";
import { MenuBar as NoteMenuBar } from "neetoui/v2/layouts";

import {
  DEFAULT_STATUSES,
  DEFAULT_SEGMENTS,
  SEGMENTS_ICON_PROPS,
  INITIAL_TAGS,
  TAGS_ICON_PROPS,
} from "./constants";

const MenuBar = ({ isNoteMenuBarOpen }) => (
  <NoteMenuBar showMenu={isNoteMenuBarOpen} title="Notes">
    {DEFAULT_STATUSES.map(({ label, count }, index) => (
      <NoteMenuBar.Block
        key={index}
        label={label}
        count={count}
        active={label === "All"}
      />
    ))}

    <NoteMenuBar.SubTitle iconProps={SEGMENTS_ICON_PROPS}>
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </NoteMenuBar.SubTitle>

    {DEFAULT_SEGMENTS.map(({ label, count }, index) => (
      <NoteMenuBar.Block key={index} label={label} count={count} />
    ))}

    <NoteMenuBar.SubTitle iconProps={TAGS_ICON_PROPS}>
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </NoteMenuBar.SubTitle>

    {INITIAL_TAGS.map(({ label, count }, index) => (
      <NoteMenuBar.Block key={index} label={label} count={count} />
    ))}
  </NoteMenuBar>
);

export default MenuBar;
