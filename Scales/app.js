var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (_product) {
        this.products.push(_product);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var resultWeight = 0;
        for (var i = 0; i < this.products.length; i++) {
            resultWeight += this.products[i].getScale();
        }
        console.log('Масса: ' + resultWeight);
        return resultWeight;
    };
    ;
    Scales.prototype.getNameList = function () {
        var resultArr = [];
        for (var i = 0; i < this.products.length; i++) {
            resultArr.push(this.products[i].getName());
        }
        console.log(resultArr);
        return resultArr;
    };
    ;
    return Scales;
}());
;
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    ;
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_name, _weight) {
        var _this = _super.call(this) || this;
        _this.name = _name; //в свойство name класса Продукт сразу заносим имя
        _this.weight = _weight; //в свойство weight класса Продукт сразу заносим массу
        return _this;
    }
    ;
    return Apple;
}(Product));
;
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_name, _weight) {
        var _this = _super.call(this) || this;
        _this.name = _name;
        _this.weight = _weight;
        return _this;
    }
    ;
    return Tomato;
}(Product));
;
var scale = new Scales;
var apple1 = new Apple('Яблоко: Белый налив', 500);
var tomato1 = new Tomato('Томат: Черри', 300);
var apple2 = new Apple('Яблоко: Антоновка', 400);
var tomato2 = new Tomato('Томат: Гигант', 600);
scale.add(apple1);
scale.add(tomato1);
scale.add(apple2);
scale.add(tomato2);
scale.getSumScale();
scale.getNameList();
//# sourceMappingURL=app.js.map