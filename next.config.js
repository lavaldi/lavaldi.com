const nexteinConfig = require('nextein/config').default

module.exports = nexteinConfig({
  exportPathMap: () => ({
    '/writings': {
      page: '/writings'
    },
    '/jesusfreak': { page: '/jesusfreak' },
    '/code': { page: '/code' }
  })
})
