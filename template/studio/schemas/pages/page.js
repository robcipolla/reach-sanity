export default {
    name: "page",
    title: "Page",
    type: "document",
    fields: [
        {
            title: "Page Title",
            name: "pageTitle",
            type: "string",
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: 'pageTitle',
                required: true,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
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
