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
        text: "Youtube",
        link: "/youtube/problems",
      },
      {
        text: "Let's Coding",
        items: [
          { text: "Deep learning", link: "/deep-learning/introduction" },
          { text: "ExpressJs", link: "/expressjs/syllabus" },
          { text: "Git and GitHub", link: "/git-and-github/syllabus" },
        ],
      },
      { text: "Courses", link: "/markdown-examples" },
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
      "/deep-learning/": [
        {
          text: "Deep Learning",
          items: [
            { text: "Introduction", link: "/deep-learning/introduction" },
            // { text: "Syllabus", link: "/deep-learning/content-of-course" },
            {
              text: "Python Fundamentals",
              collapsed: false,
              items: [
                {
                  text: "Introduction to Python",
                  link: "/deep-learning/python-fundamentals/introduction-to-python",
                },
                {
                  text: "Installing libraries",
                  link: "/deep-learning/python-fundamentals/installing-libraries",
                },

                {
                  text: "Basic python",
                  link: "/deep-learning/python-fundamentals/basic-python",
                },
                {
                  text: "Numpy and Pandas",
                  link: "/deep-learning/python-fundamentals/numpy-and-pandas",
                },
                {
                  text: "Matplotlib",
                  link: "/deep-learning/python-fundamentals/Matplotlib",
                },
                {
                  text: "Read & write in files",
                  link: "/deep-learning/python-fundamentals/working-with-files-and-data",
                },
              ],
            },
            {
              text: "Math Fundamentals",
              collapsed: false,
              items: [
                {
                  text: "Calculus",
                  link: "/deep-learning/mathematics-fundamentals/calculus",
                },
                {
                  text: "Linear Algebra",
                  link: "/deep-learning/mathematics-fundamentals/linear-algebra",
                },
              ],
            },
            {
              text: "DL fundamentals",
              collapsed: false,
              items: [
                {
                  text: "fundamentals of NN",
                  link: "/deep-learning/deep_learning_fundamentals/fundamentals_of_NN",
                },
                {
                  text: "transformer",
                  link: "/deep-learning/deep_learning_fundamentals/transformer",
                },
                {
                  text: "Torch",
                  link: "/deep-learning/deep_learning_fundamentals/torch",
                },
                {
                  text: "Save Model",
                  link: "/deep-learning/deep_learning_fundamentals/save_train_model",
                },
              ],
            },
            {
              text: "DL Architectures",
              collapsed: false,
              items: [
                {
                  text: "DNN",
                  link: "/deep-learning/deep-learning-architectures/DNN",
                },
                {
                  text: "FFN",
                  link: "/deep-learning/deep-learning-architectures/FFN",
                },
                {
                  text: "CNN",
                  link: "/deep-learning/deep-learning-architectures/CNN",
                },
                {
                  text: "RNN",
                  link: "/deep-learning/deep-learning-architectures/RNN",
                },
                {
                  text: "LSTM",
                  link: "/deep-learning/deep-learning-architectures/LSTM",
                },
              ],
            },
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
      "/git-and-github/": [
        {
          text: "Git and Github",
          items: [
            { text: "Introduction", link: "/git-and-github/syllabus" },
            {
              text: "Introduction to Git",
              collapsed: false,
              items: [
                {
                  text: "Version control",
                  link: "/git-and-github/introduction-to-git/understanding-version-control",
                },
                {
                  text: "Install Git",
                  link: "/git-and-github/introduction-to-git/install-git",
                },
                {
                  text: "Creating Repo",
                  link: "/git-and-github/introduction-to-git/creating-git-repository",
                },
              ],
            },
            {
              text: "working-with-git",
              collapsed: false,
              items: [
                {
                  text: "Tracking Changes",
                  link: "/git-and-github/working-with-git/tracking-changes",
                },
                {
                  text: "Add changes",
                  link: "/git-and-github/working-with-git/create-marging-commit",
                },
                {
                  text: "Conflict Resolve",
                  link: "/git-and-github/working-with-git/conflict-resolve",
                },
                {
                  text: "Marging Commit",
                  link: "/git-and-github/working-with-git/merging-cod-changes",
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "linkedin", link: "https://www.linkedin.com/in/agayen04/" },
      { icon: "youtube", link: "https://www.youtube.com/@codewithabhijit" },
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
