

const donuts = [
  {
    title_1: 'Red',
    tittle_2: 'Velvet Donuts',
    weight: 150,
    count: 4,
    img_1: './images/Red-Velvet-Donuts/img-1.png',
    img_2: './images/Red-Velvet-Donuts/img-2.png',
    img_3: './images/Red-Velvet-Donuts/img-3.png',
  },
  {
    title_1: 'Oreo',
    tittle_2: 'Donuts',
    weight: 160,
    count: 5,
    img_1: './images/Oreo-Donuts/img-1.png',
    img_2: './images/Oreo-Donuts/img-2.png',
    img_3: './images/Oreo-Donuts/img-3.png',
  },
  {
    img_1: './images/Lemon-Poppy-Seed-Donuts/img-1.png',
    img_2: './images/Lemon-Poppy-Seed-Donuts/img-2.png',
    img_3: './images/Lemon-Poppy-Seed-Donuts/img-3.png',
    title_1: 'Lemon Poppy',
    tittle_2: 'Seed Donuts',
    weight: 170,
    count: 6,
    
  },
  {
    img_1: './images/Blueberry-Cream-Cheese-Donuts/img-1.png',
    img_2: './images/Blueberry-Cream-Cheese-Donuts/img-2.png',
    img_3: './images/Blueberry-Cream-Cheese-Donuts/img-3.png',
    title_1: 'Blueberry Cream',
    tittle_2: 'Cheese Donuts',
    weight: 150,
    count: 4,
    
  },
  {
    img_1: './images/Triple-Chocolate-Baking-Donuts/img-1.png',
    img_2: './images/Triple-Chocolate-Baking-Donuts/img-2.png',
    img_3: './images/Triple-Chocolate-Baking-Donuts/img-3.png',
    title_1: 'Triple Chocolate',
    tittle_2: 'Baking Donuts',
    weight: 160,
    count: 5,
    
  },
  {
    img_1: './images/Chai-Latte-Donuts-With-Maple-Glaze/img-1.png',
    img_2: './images/Chai-Latte-Donuts-With-Maple-Glaze/img-2.png',
    img_3: './images/Chai-Latte-Donuts-With-Maple-Glaze/img-3.png',
    title_1: 'Chai Latte Donuts',
    tittle_2: 'With Maple Glaze',
    weight: 170,
    count: 6,
    
  },
];

function renderCards(){
   

   const cardsHtml = donuts.map((donut) => {
    return `<div class="card__wrapper">
    <div class="card__img__wrapper">
      <img src="${donut.img_1}" alt="img" class="card__img">
      <img src="${donut.img_2}" class="card__img none">
      <img src="${donut.img_3}" class="card__img none">
    </div>
    <h3 class="card__title">
      ${donut.title_1} <br/> ${donut.tittle_2}
    </h3>
    <div class="card__block__info">
      <p class="amount">
        6 items
      </p>
      <div class="card__block__info__row">
        <div class="counter">
          <p class="button__minus counter__button">-</p>
          <p class="counter__item">1</p>
          <p class="button__plus counter__button">+</p>
        </div>
        <div class="price__wrapper">
          <p class="weight">${donut.weight}g</p>
          <p class="price"><span class="price__item">${donut.count}</span>
            <span>&#8364</span></p>
        </div>
      </div>
    </div>
    <button data-cart="" type="button" class="card__button">+ in cart</button>
  </div>`
  }).join('')

  document.querySelector('.cards__wrapper').innerHTML = cardsHtml
}

renderCards()


