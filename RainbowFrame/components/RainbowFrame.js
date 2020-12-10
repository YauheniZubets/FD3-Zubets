import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    res=null;
    count=0;
    
    borders = (colors, count) => {
        return count < colors.length - 1
                ?   <div style={{padding: '5px', border: 'solid 5px ' + colors[count]}}>
                        {this.borders(colors, count+1)}
                    </div>
                :   <div style={{textAlign: 'center', lineHeight:'50px', height: '50px', border: 'solid 5px ' + colors[count]}} >
                        {!colors[count+1] && this.props.children}
                    </div>
    }
    
    componentWillMount(){
        this.res=this.borders(this.props.colors, this.count);
    }

    render(){
        /*
        let code=this.props.children;
        this.props.colors.forEach((item, index)=>{
            console.log(item);
            code=<div style={{border:'solid ' + item}} key={index}>{code}</div>
        }) 
        способ через цикл
        */
        return ( 
            <Fragment>
                {this.res}
            </Fragment>
        )
    }
};

export default RainbowFrame;