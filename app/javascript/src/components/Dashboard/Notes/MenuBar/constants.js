import { Search, Settings, Plus } from "neetoIcons";

const DEFAULT_STATUSES = [
  {
    label: "All",
    count: 200,
  },
  {
    label: "Users",
    count: 80,
  },
  {
    label: "Leads",
    count: 60,
  },
  {
    label: "Visitors",
    count: 60,
  },
];

const DEFAULT_SEGMENTS = [
  {
    label: "Europe",
    count: 80,
  },
  {
    label: "Middle-East",
    count: 60,
  },
  {
    label: "Asia",
    count: 60,
  },
];

const SEGMENTS_ICON_PROPS = [
  {
    icon: Search,
  },
];

const INITIAL_TAGS = [
  {
    label: "Sales",
    count: 80,
  },
  {
    label: "Finance",
    count: 60,
  },
  {
    label: "User Experience",
    count: 60,
  },
];

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
