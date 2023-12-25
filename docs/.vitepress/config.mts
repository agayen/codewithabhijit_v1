import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "CodeWithAbhijit",
  description: "Let's Start Code With me",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Let's Coding",
        items: [
          { text: 'ExpressJs', link: '/expressjs/syllabus.html' },
          { text: 'Git and GitHub', link: '/git-and-github/syllabus.html' },
          { text: 'Web development', link: '/web-dev/syllabus.html' }
        ]
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
          text: "Examples 1",
          items: [
            { text: "Markdown Examples 1", link: "/markdown-examples" },
            { text: "Runtime API Examples 1", link: "/api-examples" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: 'local'
    },

    footer: {
      copyright: 'Copyright © 2024 Abhijit Gayen'
    }
  },
  sitemap: {
    hostname: 'https://codewithabhijit.vercel.app/',
    lastmodDateOnly: false
  }
});
