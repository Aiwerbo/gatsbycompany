const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://aiwerbo.github.io/gatsbyDeployTest/',
    
  },
  () => {
    console.log('Deploy Complete!')
  }
)