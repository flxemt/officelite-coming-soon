import Navigo from 'navigo'

import Homepage from './pages/Homepage'
import Signup from './pages/Signup'

export default function createRoutes(renderCountdown) {
  const router = new Navigo('/')

  const routes = [
    {
      path: '/',
      view: Homepage
    },
    {
      path: '/signup',
      view: Signup
    }
  ]

  routes.forEach(route => {
    router.on(route.path, () => {
      document.documentElement.scrollTop = 0
      route.view()
      renderCountdown()
    })
  })

  router.resolve()
}
