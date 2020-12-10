import React, { Fragment } from 'react';

class DoubleButton extends React.Component {
    
    render () {
        return (
            <Fragment>
                <input type='button' onClick={this.props.cbPressed} value={this.props.caption1} />
                 {this.props.children} 
                <input type='button' onClick={this.props.cbPressed} value={this.props.caption2}/>
            </Fragment>
            
        )
        
    }
};

export default DoubleButton;