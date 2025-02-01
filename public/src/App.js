import { App } from 'queflow'
import QuoteUI from './components/QuoteUI.js'

const QuoteApp = new App('#app', {
  template: () => {
    return `<QuoteUI/>`
  },
  stylesheet: {
    '*': `
      font-family: Inter;
      transition: .5s;
    `
  }
})

QuoteApp.render()