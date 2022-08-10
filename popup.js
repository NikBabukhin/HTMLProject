const popupOpeners = document.querySelectorAll('.popup__opener');
const popupClosers = document.querySelectorAll('.popup__closer');
const popup = document.querySelector(".popup");

const closePopup = (popup, event) => {
    if (event.target.className === 'popup__body' || event.target.className.includes('popup__closer')) {
        popup.classList.remove('opened')
    }
}

const openPopup = (popup) => {
    popup.classList.add('opened')
}

for (let i = 0; i < popupOpeners.length; i++) {
    popupOpeners[i].addEventListener("click", (e) => {
        e.stopPropagation()
        openPopup(popup)
    })
    if (popupClosers[i]) {
        popupClosers[i].addEventListener("click", (e) => {
            closePopup(popup, e)
        })
    }
}