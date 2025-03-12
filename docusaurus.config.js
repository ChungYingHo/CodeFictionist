// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodeFictionist",
  tagline: "寫程式的小說家",
  favicon: "img/favicon.ico",

  url: "https://codefictionist.com/",
  baseUrl: "/",

  organizationName: "chungyingho",
  projectName: "CodeFictionist",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-PCHB061PKF",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      image: "img/fulllogo.jpg",
      navbar: {
        title: "CodeFictionist",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: "/about",
            position: "left",
            label: "About Me",
          },
          {
            type: "docSidebar",
            sidebarId: "programSidebar",
            position: "left",
            label: "Tech Articles",
          },
          {
            type: "docSidebar",
            sidebarId: "thirtySeriesSidebar",
            position: "left",
            label: "30 Days Series",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ChungYingHo",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/in/chung-ying-ho",
            label: "LinkedIn",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} CodeFictionist. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["csharp", 'dart', 'powershell', 'scss'],
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en", "zh"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
};

export default config;
