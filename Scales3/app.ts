interface IStorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class StorageEngineArray implements IStorageEngine  {//хранение в массиве
    products:Product[]=[];
    
    addItem(item:Product):void{
        this.products.push(item);
    };
    
    getItem(index:number):Product{
        return this.products[index];
    };
    
    getCount():number{
        return this.products.length;
    }
}

class StorageEngineLocalStorage implements IStorageEngine{
    localStorageKey:string='prods';
    
    addItem(item:Product):void{
        if (!localStorage.getItem(this.localStorageKey)) { //проверяем есть ли ключ первый раз, если нет то создаем массив
            let arrowProd:Product[]=[];
            arrowProd.push(item);
            localStorage.setItem(this.localStorageKey, JSON.stringify(arrowProd));
        } else {
            let parcedArrow:any[]=JSON.parse(localStorage.getItem(this.localStorageKey));
            parcedArrow.push(item);
            localStorage.setItem(this.localStorageKey, JSON.stringify(parcedArrow));
        }
    };
    
    getItem(index:number):Product {
        let parcedArrow:any[]=JSON.parse(localStorage.getItem(this.localStorageKey));
        return new Product(parcedArrow[index].name, parcedArrow[index].weight);
    };
    
    getCount():number {
        let parcedArrow:any[]=JSON.parse(localStorage.getItem(this.localStorageKey));
        return parcedArrow.length;
    }
}

class Scales<StorageEngine extends IStorageEngine> {

    se:StorageEngine; //способ хранения является классом

    constructor(_se:StorageEngine){
        this.se=_se;
    }

    getSumScale ():number {
        let resultWeight:number=0;
        for (let i:number=0; i < this.se.getCount(); i++) {
            resultWeight += this.se.getItem(i).getScale();
        }
        console.log('Масса: '+ resultWeight);
        return resultWeight;
    };

    getNameList ():string[] {
        let resultArr:string[]=[];
        for (let i:number = 0; i < this.se.getCount(); i++) {
            resultArr.push(this.se.getItem(i).getName());
        }
        console.log(resultArr);
        return resultArr;
    };
};

class Product {

    private name:string;
    private weight:number;

    constructor (_name:string, _weight:number) {
        this.name=_name;
        this.weight=_weight;
    };

    getScale ():number {
        return this.weight;
    };

    getName ():string {
        return this.name;
    };
};

let engineArray:StorageEngineArray=new StorageEngineArray; //механизм хранения массивом

let scale=new Scales<StorageEngineArray>(engineArray); //весы

let apple1:Product=new Product('Яблоко: Белый налив', 500);
let tomato1:Product=new Product('Томат: Черри', 300);
let apple2:Product=new Product('Яблоко: Антоновка', 400);
let tomato2:Product=new Product('Томат: Гигант', 600);

scale.se.addItem(apple1); //вызываем метод механизма хранения
scale.se.addItem(tomato1);
scale.se.addItem(apple2);
scale.se.addItem(tomato2);

scale.getSumScale();
scale.getNameList();

localStorage.removeItem('prods');

let storageLocal:StorageEngineLocalStorage=new StorageEngineLocalStorage; //механизм хранения массивом

let scaleLocal=new Scales<StorageEngineLocalStorage>(storageLocal); //весы

scaleLocal.se.addItem(apple1); //вызываем метод механизма хранения
scaleLocal.se.addItem(tomato1);
scaleLocal.se.addItem(apple2);
scaleLocal.se.addItem(tomato2);

scaleLocal.getSumScale();
scaleLocal.getNameList();