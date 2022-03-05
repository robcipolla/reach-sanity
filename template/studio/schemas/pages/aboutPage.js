export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      title: "Page Title",
      name: "pageTitle",
      type: "string",
      initialValue: "About",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      initialValue: "/about",
      options: {
        source: "pageTitle",
      },
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
