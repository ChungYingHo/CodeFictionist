/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// const sidebars = {
//   tutorialSidebar: [
//     {type: 'autogenerated', dirName: '.'}
//   ]
// };

const sidebars = {
  programSidebar: [
    'intro',
    {
      type: 'category',
      label: '程式語言',
      items: [
        {
          type: 'category',
          label: 'HTML & CSS',
          items: [
            {type: 'autogenerated', dirName: '程式語言/HTML'}
          ]
        },
        {
          type: 'category',
          label: 'JavaScript',
          items: [
            {type: 'autogenerated', dirName: '程式語言/JavaScript'}
          ]
        },
        {
          type: 'category',
          label: 'TypeScript',
          items: [
            {type: 'autogenerated', dirName: '程式語言/TypeScript'}
          ]
        },
        {
          type: 'category',
          label: 'SQL',
          items: [
            {type: 'autogenerated', dirName: '程式語言/SQL'}
          ]
        },
        {
          type: 'category',
          label: 'Python',
          items: [
            {type: 'autogenerated', dirName: '程式語言/Python'}
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '筆記本',
      items: [
        {
          type: 'category',
          label: 'Vue3',
          items: [
            {type: 'autogenerated', dirName: '筆記本/Vue'}
          ]
        },
        {
          type: 'category',
          label: 'Web Dev',
          items: [
            {type: 'autogenerated', dirName: '筆記本/網頁開發'}
          ]
        },
        {
          type: 'category',
          label: 'PWA',
          items: [
            {type: 'autogenerated', dirName: '筆記本/PWA'}
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '演算法',
      items: [
        {
          type: 'category',
          label: 'LeetCode',
          items: [
            {type: 'autogenerated', dirName: '演算法/LeetCode'}
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '開發日誌',
      items: [
        {
          type: 'category',
          label: '開發環境建置',
          items: [
            {type: 'autogenerated', dirName: '開發日誌/環境建置'}
          ]
        },
        {
          type: 'category',
          label: 'CodeFictionist',
          items: [
            {type: 'autogenerated', dirName: '開發日誌/CodeFictionist'}
          ]
        }
      ]
    }
  ],
  novelSidebar: [
    'novel-intro',
    {
      type: 'category',
      label: '蛇與魔杖',
      items: [
        {
          type: 'autogenerated',
          dirName: '小說架/蛇與魔杖'
        }
      ]
    }
  ]
};

export default sidebars;