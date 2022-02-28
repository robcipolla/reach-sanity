export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "pageTitle",
      readOnly: true,
      type: "string",
    },
    {
      title: "Page Content",
      name: "pageContent",
      type: "blockContent",
    },
    {
      title: "SEO",
      name: "seo",
      type: "seo",
    },
  ],
  initialValue: {
    pageTitle: "Home",
  },
};
