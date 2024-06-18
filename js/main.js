// import { cars } from './data-cars.js';

$(document).ready(function () {
   $('.slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
   });
});

//---------меню бургер
//const btnBurger = document.querySelector();
const stringMenu = document.querySelector('.header__string-menu');
const menuBtn = document.querySelector('.header__box-menu-btn');
const navMenu = document.querySelector('.header__nav-list');
const menuItemCatalog = document.querySelector('#menuItemCatalog');
const blackWindow = document.querySelector('.black-window');

//-----------каталог
// const arrowOpen = document.querySelector('#brandCarOpen');
// const arrowClose = document.querySelector('#brandCarClose');
// const carsList = document.querySelector('.catalog__list-cars');
// const modelBox = document.querySelector('.catalog__list-box');
// const modelList = document.querySelector('.catalog__list-models');
// const resultContainer = document.querySelector('.result__container');
// const catalogBrandsCar = document.querySelector('#catalogBrandsCar');

window.onload = function () {
   //------------бургер меню
   menuBtn.addEventListener('click', function () {
      stringMenu.classList.toggle('header__string-menu-active');
      navMenu.classList.toggle('header__nav-list--active');
      if (stringMenu.classList.contains('header__string-menu-active')) {
         blackWindow.style.display = 'block';
      } else {
         blackWindow.style.display = 'none';
      }
   });

   menuItemCatalog.addEventListener('click', function () {
      stringMenu.classList.remove('header__string-menu-active');
      navMenu.classList.remove('header__nav-list--active');
      blackWindow.style.display = 'none';
   });

   // //--------Функция открывающая список моделей

   // function addCars(listCar) {
   //    modelBox.innerHTML = '';

   //    listCar.forEach((car) => {
   //       let html = `
   // 	<li data-name="${car.name}" data-id="${car.id}" class="catalog__model">${car.model}</li>
   // 	`;
   //       modelBox.insertAdjacentHTML('beforeend', html);
   //    });
   // }
   // //---функция показывающая результат
   // function addResult(resultCar) {
   //    resultContainer.innerHTML = '';

   //    resultCar.forEach((car) => {
   //       const htmlResult = `
   // 			<div  class="result__car">

   // 			<div class="result__img">
   // 			<img src="./img/шторки/avtoshtorki_na_magni.png" alt="" />
   // 			</div>
   // 			<div class="result__price"><p>Цена ${car.price} 	&#8376;</p></div>
   // 			<div class="result__model"><p>Модель ${car.model}</p></div>
   // 			<div class="result__year"><p>Год ${car.year}</p></div>
   // 			<a href="https://wa.me/+77056260606">
   // 			<div class="result__btn"><button>Заказать</button></div>

   // 		</a>
   // 		</div>

   // 			`;
   //       resultContainer.insertAdjacentHTML('beforeend', htmlResult);
   //    });
   // }

   // //----открываем список моделей машин
   // catalogBrandsCar.addEventListener('click', function (e) {
   //    if (e.target.closest('#catalogTitle')) {
   //       carsList.classList.toggle('catalog__list-cars--active');
   //       modelList.classList.toggle('catalog__list-models--active');
   //       modelBox.innerHTML = '';
   //       resultContainer.innerHTML = '';
   //    }

   //    if (e.target.closest('#toyta')) {
   //       console.log(55555);
   //       addCars(cars[0]);
   //       addResult(cars[0]);
   //    }

   //    if (e.target.closest('#lexus')) {
   //       addCars(cars[1]);
   //       addResult(cars[1]);
   //    }
   //    if (e.target.closest('#mercedesBenz')) {
   //       addCars(cars[2]);
   //       addResult(cars[2]);
   //    }

   //    if (e.target.closest('#bmw')) {
   //       addCars(cars[3]);
   //       addResult(cars[3]);
   //    }
   //    if (e.target.closest('#audi')) {
   //       addCars(cars[4]);
   //       addResult(cars[4]);
   //    }
   //    if (e.target.closest('#kia')) {
   //       addCars(cars[5]);
   //       addResult(cars[5]);
   //    }

   //    if (e.target.closest('#hyundai')) {
   //       addCars(cars[6]);
   //       addResult(cars[6]);
   //    }
   //    if (e.target.closest('#honda')) {
   //       addCars(cars[7]);
   //       addResult(cars[7]);
   //    }

   //    if (e.target.closest('#mitsubishi')) {
   //       addCars(cars[8]);
   //       addResult(cars[8]);
   //    }
   //    if (e.target.closest('#nissan')) {
   //       addCars(cars[9]);
   //       addResult(cars[9]);
   //    }
   //    if (e.target.closest('#volkswagen')) {
   //       addCars(cars[10]);
   //       addResult(cars[10]);
   //    }

   //    if (e.target.closest('#renault')) {
   //       addCars(cars[11]);
   //       addResult(cars[11]);
   //    }
   //    if (e.target.closest('#skoda')) {
   //       addCars(cars[12]);
   //       addResult(cars[12]);
   //    }
   //    if (e.target.closest('#chevralet')) {
   //       addCars(cars[13]);
   //       addResult(cars[13]);
   //    }
   //    if (e.target.closest('#lada')) {
   //       addCars(cars[14]);
   //       addResult(cars[14]);
   //    }
   //    if (e.target.closest('#remain')) {
   //       addCars(cars[15]);
   //       addResult(cars[15]);
   //    }
   // });

   // modelList.addEventListener('click', function (event) {
   //    //----------------функция фильра

   //    function filterCar(car) {
   //       if (event.target.closest('.catalog__model')) {
   //          const element = event.target.closest('li.catalog__model');
   //          const id = +element.dataset.id;

   //          //const name = element.dataset.name;

   //          const filterCarItem = car.find((item) => {
   //             if (item.id == id) {
   //                return true;
   //             } else {
   //                return false;
   //             }
   //          });
   //          resultContainer.innerHTML = '';
   //          const html = `
   // 				<div class="result__car">
   // 				<div class="result__img">
   // 				<img src="./img/шторки/avtoshtorki_na_magni.png" alt="" />
   // 				</div>
   // 				<div class="result__price"><p>Цена ${filterCarItem.price} 	&#8376;</p></div>
   // 				<div class="result__model"><p>Модель ${filterCarItem.model}</p></div>
   // 				<div class="result__year"><p>Год ${filterCarItem.year}</p></div>
   // 				<a href="https://wa.me/+77056260606">
   // 				<div class="result__btn"><button>Заказать</button></div>

   // 			</a>
   // 			</div>
   // 				`;
   //          resultContainer.insertAdjacentHTML('beforeend', html);
   //       }
   //    }

   //    if (event.target.closest('.catalog__model')) {
   //       const element = event.target.closest('li.catalog__model');
   //       const name = element.dataset.name;
   //       if (name == 'toyta') {
   //          filterCar(cars[0]);
   //       }
   //       if (name == 'lexus') {
   //          filterCar(cars[1]);
   //       }
   //       if (name == 'mercedesbenz') {
   //          filterCar(cars[2]);
   //       }
   //       if (name == 'bmw') {
   //          filterCar(cars[3]);
   //       }
   //       if (name == 'audi') {
   //          filterCar(cars[4]);
   //       }
   //       if (name == 'kia') {
   //          filterCar(cars[5]);
   //       }
   //       if (name == 'hyundai') {
   //          filterCar(cars[6]);
   //       }
   //       if (name == 'honda') {
   //          filterCar(cars[7]);
   //       }
   //       if (name == 'mitsubishi') {
   //          filterCar(cars[8]);
   //       }
   //       if (name == 'nissan') {
   //          filterCar(cars[9]);
   //       }
   //       if (name == 'volkswagen') {
   //          filterCar(cars[10]);
   //       }
   //       if (name == 'renault') {
   //          filterCar(cars[11]);
   //       }
   //       if (name == 'skoda') {
   //          filterCar(cars[12]);
   //       }
   //       if (name == 'chevralet') {
   //          filterCar(cars[13]);
   //       }
   //       if (name == 'lada') {
   //          filterCar(cars[14]);
   //       }
   //       if (name == 'remain') {
   //          filterCar(cars[15]);
   //       }
   //    }
   // });
};
