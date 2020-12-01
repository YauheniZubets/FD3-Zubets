import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

    static propTypes={
        text:PropTypes.string.isRequired
    }
    
    processStr = (string) => {
        let changedString=string.replace(/<br\s*\/?>/g, ' <br> ');
        let arrowFromString=changedString.split(' ');
        let result=arrowFromString.map((item, index)=>{
            return item=='<br>' ? item=<br key={index}/> : item;
        });
        return result;
    }

    render () {
        return <div className='BR2JSX'>{this.processStr(this.props.text)}</div>
    }
};

export default BR2JSX;