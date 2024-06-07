import {data} from './data.js'
let start = 3
let part = data.slice(0, start)
let block = ``
for (let index = 0; index < part.length; index++) {
  // document.querySelector('.container').innerHTML = `
  //   <div class="item">
  //     <img class="portfolio_img" src="${part[index].image}" alt="Caffee_preview">
  //     <h3><a href="${part[index].url}">${part[index]['site-name']}</a></h3>
  //   </div>`
  block += `<div class="item">
    <img class="portfolio_img" src="${part[index].image}" alt="Caffee_preview">
    <h3><a href="${part[index].url}">${part[index]['site-name']}</a></h3>
  </div>`
}

document.querySelector('.container').innerHTML = block

