export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60def5f3650c2ec4da6e05f5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-94mpx127",
                  apiId: "767e9e19-cd54-442f-999f-06f9471f59b7",
                },
                {
                  buildHookId: "60def5f437f112c57c18fddb",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-avz24pvg",
                  apiId: "7f4c4fb7-460b-42c5-946f-38581a33542d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dev-pwa/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-avz24pvg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
