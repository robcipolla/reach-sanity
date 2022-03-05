export default {
  name: "siteBranding",
  title: "Site branding",
  type: "document",
  // __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: "Site Logo",
      name: "siteLogo",
      type: "image",
      fields: [
        {
          title: "Alt Text",
          name: "alt",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      title: "Site Favicon",
      name: "siteFavicon",
      type: "image",
    },
  ],
};
