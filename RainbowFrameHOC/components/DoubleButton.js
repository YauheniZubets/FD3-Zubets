import React, { Fragment } from 'react';

class DoubleButton extends React.Component {

    cbPressed = (num) => {
        alert(num.target.value);
    }
    
    render () {
        return (
            <Fragment>
                <input type='button' onClick={this.cbPressed} value={this.props.caption1} />
                 {this.props.children} 
                <input type='button' onClick={this.cbPressed} value={this.props.caption2}/>
            </Fragment>
        )
    }
};

export default DoubleButton;