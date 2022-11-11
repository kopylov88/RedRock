const openPopUp = document.querySelector('.account');
const PopUp = document.querySelector('.modal');
const PopUpWrap = PopUp.querySelector('.modal__wrap');
const PopUpBody = PopUp.querySelector('.modal__body');
const formBtn = PopUp.querySelector('.form__btn');
const body = document.querySelector('body')
function closePopup() {
    PopUp.classList.remove('active')
    PopUpBody.classList.remove('active')
    body.classList.remove('no-scroll');
}
openPopUp.addEventListener('click', function () {
    PopUp.classList.add('active')
    PopUpBody.classList.add('active')
    body.classList.add('no-scroll');
})
PopUpWrap.addEventListener('click', closePopup)
PopUpBody.addEventListener('click', function (e) {
    e.stopPropagation();
})
formBtn.addEventListener('click', closePopup);


const questionsTitles = document.querySelectorAll('.questions__item-title');
questionsTitles.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.toggle('clicked');
        this.nextElementSibling.classList.toggle('active');
        const currentText = this.nextElementSibling;
        if (currentText.classList.contains('active')) {
            currentText.style.maxHeight = currentText.scrollHeight + 'px';
        }
        else {
            currentText.style.maxHeight = null;
        }
    })
})


const tarifsBtns = document.querySelectorAll('.tariffs__card-link');
const PopUpBuy = document.querySelector('.modal-buy');
const PopUpBuyWrap = PopUpBuy.querySelector('.modal__wrap');
const PopUpBuyBody = PopUpBuy.querySelector('.modal__body');
const PopUpBuyBtn = PopUpBuy.querySelector('.form__btn');
tarifsBtns.forEach(function (item) {
    item.addEventListener('click', function () {
        PopUpBuy.classList.add('active');
        PopUpBuyBody.classList.add('active');
        body.classList.add('no-scroll');
    })
})
function closePopupBuy() {
    PopUpBuy.classList.remove('active')
    PopUpBuyBody.classList.remove('active')
    body.classList.remove('no-scroll');
}
PopUpBuyWrap.addEventListener('click', closePopupBuy)
PopUpBuyBody.addEventListener('click', function (e) {
    e.stopPropagation();
})
PopUpBuyBtn.addEventListener('click', closePopupBuy);