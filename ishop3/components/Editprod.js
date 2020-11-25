import React from 'react';
import './Editprod.css';

class Editprod extends React.Component {

    state = {
        nameVal: this.props.products.name,
        priceVal: this.props.products.price,
        imageVal: this.props.products.image,
        quanVal: this.props.products.qual,
        nameErr: false,
        priceErr: false,
        imageErr: false,
        quanErr: false

    }

    cbNameInput = (EO) => {
        if (EO.target.defaultValue!==EO.target.value){
            this.props.preventClicks(true);
        }
        if(EO.target.value==''){
            this.setState({nameErr: true})
        } else {
            this.setState({nameVal: EO.target.value, nameErr: false});
        }
    }

    cbPriceInput = (EO) => {
        if (EO.target.defaultValue!==EO.target.value){
            this.props.preventClicks(true);
        }
        if(EO.target.value==''){
            this.setState({priceErr: true})
        } else {
            this.setState({priceVal: EO.target.value, priceErr: false});
        }
    }

    cbImageInput = (EO) => {
        if (EO.target.defaultValue!==EO.target.value){
            this.props.preventClicks(true);
        }
        if(EO.target.value==''){
            this.setState({imageErr: true})
        } else {
            this.setState({imageVal: EO.target.value, imageErr: false});
        }
    }

    cbQuanInput = (EO) => {
        if (EO.target.defaultValue!==EO.target.value){
            this.props.preventClicks(true);
        }
        if(EO.target.value==''){
            this.setState({quanErr: true})
        } else {
            this.setState({quanVal: EO.target.value, quanErr: false});
        }
    }

    cbChangeData = () => {
        this.props.preventClicks(false);
        this.props.changeData(this.state.nameVal, this.state.priceVal, this.state.imageVal, this.state.quanVal, this.props.editCode);
        this.props.remove();
    }

    cbRemoveCard = () => {
        this.props.preventClicks(false);
        this.props.remove();
    }

    render () {
        return (
            <div className='Addprod Add'>
                {
                this.state.addMode 
                ? <div className='Addprod Name'>Добавить новый продукт</div>
                : <div className='Addprod Name'>Редактировать продукт</div>
                }
                <div>
                    <div>ID: {this.props.products.code}</div>
                    <div>
                        Name: 
                        <input
                            defaultValue={this.state.addMode ? '' : this.state.nameVal} 
                            onChange={this.cbNameInput}
                        />
                        {
                            (this.state.nameErr) &&
                            <span className='Addprod Notation'>Пожалуйста, заполните поле. Значение должно быть строкой.</span>
                        }
                    </div>
                    <div>
                        Price: 
                        <input 
                            defaultValue={this.state.priceVal} 
                            onChange={this.cbPriceInput}
                        />
                        {
                            (this.state.priceErr) &&
                            <span className='Addprod Notation'>Пожалуйста, заполните поле. Значение должно быть любым числом больше, чем 0.</span>
                        }
                    </div>
                    <div>
                        Image: 
                        <input 
                            defaultValue={this.state.imageVal} 
                            onChange={this.cbImageInput}
                        />
                        {
                            (this.state.imageErr) &&
                            <span className='Addprod Notation'>Пожалуйста, заполните поле. Значение должно быть правильным URL адресом.</span>
                        }
                    </div>
                    <div>
                        Quantity: 
                        <input 
                            defaultValue={this.state.quanVal} 
                            onChange={this.cbQuanInput}
                        />
                        {
                            (this.state.quanErr) &&
                            <span className='Addprod Notation'>Пожалуйста, заполните поле. Значение должно быть положительным целым числом.</span>
                        }
                    </div>
                </div>
                <div>
                    <button 
                        disabled={this.state.nameErr || this.state.priceErr || this.state.imageErr || this.state.quanErr}
                        onClick={this.cbChangeData}    
                    >
                        Сохранить
                    </button>
                    <button onClick={this.cbRemoveCard}>Отменить</button>
                </div>
            </div>
        )
    }
};

export default Editprod;