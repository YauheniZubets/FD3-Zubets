var StorageEngineArray = /** @class */ (function () {
    function StorageEngineArray() {
        this.products = [];
    }
    StorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ;
    StorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ;
    StorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return StorageEngineArray;
}());
var StorageEngineLocalStorage = /** @class */ (function () {
    function StorageEngineLocalStorage() {
        this.localStorageKey = 'prods';
    }
    StorageEngineLocalStorage.prototype.addItem = function (item) {
        if (!localStorage.getItem(this.localStorageKey)) { //проверяем есть ли ключ первый раз, если нет то создаем массив
            var arrowProd = [];
            arrowProd.push(item);
            localStorage.setItem(this.localStorageKey, JSON.stringify(arrowProd));
        }
        else {
            var parcedArrow = JSON.parse(localStorage.getItem(this.localStorageKey));
            parcedArrow.push(item);
            localStorage.setItem(this.localStorageKey, JSON.stringify(parcedArrow));
        }
    };
    ;
    StorageEngineLocalStorage.prototype.getItem = function (index) {
        var parcedArrow = JSON.parse(localStorage.getItem(this.localStorageKey));
        return new Product(parcedArrow[index].name, parcedArrow[index].weight);
    };
    ;
    StorageEngineLocalStorage.prototype.getCount = function () {
        var parcedArrow = JSON.parse(localStorage.getItem(this.localStorageKey));
        return parcedArrow.length;
    };
    return StorageEngineLocalStorage;
}());
var Scales = /** @class */ (function () {
    function Scales(_se) {
        this.se = _se;
    }
    Scales.prototype.getSumScale = function () {
        var resultWeight = 0;
        for (var i = 0; i < this.se.getCount(); i++) {
            resultWeight += this.se.getItem(i).getScale();
        }
        console.log('Масса: ' + resultWeight);
        return resultWeight;
    };
    ;
    Scales.prototype.getNameList = function () {
        var resultArr = [];
        for (var i = 0; i < this.se.getCount(); i++) {
            resultArr.push(this.se.getItem(i).getName());
        }
        console.log(resultArr);
        return resultArr;
    };
    ;
    return Scales;
}());
;
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    ;
    Product.prototype.getScale = function () {
        return this.weight;
    };
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    ;
    return Product;
}());
;
var engineArray = new StorageEngineArray; //механизм хранения массивом
var scale = new Scales(engineArray); //весы
var apple1 = new Product('Яблоко: Белый налив', 500);
var tomato1 = new Product('Томат: Черри', 300);
var apple2 = new Product('Яблоко: Антоновка', 400);
var tomato2 = new Product('Томат: Гигант', 600);
scale.se.addItem(apple1); //вызываем метод механизма хранения
scale.se.addItem(tomato1);
scale.se.addItem(apple2);
scale.se.addItem(tomato2);
scale.getSumScale();
scale.getNameList();
localStorage.removeItem('prods');
var storageLocal = new StorageEngineLocalStorage; //механизм хранения массивом
var scaleLocal = new Scales(storageLocal); //весы
scaleLocal.se.addItem(apple1); //вызываем метод механизма хранения
scaleLocal.se.addItem(tomato1);
scaleLocal.se.addItem(apple2);
scaleLocal.se.addItem(tomato2);
scaleLocal.getSumScale();
scaleLocal.getNameList();
//# sourceMappingURL=app.js.map