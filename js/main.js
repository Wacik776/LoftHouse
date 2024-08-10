//Nav icon
const navBtn = document.querySelectorAll('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const navMenu = document.querySelector('.header__top-row');
const input_tel = document.querySelectorAll('[data-tel-input]')

navBtn.forEach(function(element){
    element.addEventListener('click',open)
})

function open(){
    navIcon.classList.toggle('nav-icon--active');
    navMenu.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll')
}

//Phone mask
mask('[data-tel-input]')

//delete plus

input_tel.forEach((input)=>{
    input.addEventListener('input',()=>{
        if (input.value == '+') input.value = '';
    })

    input.addEventListener('blur',()=>{
        if (input.value == '+') input.value = '';
    })
})


// Yandex map


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.15782743305771,61.37985328570323],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });
    


    var myPlacemark = new ymaps.Placemark([55.15782743305771,61.37985328570323],
        {balloonContent:
            `
            <div class = "balloon">
                <div class ="balloon__address">Челябинск, Соня Кривая, 46</div>
                <div class ="balloon__contacts">
                    <a href="tel:+78121234567">+8 (812) 123-45-67</a>
                </div>
            </div>
        `
        },
        {
        iconLayout: 'default#image',
        iconImageHref: './img/main/map/location-pin.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-3, -42]
    });


    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
	myMap.controls.remove('searchControl'); // удаляем поиск
	myMap.controls.remove('trafficControl'); // удаляем контроль трафика
	myMap.controls.remove('typeSelector'); // удаляем тип

	// map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	// map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	myMap.controls.remove('rulerControl'); // удаляем контрол правил
	myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    myMap.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
}  