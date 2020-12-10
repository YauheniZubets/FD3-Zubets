import React from 'react';

function withRainbowFrame (colors) {
    return function (Component) {
        
        return props => {
            
            let res=<Component {...props} />;
            colors.forEach(item=>{
                console.log(res);
                res=<div style={{border: 'solid '+ item}}>{res}</div>
            })
            return res;
            
            /*
            попытки решить рекурсией((
            if (colors.length==0) {
                return <Component {...props} />
            } else {
                let lastColors=colors.slice(1, colors.length)
                
                return <div style={{border:'solid ' + colors[0]}}>
                           {withRainbowFrame(lastColors)(<Component {...props} />)}
                        </div>
            }
            ***рекурсивно не запускается (23строка) функция withRainbowFrame
            */
        }
    };
};

export {withRainbowFrame};