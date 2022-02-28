export default {
  name: "seo",
  title: "Seo",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      title: "Meta Title",
      name: "metaTitle",
      type: "string",
      description:
        "While Google does not specify a recommended length for title tags, most desktop and mobile browsers are able to display the first 50–60 characters of a title tag. If you keep your titles under 60 characters, our research suggests that you can expect about 90% of your titles to display properly in the SERPs.",
      validation: (Rule) =>
        Rule.max(90).error(
          `A title shouldn't be more than 90 characters, ideally between 50-60.`
        ),
    },
    {
      title: "Meta Description",
      name: "metaDescription",
      type: "text",
      description:
        "Meta descriptions can be any length, but Google generally truncates snippets to ~155–160 characters. It's best to keep meta descriptions long enough that they're sufficiently descriptive, so we recommend descriptions between 50–160 characters. Keep in mind that the \"optimal\" length will vary depending on the situation, and your primary goal should be to provide value and drive clicks.",
      validation: (Rule) =>
        Rule.max(200).error(
          `A meta description shouldn't be more than 200 characters, ideally between 150-160.`
        ),
    },
  ],
};
