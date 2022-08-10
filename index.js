//Helper variables
const sections = document.querySelectorAll('.order__section');
const deleteButtons = document.querySelectorAll('.section__delete');
const minusButtons = document.querySelectorAll('.button__minus');
const plusButtons = document.querySelectorAll('.button__plus');
const counts = document.querySelectorAll('.count')
const pricesForOne = document.querySelectorAll('.price__for__one')
const totalPrices = document.querySelectorAll('.total__price__changed');
const sumPrice = document.querySelector('.order__price-total');


//Plus or minus count
for (let i = 0; i < totalPrices.length; i++) {
    plusButtons[i].addEventListener('click', () => {
        counts[i].innerText = +counts[i].innerText + 1;
        totalPrices[i].innerText = (+pricesForOne[i].innerText.substring(0, pricesForOne[i].innerText.length - 2) * (+counts[i].innerText)) + ' ₽';
        countTotalSum()
    })

    minusButtons[i].addEventListener('click', () => {
        if (+counts[i].innerText > 0) {
            counts[i].innerText = +counts[i].innerText - 1;
            totalPrices[i].innerText = (+pricesForOne[i].innerText.substring(0, pricesForOne[i].innerText.length - 2) * (+counts[i].innerText)) + ' ₽';
            countTotalSum()
        }
    })
}

const countTotalSum = () => {
    let sum = 0
    for (let i = 0; i < totalPrices.length; i++) {
        sum += +totalPrices[i].innerText.substring(0, totalPrices[i].innerText.length - 2)
    }
    sumPrice.innerHTML = `Сумма заказа: <span class="order__price-total--prev">${Math.ceil(sum)}</span><span class="order__price-total--current"> ${Math.ceil(sum * 0.8)} ₽</span>`
}
countTotalSum()


//Delete section
for (let i = 0; i < sections.length; i++) {
    deleteButtons[i] && deleteButtons[i].addEventListener('click', () => {
        totalPrices[i].innerText = '0 ₽'
        sections[i].remove()
        countTotalSum();
    })
}

//Toggle classes
const toggleButtons = document.querySelectorAll('.popup__product-toggle--item')

for (let i = 0; i < toggleButtons.length; i++) {
    if (i < 3) {
        toggleButtons[i].addEventListener('click', () => {
            toggleButtons[0].classList.remove('toggle__item-active')
            toggleButtons[1].classList.remove('toggle__item-active')
            toggleButtons[2].classList.remove('toggle__item-active')
            toggleButtons[i].classList.add('toggle__item-active')
        })
    }
    if (i >= 3) {
        toggleButtons[i].addEventListener('click', () => {
            toggleButtons[3].classList.remove('toggle__item-active')
            toggleButtons[4].classList.remove('toggle__item-active')
            toggleButtons[i].classList.add('toggle__item-active')
        })
    }
}

