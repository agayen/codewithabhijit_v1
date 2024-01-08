import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "CodeWithAbhijit",
  description: "Let's Start Code With me",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Problems",
        link: "/youtube/problems",
      },
      {
        text: "Let's Coding",
        items: [
          { text: "ExpressJs", link: "/expressjs/syllabus" },
          { text: "Git and GitHub", link: "/git-and-github/syllabus" },
        ],
      },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: {
      "/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
      "/expressjs/": [
        {
          text: "Express.js",
          items: [
            {
              text: "Syllabus",
              link: "/expressjs/syllabus",
            },
            {
              text: "Introduction of Express.js",
              collapsed: false,
              items: [
                {
                  text: "Introduction",
                  link: "/expressjs/intro-express/introduction",
                },
                {
                  text: "Setting up an Express.js",
                  link: "/expressjs/intro-express/basic-express",
                },
                {
                  text: "Middleware in Express.js",
                  link: "/expressjs/intro-express/middleware",
                },
                {
                  text: "Templeteing Engines",
                  link: "/expressjs/intro-express/templeteing-engines",
                },
              ],
            },
            {
              text: "Working with Data",
              collapsed: false,
              items: [
                {
                  text: "Connecting To Databases",
                  link: "/expressjs/working-with-data/connecting-to-databases",
                },
                {
                  text: "ORM Libraries",
                  link: "/expressjs/working-with-data/ORM-libraries",
                },
                {
                  text: "Validation Error Data",
                  link: "/expressjs/working-with-data/validation-error-data",
                },
                {
                  text: "Cookies and Sessions",
                  link: "/expressjs/working-with-data/cookies-and-sessions",
                },
              ],
            },
            {
              text: "Building API",
              collapsed: false,
              items: [
                {
                  text: "RESTful APIs",
                  link: "/expressjs/building-API/restful-api",
                },
                {
                  text: "CRUD operations",
                  link: "/expressjs/building-API/cred-op",
                },
                {
                  text: "Req & Res formatting",
                  link: "/expressjs/building-API/req-and-res-formatting",
                },
              ],
            },
            {
              text: "Advanced Topic",
              collapsed: false,
              items: [
                {
                  text: "Introduction Websocket",
                  link: "/expressjs/advanced-topic/intro_websocket",
                },
                {
                  text: "What is Socket.io",
                  link: "/expressjs/advanced-topic/intro_socket_io",
                },
                {
                  text: "Real time chat applictaion",
                  link: "/expressjs/advanced-topic/chat_app",
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      copyright: "Copyright © 2024 Abhijit Gayen",
    },
  },
  sitemap: {
    hostname: "https://codewithabhijit.vercel.app/",
    lastmodDateOnly: false,
  },
});
