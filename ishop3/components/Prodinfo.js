import React from 'react';

import './Prodinfo.css';

class Prodinfo extends React.Component {

    prodImage = (url, name) => {
        return <img src={url} alt={name} className='Image' />    
    }

    render(){
        const selectedProduct=this.props.products.map((item, index)=>{
            if (item.code==this.props.selectedCode){
                return (
                    <div className='Prodinfo Card' key={index}>
                        <div className='Prodinfo Name'>{item.name}</div>
                        <div className='Prodinfo Descr'>
                            <div>{item.price} BYN</div>
                            <div>{item.qual} шт.</div>
                            <div>{this.prodImage(item.image, item.name)}</div>
                        </div>
                    </div>
                )
            } 
        })
        return selectedProduct
    }
}

export default Prodinfo;