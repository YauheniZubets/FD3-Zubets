var Ishop=React.createClass({

    displayName: 'ishop',

    getDefaultProps: function () {
        return {
            name: 'Anonymous',
            products: "Список товаров временно недоступен..."
        }
    },

    prodImage(url, name){
        return React.DOM.img({src: `${url}`, alt: name, className: 'Image'})
    },

    render: function(){

        var prod=this.props.products;
        var prods=[];

        if (Array.isArray(prod)) {
            prod.forEach((element, index) => {
                prods.push(
                    React.DOM.tr({key: index},
                        React.DOM.td({}, element.name),
                        React.DOM.td({}, `${element.price} BYN`),
                        React.DOM.td({}, `${element.qual} шт.`),
                        React.DOM.td({}, this.prodImage(element.image, element.name)),   
                    )
                )  
            });
        } else {
            prods=!Boolean(prods);
        }

        return(
            React.DOM.table({className: 'Ishop'},
                React.DOM.caption({}, `Список товаров магазина ${this.props.name}`),
                React.DOM.thead({},
                    React.DOM.tr({},
                        React.DOM.td(null, 'Название'),
                        React.DOM.td(null, 'Цена'),
                        React.DOM.td(null, 'Остаток'),
                        React.DOM.td(null, 'Изображение'),
                    )
                ),
                React.DOM.tbody({}, (prods || prod))
            )
        )
    },
})
