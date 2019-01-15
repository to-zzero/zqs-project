import 'normalize.css'
import '../scss/common.scss'
// import 'element-ui/lib/theme-chalk/index.css'

import '../components'
import './directive'

const addStyle = function (href) {
  const link = document.createElement('link')
  link.href = href
  link.rel = 'stylesheet'
  document.querySelector('head').appendChild(link)
}

addStyle('https://fonts.font.im/css?family=Open+Sans:400,700')
