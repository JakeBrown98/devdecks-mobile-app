import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import theme from '../theme';

const propTypes = {
    family: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const DeckIcon = ({ family, name }) => {
    const iconProps = { 
        name,
        size: theme.unit * 9,
        color: theme.palette.white,
    };

    switch (family) {
        case 'FontAwesome5':
            return <FontAwesome5 {...iconProps} />;
        case 'Entypo':
            return <Entypo {...iconProps} />;
        default:
            // Do nothing.
    }
};

DeckIcon.propTypes = propTypes;

export default DeckIcon;
