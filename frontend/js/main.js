

const firstSwiper = new Swiper(".firstSwiper", {
    loop: true,
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    initialSlide: 0,
    enabled: true,
    spaceBetween: 35,
    breakpoints: {
        523: {
            enabled: false,
            loop: false,
            slidesPerGroup: 1,
            slidesPerView: 4,
            spaceBetween: 45
        }
    }
});
const secondSwiper = new Swiper(".secondSwiper", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    initialSlide: 0,
    enabled: true,
    spaceBetween: 60,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        523: {
            enabled: false,
            loop: false,
            slidesPerGroup: 1,
            slidesPerView: 4,
            spaceBetween: 45
        }
    }
});

const swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    spaceBetween: 10,
    // slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 2,
    enabled: true,
    breakpoints: {
        523: {
            enabled: true,
            loop: false,
            slidesPerGroup: 1,
            slidesPerView: 4,
            direction: 'vertical',
            spaceBetween: 181,
        }
    }
});
const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    allowTouchMove: false,
    thumbs: {
        swiper: swiper,
    },
});

//реализация попапа

document.addEventListener('DOMContentLoaded', function () {
    let burger = document.getElementById('burger');
    let popup = document.getElementById('popup');
    burger.addEventListener('click', function () {
        burger.classList.toggle('open');
    })
    burger.addEventListener('click', function () {
        popup.classList.toggle('open-popup');
    })
});

//реализация выпадающих списков

const dropdownToggleList = document.querySelectorAll('.popup__main_item');

dropdownToggleList.forEach(function(dropdownToggle) {
    dropdownToggle.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownToggle.classList.toggle('rotate');
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('unlock');
    });
});

//реализация смены текста при смене слайда

let firstAnchor = document.getElementById('anchor-1');
let secondAnchor = document.getElementById('anchor-2');
let thirdAnchor = document.getElementById('anchor-3');
let fourthAnchor = document.getElementById('anchor-4');

firstAnchor.addEventListener('click', () => {
    swiper2.slideTo(3);
    document.getElementById("fourth-title").innerHTML = "Парковка";
})
secondAnchor.addEventListener('click', () => {
    swiper2.slideTo(2);
    document.getElementById("fourth-title").innerHTML = "Архитектура";
})
thirdAnchor.addEventListener('click', () => {
    swiper2.slideTo(1);
    document.getElementById("fourth-title").innerHTML = "Охрана";
})
fourthAnchor.addEventListener('click', () => {
    swiper2.slideTo(0);
    document.getElementById("fourth-title").innerHTML = "Территория";
    document.getElementById("fourth-subtitle").innerHTML = 'Жилой комплекс "Яблоновский" расположен на ул. Кобцевой Н.С. в пгт. Яблоновский. За пять минут пешком можно дойти до муниципальной поликлиники, школы и детского садика.';
    document.getElementById("fourth-subtitle-2").innerHTML = "Этот жилой комплекс располагается в непосредственной близости от улицы Гагарина, где проходит абсолютное большинство маршрутов общественного транспорта, соответственно легко добраться во все части поселка и города Краснодар. Тут же располагается магазин «Магнит», «Магнит Косметик», МФЦ, овощной рынок, мебельные магазины, аптеки и другие предприятия сферы услуг.";
});

//Подсветка фокус-карточки

let anchorActive = document.querySelectorAll('.description__card');
anchorActive.forEach(el => {
    el.addEventListener('click', (e) => {
        let currentBtn = e.currentTarget;

        anchorActive.forEach(el => {
            if (el !== currentBtn) {
                el.classList.remove('anchor_active');
            }
        });
        currentBtn.classList.add('anchor_active');
    });
})



const submitBtn = document.querySelector('#submit');
const emailField = document.querySelector('#mail');
const phoneField = document.querySelector('#number');
const nameField = document.querySelector('#name');
const checkboxField = document.querySelector('#html');

const nameError = document.querySelector('#name-error');
const numberError = document.querySelector('#number-error ');
const emailError = document.querySelector('#email-error');
const checkError = document.querySelector('#check-error');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const fields = [nameError, emailError, numberError, checkError];
    fields.forEach(field => field.classList.remove('error-visible'));
    
    const errors = [];

    // проверяем поле имени
    if (nameField.value.trim() === '') {
        errors.push(nameError);
    }

    // проверяем поле email
    if (emailField.value.trim() === '') {
        errors.push(emailError);
    } else if (!validateEmail(emailField.value.trim())) {
        errors.push(emailError);
    }

    // проверяем поле номера телефона
    if (phoneField.value.trim() === '') {
        errors.push(numberError);
    } else if (!validatePhone(phoneField.value.trim())) {
        errors.push(numberError);
    }

    // проверяем состояние чекбокса
    if (!checkboxField.checked) {
        errors.push(checkError);
    }


    errors.forEach(error => error.classList.add('error-visible'));
    return errors;
};
function validateEmail(email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

    return regex.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const regex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    return regex.test(phone);
}



//Карта с якорями по нажатию

let magazineCoordinates = [44.988712, 38.932796];
let mainCoordinates = [44.989968, 38.926517];
let kinderCoordinates = [44.991039, 38.929625];
let azsCoordinates = [44.989184, 38.924217];
let healthCoordinates = [44.990070, 38.932913];

function init(){
    let myMap = new ymaps.Map("map", {
        center: magazineCoordinates,
        zoom: 16
    });



    let magazineMark = new ymaps.Placemark(magazineCoordinates, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../../public/img/magazine-map.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-30, -10],
        
    })
    let mainMark = new ymaps.Placemark(mainCoordinates, {
        iconContent: '<div class="icon_assist">ЖК "Яблоновский"</div>',
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '../../public/img/geolocation-icon.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-10, -10]
    })
    
    let kinderMark = new ymaps.Placemark(kinderCoordinates, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../../public/img/kindergarten-icon.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-10, -10],
    })
    
    let azsMark = new ymaps.Placemark(azsCoordinates, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../../public/img/azs-icon.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-40, -30]
    })
    let healthMark = new ymaps.Placemark(healthCoordinates, {}, {
        iconLayout: 'default#image',
        iconImageHref: '../../public/img/health-icon.png',
        iconImageSize: [60, 60],
        iconImageOffset: [-20, -20]
    })

    let magazine = document.getElementById('magazine');
    magazine.addEventListener('click', function () {
        myMap.setCenter(magazineCoordinates);
        myMap.setZoom(16);
    })
    let main = document.getElementById('main');
    main.addEventListener('click', function () {
        myMap.setCenter(mainCoordinates);
        myMap.setZoom(16);
    })
    let kinder = document.getElementById('kinder');
    kinder.addEventListener('click', function () {
        myMap.setCenter(kinderCoordinates);
        myMap.setZoom(16);
    })
    let azs = document.getElementById('azs');
    azs.addEventListener('click', function () {
        myMap.setCenter(azsCoordinates);
        myMap.setZoom(16);
    })
    let health = document.getElementById('health');
    health.addEventListener('click', function () {
        myMap.setCenter(healthCoordinates);
        myMap.setZoom(16);
    })

    myMap.geoObjects.add(magazineMark);
    myMap.geoObjects.add(mainMark);
    myMap.geoObjects.add(kinderMark);
    myMap.geoObjects.add(azsMark);
    myMap.geoObjects.add(healthMark);
}

//Подсветка фокус-карточки

const menuBtns = document.querySelectorAll('.map__nav_item');
const assistBlock = document.querySelectorAll('.icon_assist');
menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {
        let currentBtn = e.currentTarget;

        menuBtns.forEach(el => {
            if (el !== currentBtn) {
                el.classList.remove('nav_active');
            }
        });
        currentBtn.classList.add('nav_active');
    });
});

ymaps.ready(init);









