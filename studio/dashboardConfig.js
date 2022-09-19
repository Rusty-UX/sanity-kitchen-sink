export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '6328bf95c0be380a469c6e7a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-vk6nfa4d',
                  apiId: 'bf9e4fb2-1268-49a1-9872-39661680ef55'
                },
                {
                  buildHookId: '6328bf95c0be3809dc9c6ed9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uuzwow1u',
                  apiId: '5fd57038-2c25-43c1-b5ed-30ce23a8f246'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rusty-UX/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uuzwow1u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
