import React from "react";

import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";
import PropTypes from "prop-types";

import {
  DEFAULT_STATUSES,
  DEFAULT_SEGMENTS,
  SEGMENTS_ICON_PROPS,
  INITIAL_TAGS,
  TAGS_ICON_PROPS,
} from "./constants";

const ContactMenuBar = ({ isMenuBarOpen }) => (
  <MenuBar showMenu={isMenuBarOpen} title="Contacts">
    {DEFAULT_STATUSES.map(({ label, count }, index) => (
      <MenuBar.Block
        key={index}
        label={label}
        count={count}
        active={label === "All"}
      />
    ))}

    <MenuBar.SubTitle iconProps={SEGMENTS_ICON_PROPS}>
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Segments
      </Typography>
    </MenuBar.SubTitle>

    {DEFAULT_SEGMENTS.map(({ label, count }, index) => (
      <MenuBar.Block key={index} label={label} count={count} />
    ))}

    <MenuBar.SubTitle iconProps={TAGS_ICON_PROPS}>
      <Typography
        component="h4"
        style="h5"
        textTransform="uppercase"
        weight="bold"
      >
        Tags
      </Typography>
    </MenuBar.SubTitle>

    {INITIAL_TAGS.map(({ label, count }, index) => (
      <MenuBar.Block key={index} label={label} count={count} />
    ))}
  </MenuBar>
);

ContactMenuBar.propTypes = {
  isMenuBarOpen: PropTypes.bool.isRequired,
};

export default ContactMenuBar;
