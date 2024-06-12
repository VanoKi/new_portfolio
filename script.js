import {data} from './data.js'
let currInd = 0
let itemsPerPage = 3
const moreBtn = document.querySelector('.btn_more')

function loadItems() {
  const part = data.slice(currInd, currInd + itemsPerPage)
  let block = ``
  for (let index = 0; index < part.length; index++) {
    block += `<div class="item">
      <img class="portfolio_img" src="${part[index].image}" alt="Caffee_preview">
      <h3><a href="${part[index].url}">${part[index]['site-name']}</a></h3>
    </div>`
  }
  document.querySelector('.container').innerHTML += block
  currInd += itemsPerPage

  const container = document.querySelector('.container')
  const items = container.querySelectorAll('.portfolio_img')
  items.forEach(item => {
    item.addEventListener('click', (event) => {
      const str = event.target.src
      // console.log(str.slice(str.indexOf('a')));
      findItems(str.slice(str.indexOf('a')))
    })
  })

  if (currInd >= data.length){
    moreBtn.style.display = 'none'
  }
}
moreBtn.addEventListener('click', loadItems)
loadItems()

// function findItems(targ) {
//   for (let i = 0; i < data.length; i++) {
//     if (targ === data[i].image) {
//       let item = data[i];
//       console.log(item['site-name']);
//       console.log(item['description']);
//       console.log(item['title']);
//       console.log(item['image']);
//       break
//     }
//   }
// }

function findItems(targ) {
  for (let i = 0; i < data.length; i++) {
    if (targ === data[i].image) {
      let item = data[i];
      document.querySelector('body').innerHTML = `
      <div class="pop-up">
        <h2 class="pop-up__site-name">${item['site-name']}</h2>
        <p class="pop-up__description">${item['description']}</p>
        <a class="pop-up__url" href="${item['url']}">${item['title']}</a>
        <div class="pop-up__image-container">
          <img class="pop-up__img" src="${item['layout']}" alt="">
        </div>
        <div class="back">back to main</div>
      </div>
      `
      break
    }
  }
}