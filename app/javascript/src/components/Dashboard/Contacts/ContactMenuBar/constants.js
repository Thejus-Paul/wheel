import { Search, Settings, Plus } from "@bigbinary/neeto-icons";

const DEFAULT_STATUSES = [
  {
    label: "All",
    count: 0,
  },
  {
    label: "Archived",
    count: 0,
  },
  {
    label: "Completed",
    count: 0,
  },
  {
    label: "Phase 2",
    count: 0,
  },
];

const DEFAULT_SEGMENTS = [];

const SEGMENTS_ICON_PROPS = [
  {
    icon: Search,
  },
];

const INITIAL_TAGS = [];

const TAGS_ICON_PROPS = [
  {
    icon: Search,
  },
  {
    icon: Plus,
  },
  {
    icon: Settings,
  },
];

export {
  DEFAULT_STATUSES,
  DEFAULT_SEGMENTS,
  SEGMENTS_ICON_PROPS,
  INITIAL_TAGS,
  TAGS_ICON_PROPS,
};
