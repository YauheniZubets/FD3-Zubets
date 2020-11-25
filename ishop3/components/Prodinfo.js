import React from 'react';

import './Prodinfo.css';

class Prodinfo extends React.Component {

    prodImage = (url, name) => {
        return <img src={url} alt={name} className='Image' />    
    }

    render(){
            
        return (
            <div className='Prodinfo Card'>
                <div className='Prodinfo Name'>{this.props.product.name}</div>
                <div className='Prodinfo Descr'>
                    <div>{this.props.product.price} BYN</div>
                    <div>{this.props.product.qual} шт.</div>
                    <div>{this.prodImage(this.props.product.image, this.props.product.name)}</div>
                </div>
            </div>
        )
        
    }
}

export default Prodinfo;