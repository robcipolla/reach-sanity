export default {
  name: "generalSettings",
  title: "General settings",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "SEO",
      name: "seo",
      type: "seo",
    },
  ],
};
