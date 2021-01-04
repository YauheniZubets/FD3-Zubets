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
var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    ;
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    ;
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
;
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    ;
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    ;
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
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