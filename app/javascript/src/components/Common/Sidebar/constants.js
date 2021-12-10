import { UserCircle, Notes, Settings } from "neetoIcons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Notes,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Settings,
    items: [
      {
        label: "My Profile",
        to: "/my/profile",
      },
      {
        label: "Change Password",
        to: "/my/password/edit",
      },
    ],
  },
];
