import * as dayjs from "dayjs";

const FORMATTED_DATE = dayjs().format("MMM, D, YYYY");

const USER_IMAGE_URL = "https://i.pravatar.cc/300";

const SAMPLE_CONTACTS = [
  {
    id: 1,
    firstName: "Oliver",
    lastName: "Smith",
    email: "oliver@example.com",
    createdAt: FORMATTED_DATE,
    role: "Owner",
  },
  {
    id: 2,
    firstName: "Sam",
    lastName: "Smith",
    email: "sam@example.com",
    createdAt: FORMATTED_DATE,
    role: "Owner",
  },
  {
    id: 3,
    firstName: "Eve",
    lastName: "Smith",
    email: "eve@example.com",
    createdAt: FORMATTED_DATE,
    role: "Standard",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob@example.com",
    createdAt: FORMATTED_DATE,
    role: "Standard",
  },
];

const DEFAULT_COLUMN_DATA = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "25%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "25%",
  },
];

export { USER_IMAGE_URL, SAMPLE_CONTACTS, DEFAULT_COLUMN_DATA, FORMATTED_DATE };
