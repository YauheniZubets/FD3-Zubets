import React from 'react';

import './Product.css';

class Product extends React.Component {

    prodImage= (url, name) =>{
        return <img src={url} alt={name} className='Image' />    
    }

    cbDelete = () => {
        if (!this.props.preventClicks){
            if (confirm('Действительно удалить?')){
                this.props.delete(this.props.code);
            }
        }
    }

    cbEdit = () => {
        if (!this.props.preventClicks){
            this.props.edit(this.props.code);
        }
    }

    cbSelect = (EO) => {
        if (!this.props.preventClicks){
            if (EO.target.value!=='Delete' && EO.target.value!=='Edit') {
                this.props.select(this.props.code);
            }
        }   
    }

    render() {
        return (
            <tr className={`Product ${this.props.selectedCode==this.props.code ? 'Selected' : ''}`} 
                onClick={this.cbSelect}>
                    <td>{this.props.name}</td>
                    <td>{`${this.props.price} BYN`}</td>
                    <td>{`${this.props.qual} шт.`}</td>
                    <td>{this.prodImage(this.props.image, this.props.name)}</td>
                    <td>
                        <button value= 'Edit' onClick={this.cbEdit}>Редактировать</button>
                    </td>
                    <td>
                        <button 
                            value= 'Delete' 
                            onClick={this.cbDelete}
                            disabled={this.props.disDelBtn}
                        >
                            Удалить
                        </button>
                    </td>
            </tr>
        )
    }
};

export default Product;