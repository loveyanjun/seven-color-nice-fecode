console.log(require('./headSection'))
export default {
  routes: {
    '/headSection': require('./headSection'),
    '/rightSection': require('./rightSection'),
    '/leftSection': require('./leftSection'),
    '/seeDetail': require('./seeDetail'),
    '/setQuestion': require('./setQuestion'),
    '/upload': require('./upload'),
    '/addSection': require('./addSection'),
    '/historySection': require('./historySection'),
    '/resourceSection': require('./resourceSection'),
    '/login': require('./login')
  },
  alias: {
  }
}
