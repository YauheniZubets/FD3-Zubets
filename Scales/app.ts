class Scales {

    products:Product[]=[];

    add (_product:Product):void {
        this.products.push(_product);
    };

    getSumScale ():number {
        let resultWeight:number=0;
        for (let i:number=0; i < this.products.length; i++) {
            resultWeight += this.products[i].getScale();       
        }
        console.log('Масса: '+ resultWeight);
        return resultWeight;
    };

    getNameList ():string[] {
        let resultArr:string[]=[];
        for (let i:number = 0; i < this.products.length; i++) {
            resultArr.push(this.products[i].getName());
        }
        console.log(resultArr);
        return resultArr;
    };
};

class Product {
    name:string;
    weight:number;

    getScale ():number {
        return this.weight
    };

    getName ():string {
        return this.name
    }
}

class Apple extends Product {
    constructor (_name:string, _weight:number) {
        super();
        this.name=_name;//в свойство name класса Продукт сразу заносим имя
        this.weight=_weight;//в свойство weight класса Продукт сразу заносим массу
    };
};

class Tomato extends Product {
    constructor (_name:string, _weight:number) {
        super();
        this.name=_name;
        this.weight=_weight;
    };
};

let scale:Scales=new Scales;

let apple1:Apple=new Apple('Яблоко: Белый налив', 500);
let tomato1:Tomato=new Tomato('Томат: Черри', 300);
let apple2:Apple=new Apple('Яблоко: Антоновка', 400);
let tomato2:Tomato=new Tomato('Томат: Гигант', 600);

scale.add(apple1);
scale.add(tomato1);
scale.add(apple2);
scale.add(tomato2);

scale.getSumScale();
scale.getNameList();