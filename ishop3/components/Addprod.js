import React from 'react';
import './Editprod.css';

class Addprod extends React.Component {

    state = {
        nameVal: '',
        priceVal: '',
        imageVal: '',
        quanVal: '',
        nameErr: true,
        priceErr: true,
        imageErr: true,
        quanErr: true
    }

    cbNameInput = (EO) => {
        this.props.preventClicks(true);
        this.setState({nameVal: EO.target.value, nameErr: false});
        if(EO.target.value==''){
            this.setState({nameErr: true})
        }
    }

    cbPriceInput = (EO) => {
        this.props.preventClicks(true);
        this.setState({priceVal: EO.target.value, priceErr: false});
        if(EO.target.value==''){
            this.setState({priceErr: true})
        }
    }

    cbImageInput = (EO) => {
        this.props.preventClicks(true);
        this.setState({imageVal: EO.target.value, imageErr: false});
        if(EO.target.value==''){
            this.setState({imageErr: true})
        } 
    }

    cbQuanInput = (EO) => {
        this.props.preventClicks(true);
        this.setState({quanVal: EO.target.value, quanErr: false});
        if(EO.target.value==''){
            this.setState({quanErr: true})
        }
    }

    cbAddData = () => {
        this.props.preventClicks(false);
        this.props.addData(this.state.nameVal, this.state.priceVal, this.state.imageVal, this.state.quanVal, this.props.nextFreeId);
        this.props.remove();
    }

    cbRemoveCard = () => {
        this.props.preventClicks(false);
        this.props.remove();
    }

    render () {
        return (
            <div className='Addprod Add'>
                <div className='Addprod Name'>Добавить новый продукт</div>
                <div>
                    <div>ID: {this.props.nextFreeId}</div>
                    <div>
                        Name: 
                        <input
                            value={this.state.nameVal} 
                            onChange={this.cbNameInput}
                        />
                        {
                            (this.state.nameErr || this.state.nameVal=='') &&
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
                            (this.state.priceErr || this.state.priceVal=='') &&
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
                            (this.state.imageErr || this.state.imageVal=='') &&
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
                            (this.state.quanErr || this.state.quanVal=='') &&
                            <span className='Addprod Notation'>Пожалуйста, заполните поле. Значение должно быть положительным целым числом.</span>
                        }
                    </div>
                </div>
                <div>
                    <button 
                        disabled={this.state.nameErr || this.state.priceErr || this.state.imageErr || this.state.quanErr}
                        onClick={this.cbAddData}    
                    >
                        Сохранить
                    </button>
                    <button onClick={this.cbRemoveCard}>Отменить</button>
                </div>
            </div>
        )
    }
}

export default Addprod;