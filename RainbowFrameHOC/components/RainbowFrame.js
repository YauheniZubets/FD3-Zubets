import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import DoubleButton from './DoubleButton';
import {withRainbowFrame} from './withRainbowFrame';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render () {

        let FramedDoubleButton=withRainbowFrame(this.props.colors)(DoubleButton);
        
        return (
            <Fragment>
                 <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>
                 <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) } >вышел, был сильный</FramedDoubleButton>
            </Fragment>
        )
    }
};

export default RainbowFrame;