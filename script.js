import {data} from './data.js'
let start = 3
let part = data.slice(0, start)
for (const i of part) {
  document.querySelector('.container').innerHTML = `
    <div class="item">
      <img class="portfolio_img" src="${part[i].image}" alt="Caffee_preview">
      <h3><a href="${part[i].url}">Coffee House Landing page</a></h3>
    </div>`
}

