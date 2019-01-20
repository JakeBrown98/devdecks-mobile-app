import React from 'react';
import { Svg } from 'expo';
import theme from '../../theme';

const IconMenu = () => (
    <Svg height={24} width={24}>
        <Svg.Line
            x1="0"
            y1="0"
            x2="100"
            y2="0"
            height={2}
            stroke={theme.palette.black}
            strokeWidth="2"
        />
        <Svg.Line
            x1="0"
            y1="6"
            x2="100"
            y2="6"
            height={2}
            stroke={theme.palette.black}
            strokeWidth="2"
        />
        <Svg.Line
            x1="0"
            y1="12"
            x2="100"
            y2="12"
            height={2}
            stroke={theme.palette.black}
            strokeWidth="2"
        />
    </Svg>
);

export default IconMenu;
