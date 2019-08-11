const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/lavaldi/lavaldi.github.com.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)