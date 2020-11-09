var Ishop=React.createClass({

    displayName: 'ishop',

    propTypes: {
        products: React.PropTypes.array
    },

    getDefaultProps: function () {
        return {
            name: 'Anonymous',
            products: "Список товаров временно недоступен..."
        }
    },

    getInitialState: function () {
        return {
            products: this.props.products
        }  
    },

    deleteProd:function (code) {
        this.state.products.splice(+code, 1);
        this.setState({products: this.state.products})
    },

    render: function(){

        var prod=this.state.products;
        var prods=[];
        console.log(prod.length);

        if (prod.length>0) {
            prod.forEach((element, index) => {
                prods.push(
                    React.createElement(Product, {
                        name: element.name,
                        price: element.price,
                        qual: element.qual,
                        image: element.image,
                        name: element.name,
                        code: index,
                        delete: this.deleteProd,
                        key: index
                    })
                )  
            });
        } else {
            prods=!Boolean(prods);
        }

        return(
            React.DOM.table({},
                React.DOM.caption({}, `Список товаров магазина ${this.props.name}`),
                React.DOM.thead({},
                    React.DOM.tr({className: 'Ishop'},
                        React.DOM.td(null, 'Название'),
                        React.DOM.td(null, 'Цена'),
                        React.DOM.td(null, 'Остаток'),
                        React.DOM.td(null, 'Изображение'),
                        React.DOM.td(null, 'Удалить'),
                    )
                ),
                React.DOM.tbody({}, (prods || prod))
            )
        )
    },
})
