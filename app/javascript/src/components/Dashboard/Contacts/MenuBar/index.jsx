import React from "react";

import { Typography } from "neetoui/v2";
import { MenuBar as ContactMenuBar } from "neetoui/v2/layouts";

import {
  DEFAULT_STATUSES,
  DEFAULT_SEGMENTS,
  SEGMENTS_ICON_PROPS,
  INITIAL_TAGS,
  TAGS_ICON_PROPS,
} from "./constants";

const MenuBar = ({ isMenuBarOpen }) => (
  <ContactMenuBar showMenu={isMenuBarOpen} title="Contacts">
    {DEFAULT_STATUSES.map(({ label, count }, index) => (
      <ContactMenuBar.Block
        key={index}
        label={label}
        count={count}
        active={label === "All"}
      />
    ))}

    <ContactMenuBar.SubTitle iconProps={SEGMENTS_ICON_PROPS}>
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </ContactMenuBar.SubTitle>

    {DEFAULT_SEGMENTS.map(({ label, count }, index) => (
      <ContactMenuBar.Block key={index} label={label} count={count} />
    ))}

    <ContactMenuBar.SubTitle iconProps={TAGS_ICON_PROPS}>
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </ContactMenuBar.SubTitle>

    {INITIAL_TAGS.map(({ label, count }, index) => (
      <ContactMenuBar.Block key={index} label={label} count={count} />
    ))}
  </ContactMenuBar>
);

export default MenuBar;
