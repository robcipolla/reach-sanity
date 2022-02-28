export default {
  name: "contactDetails",
  title: "Contact details",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Phone Number",
      name: "phoneNumber",
      type: "string",
    },
    {
      title: "Email Address",
      name: "emailAddress",
      type: "string",
    },
  ],
};
