
//*============================================ IMG SLIDER

const imgWrappers = Array.from(document.querySelectorAll('.card__img__wrapper'));
  imgWrappers.forEach(function(slideWrapper){
    slideWrapper.dataset.action = 'changeSlide';
    Array.from(slideWrapper.children).forEach(function(images, index){
      images.dataset.item = 'slideImage';
      images.dataset.index = index;
      if(index === 0){
        images.dataset.activeslide = '';
      }
      })
  })

window.addEventListener('click', function(event){
  if(event.target.dataset.item === 'slideImage'){
   
   const imgWrapper = event.target.closest('.card__img__wrapper');
   const arrayImages = Array.from(imgWrapper.children);
   

     const slideActive = imgWrapper.querySelector('[data-activeslide]');
     
     const slideActiveIndex = +slideActive.dataset.index;
     
      slideActive.classList.add('none');
      slideActive.removeAttribute('data-activeslide');
      
      let nextSlideIndex = slideActiveIndex+1 === arrayImages.length ? 0 : slideActiveIndex + 1;
      

      const nextSlideImg = arrayImages[nextSlideIndex];
      nextSlideImg.classList.remove('none');
      nextSlideImg.setAttribute('data-activeslide', '');

  }
})


//*================================================================ COUNTERS



window.addEventListener('click', function(event){
  const arrBttnPlus = Array.from(document.querySelectorAll('.button__plus'));
const arrBttnMinus = Array.from(document.querySelectorAll('.button__minus'));

arrBttnPlus.forEach(function(item){
  item.dataset.action = 'plus';
})
arrBttnMinus.forEach(function(item){
  item.dataset.action = 'minus';
})


  if(event.target.dataset.action === 'plus'){
    const counterWrapper = event.target.closest('.counter');
    const counter = counterWrapper.querySelector('.counter__item');
    counter.innerText = ++counter.innerText    
  }
  if(event.target.dataset.action === 'minus'){
    const counterWrapper = event.target.closest('.counter');
    const counter = counterWrapper.querySelector('.counter__item');
    if(parseInt(counter.innerText) > 1){
      counter.innerText = --counter.innerText;
    }else if(event.target.closest('.cart__item') && counter.innerText === '1'){
      event.target.closest('.cart__item').remove();
    }
  }  
})



//*======================================================== ADD ORDER IN CART

const cardWrapper = Array.from(document.querySelectorAll('.card__wrapper'));
const cartItemsWrapper = document.querySelector('.cart__items__wrapper');

cardWrapper.forEach(function(item, index){
  item.dataset.id = index;
});

window.addEventListener('click', function(event){
  if(event.target.hasAttribute('data-cart')){
    const card = event.target.closest('.card__wrapper');
    const cartData = {
      id: card.dataset.id,
      imgSrc: card.querySelector('[data-activeslide]').getAttribute('src'),
      title: card.querySelector('.card__title').innerText,
      counter: card.querySelector('.counter__item').innerText,
      weight: card.querySelector('.weight').innerText,
      cost: card.querySelector('.price__item').innerText,
    }

    const cartItemCounter = cartItemsWrapper.querySelector(`[data-id="${cartData.id}"]`);

    if(cartItemCounter){
      const cartCounterElement = cartItemCounter.querySelector('.counter__item');
      cartCounterElement.innerText = parseInt(cartCounterElement.innerText) + parseInt(cartData.counter);
    }else{
          const cartItemHtml = `<div class="cart__item" data-id="${cartData.id}">
          <div class="cart__item__close__wrapper"><div class="cart__item__close" data-action="closeitem"></div></div>
                                <div class="cart__item__row">
                                  <div class="cart__item__img__wrapper">
                                    <img src="${cartData.imgSrc}" alt="image">
                                  </div>
                                  <h5 class="cart__item__title">
                                  ${cartData.title}
                                  </h5>
                                </div>
                                <div class="card__block__info__row">
                                  <div class="counter">
                                    <p class="button__minus counter__button">-</p>
                                    <p class="counter__item">${cartData.counter}</p>
                                    <p class="button__plus counter__button">+</p>
                                  </div>
                                  <div class="price__wrapper">
                                    <p class="weight">${cartData.weight}</p>
                                    <p class="price"><span class="price__item">${cartData.cost}</span>
                                      <span>&#8364</span></p>
                                  </div>
                                </div>
                                </div>`;

  cartItemsWrapper.insertAdjacentHTML('beforeend',cartItemHtml);

  const arrPrice = Array.from(document.querySelectorAll('.price__item'));
  arrPrice.forEach(function(item){
    const itemData = item.innerText;
    if(itemData === '3' || itemData === '4' || itemData === '5' || itemData === '7' || itemData === '9'){
      item.closest('.price').lastElementChild.classList.add('E')
    }
  });
 };
 card.querySelector('.counter__item').innerText = '1';
}
});



//**===============================================DELETE CART ITEM  


window.addEventListener('click', function(event){
  if(event.target.dataset.action === 'closeitem'){
    event.target.closest('.cart__item').remove();
  }
})


//*======================================= HIDDEN SHOW "CART IS EMPTY"

window.addEventListener('click', function(){
  const cartWrapper = document.querySelector('.cart__items__wrapper');
  const arrCartItems = Array.from(cartWrapper.children);
  if(arrCartItems.length > 0){
    document.querySelector('.cart__alert').classList.add('none');
    document.querySelector('.cart__form').classList.remove('none');
    document.querySelector('.cart__deliver').classList.remove('none');

    let totalSumItems = 0;
    arrCartItems.forEach(function(cartItem){
      const itemSum = parseInt(cartItem.querySelector('.counter__item').innerText) * parseInt(cartItem.querySelector('.price__item').innerText);
      totalSumItems += itemSum;
      });

      if(totalSumItems < 30){
        const deliverCost = 7;
        document.querySelector('.cost__deliver').innerText = deliverCost + '€';
        document.querySelector('.total__sum__num').innerText = totalSumItems + deliverCost;
      }else{
        document.querySelector('.cost__deliver').innerText = 'free';
        document.querySelector('.total__sum__num').innerText = totalSumItems;
      }
  }else if(arrCartItems.length === 0){
    document.querySelector('.cart__alert').classList.remove('none');
    document.querySelector('.cart__form').classList.add('none');
    document.querySelector('.cart__deliver').classList.add('none');
    document.querySelector('.total__sum__num').innerText = 0;
  }
})



//*============================================= CLICK TO CART ICON

const cartIconImg = document.querySelector('.cart__icon__wrapper svg');

cartIconImg.addEventListener('click', function(){
  cartIconImg.closest('.cart__icon__wrapper').classList.toggle('cart__icon__wrapper--active');
  document.querySelector('.cart').classList.toggle('cart--active');
  document.querySelector('header').classList.toggle('none');
  document.querySelector('.cards').classList.toggle('none');
  
})