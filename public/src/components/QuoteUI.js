import { Component } from 'queflow'

const width = window.innerWidth

const QuoteUI = new Component('QuoteUI', {
  data: {
    quote: "Loading...",
    author: "Loading..."
  },
  template: () => {
    return `
      <div>
        <span>"{{ quote }}"</span>
        <cite font-weight="500">-{{ author }}</cite>
        <button onclick={{
          fetchQuote(data)
        }}>Generate Quote</button>
      </div>
    `
  },
  stylesheet: {
    'div': `
      width: ${ width < 768 ? 90 : 70 }vw;
      height: auto;
      padding-block: 2em;
      padding-inline: 1em;
      box-sizing: border-box;
      margin: 0 auto;
      margin-top: 5vh;
      background: linear-gradient(-210deg, #55585D, #0B0E13);
      border-radius: 15px;
      border: 1.5px solid #55585D;
      color: white;
      text-align: center;
    `,
    'span': `
      font-size: 28px;
      font-weight: 800;
      word-break: break-word;
      display: block;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 1em;
    `,
    'button': `
      display: block;
      margin: 0 auto;
      margin-top: 5em;
      width: 80%;
      height: auto;
      padding-block: 1em;
      border-radius: 60px;
      border: inherit;
      outline: 0px solid #55585D;
      color: inherit;
      background: inherit;
      font-size: 1.2em;
      font-weight: 500;
    `,
    'button:active': `
      outline-width: 5px;
    `
  },
  run: (data) => {
    fetchQuote(data)
  }
})

export default QuoteUI