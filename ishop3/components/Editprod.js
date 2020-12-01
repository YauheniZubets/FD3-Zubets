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

    // componentDidUpdate(oldProps){
    //     if (oldProps.products.name!==this.props.products.name){
    //         this.setState({
    //             nameVal: this.props.products.name,
    //             priceVal: this.props.products.price,
    //             imageVal: this.props.products.image,
    //             quanVal: this.props.products.qual
    //         });
    //     }
    // }

    cbNameInput = (EO) => {
        this.setState({nameVal: EO.target.value, nameErr: false});
        if (EO.target.defaultValue!==EO.target.value){
            this.props.preventClicks(true);
        }
        if(EO.target.value==''){
            this.setState({nameErr: true})
        }
    }

    cbPriceInput = (EO) => {
        this.setState({priceVal: EO.target.value, priceErr: false});
        if (EO.target.defaultValue!==EO.target.value){
            this.props.preventClicks(true);
        }
        if(EO.target.value==''){
            this.setState({priceErr: true})
        } 
    }

    cbImageInput = (EO) => {
        this.setState({imageVal: EO.target.value, imageErr: false});
        if (EO.target.defaultValue!==EO.target.value){
            this.props.preventClicks(true);
        }
        if(EO.target.value==''){
            this.setState({imageErr: true})
        }
    }

    cbQuanInput = (EO) => {
        this.setState({quanVal: EO.target.value, quanErr: false});
        if (EO.target.defaultValue!==EO.target.value){
            this.props.preventClicks(true);
        }
        if(EO.target.value==''){
            this.setState({quanErr: true})
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
                <div className='Addprod Name'>Редактировать продукт</div>
                <div>
                    <div>ID: {this.props.products.code}</div>
                    <div>
                        Name: 
                        <input 
                            value={this.state.nameVal}
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
                            value={this.state.priceVal} 
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
                            value={this.state.imageVal} 
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
                            value={this.state.quanVal} 
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