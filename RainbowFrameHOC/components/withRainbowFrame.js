import React from 'react';

function withRainbowFrame (colors) {
    return function (Component) {
        return props => {
            
            let res=<Component {...props} />;
            colors.forEach(item=>{
                res=<div style={{border: 'solid '+ item}}>{res}</div>
            })
            return res;
        }
    };
};

export {withRainbowFrame};