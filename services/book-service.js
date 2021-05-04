// import { utilService } from './util-service.js'
// import { storageService } from './storage-service.js'

export const bookService = {
    query,
    getBooksFromJson
    // addCar,
    // deleteCar,
    // getCarById,
    // updateCar
}

const KEY = 'books'
//var gBooks= getBooksFromJson();
var gBooks=getBooksFromJson()

function getBooksFromJson() {
    // if(filterBy){
    //     return gBooks.filter(book => {

    //     })
    // }
    return axios
        .get('./json/books.json')
        .then(res => {
            console.log(res.data);
            return res.data
        })
}


function query() {
    return Promise.resolve(gBooks)
    return gBooks

}


// const KEY = 'cars';
// var gCars;
// var gVendors = ['audi', 'fiat', 'suzuki', 'honda', 'mazda']

// _createCars();

// function query(filterBy) {
//     if (filterBy) {
//         var { vendor, maxSpeed, minSpeed } = filterBy
//         maxSpeed = maxSpeed ? maxSpeed : Infinity
//         minSpeed = minSpeed ? minSpeed : 0
//         const filteredCars = gCars.filter(car => {
//             return car.vendor.includes(vendor) && car.speed > minSpeed && car.speed < maxSpeed
//         })
//         return Promise.resolve(filteredCars)
//     }
//     return Promise.resolve(gCars)
// }

// function deleteCar(carId) {
//     var carIdx = gCars.findIndex(function (car) {
//         return carId === car.id
//     })
//     gCars.splice(carIdx, 1)
//     _saveCarsToStorage();
// }

// function addCar(vendor, speed) {
//     var car = _createCar(vendor, speed)
//     gCars.unshift(car)
//     _saveCarsToStorage();
// }

// function getCarById(carId) {
//     var car = gCars.find(function (car) {
//         return carId === car.id
//     })
//     return car
// }

// function updateCar(carId, newSpeed) {
//     var car = gCars.find(function (car) {
//         return car.id === carId;
//     })
//     car.speed = newSpeed;
//     _saveCarsToStorage();
// }

// function _createCar(vendor, speed) {
//     if (!speed) speed = utilService.getRandomIntInclusive(1, 200)
//     return {
//         id: utilService.makeId(),
//         vendor: vendor,
//         speed: speed,
//         desc: utilService.makeLorem()
//     }
// }

// function _createCars() {
//     var cars = storageService.loadFromStorage(KEY)
//     if (!cars || !cars.length) {
//         cars = []
//         for (let i = 0; i < 5; i++) {
//             var vendor = gVendors[i]
//             cars.push(_createCar(vendor))
//         }
//     }
//     gCars = cars;
//     _saveCarsToStorage();
// }

// function _saveCarsToStorage() {
//     storageService.saveToStorage(KEY, gCars)
// }
