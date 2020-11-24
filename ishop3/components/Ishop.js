import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Ishop.css';

import Product from './Product';
import Prodinfo from './Prodinfo';
import Editprod from './Editprod';
import Addprod from './Addprod';

class Ishop extends React.Component {

    displayName='ishop';

    static propTypes = {
        products: PropTypes.array
    }

    static defaultProps = {
    
        name: 'Anonymous',
        products: "Список товаров временно недоступен..."
        
    }

    state = {
        products: this.props.products,
        selectedCode: null,
        prodCard: false,
        editCard: false,
        editCode: null,
        preventClicks: false,
        addCard: false
    }

    selected = (code) => {
        code!==this.state.selectedCode
        ? this.setState({selectedCode: code, prodCard: true, editCard: false})
        : this.setState({selectedCode: null, prodCard: !this.state.prodCard});
    }

    addProd = (name, price, image, quan, code) => {
        let newProd={
            name: name,
            code: code,
            price: price,
            qual: quan,
            image: image,
        };
        this.state.products.push(newProd);
        this.setState({products: this.state.products});
    }

    deleteProd = (code) =>{
        this.state.products.forEach((item, index)=>{
            if(item.code==code){
                this.state.products.splice(index, 1);
            }
        });
        this.setState({products: this.state.products});
    }

    cbShowCard = () => {
        this.setState({prodCard: !this.state.prodCard})
    }

    editCard = (code) => {
        this.setState({editCard: true, editCode: code, selectedCode: code, prodCard: false});
    }

    changeProd = (name, price, image, quan, code) => {
        let ediredProd={
            name: name,
            code: code,
            price: price,
            qual: quan,
            image: image
        }
        this.state.products.forEach((item, index)=>{
            if (item.code==code) {
                this.state.products.splice(index, 1, ediredProd);
            }
        });
        this.setState({products: this.state.products});
    }

    removeCard = () => {
        this.setState({editCard: false, addCard: false});
    }

    cbAddNewCard = () => {
        this.setState({addCard: true, selectedCode: null, preventClicks: true});
    }

    preventClicks = (toClick) => {//запрет клика, true - запрещены
        toClick ? this.setState({preventClicks: true}) : this.setState({preventClicks: false}) 
    }

    render (){
        var prod=this.state.products;
        var prods=[];
        let prodForEdit, nextFreeId = null;

        if (prod.length>0) {
            prod.forEach((element, index) => {
                prods.push(
                    <Product 
                        name={element.name}
                        price={element.price}
                        qual={element.qual}
                        image={element.image}
                        name={element.name}
                        code={element.code}
                        delete={this.deleteProd}    
                        select={this.selected}
                        selectedCode={this.state.selectedCode}
                        edit={this.editCard}
                        editCode={this.state.editCode}
                        preventClicks={this.state.preventClicks}
                        disDelBtn={this.state.editCard}
                        key={index}
                    />
                );
                if (element.code==this.state.editCode){//для редактирования товара, чтобы сохранить инпут в state
                    prodForEdit=element;
                }
                
            });
            nextFreeId=prods.length+1;
        } else {
            prods=!Boolean(prods);
        }

        return (
            <Fragment>
                <table>
                    <caption>Список товаров магазина {this.props.name}</caption>
                    <thead>
                        <tr className='Ishop'>
                            <td>Название</td>
                            <td>Цена</td>
                            <td>Остаток</td>
                            <td>Изображение</td>
                            <td>Редактировать</td>
                            <td>Удалить</td>
                        </tr>
                    </thead>
                    <tbody>{prods || prod}</tbody>
                </table>
                <button 
                    onClick={this.cbAddNewCard}
                    value={this.state.prodCard}
                    disabled={this.state.addCard || this.state.editCard}
                >
                    Новый продукт
                </button>
                {
                    (this.state.prodCard) &&
                    <Prodinfo 
                        selectedCode={this.state.selectedCode}
                        products={this.state.products}
                    />
                }
                {
                    (this.state.editCard) &&
                    <Editprod 
                        editCode={this.state.editCode}
                        products={prodForEdit}
                        changeData={this.changeProd}
                        remove={this.removeCard}
                        preventClicks={this.preventClicks}
                    />
                }
                {
                    (this.state.addCard) &&
                    <Addprod 
                        preventClicks={this.preventClicks}
                        addData={this.addProd}
                        nextFreeId={nextFreeId}
                        remove={this.removeCard}
                    />
                }
            </Fragment>
        )
    }
};

export default Ishop;
