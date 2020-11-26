export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa0ad53295f781f0a6a42d7',
                  title: 'Sanity Studio',
                  name: 'mahana-sanity-gridsome-studio',
                  apiId: '34a6bf3a-c32c-4144-8944-6ed2e89659fd'
                },
                {
                  buildHookId: '5fa0ad535e94681c395f1f23',
                  title: 'Mahana Website',
                  name: 'mahana-sanity-gridsome',
                  apiId: '38bf580b-7b5d-4771-810e-52608be5f7fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomrishworth/mahana-sanity-gridsome',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://mahana-sanity-gridsome.netlify.app',
            category: 'apps'
          }
        ]
      }
    }
  ]
}
