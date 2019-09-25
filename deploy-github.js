const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/FinesoftAfrika/gatsby-starter-coming-soon.git',
    },
    () => {
        console.log('Deploy Complete!')
    }
)