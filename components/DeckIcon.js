import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import theme from '../theme';


const propTypes = {
    icon: PropTypes.object.isRequired,
};

const DeckIcon = ({ icon }) => {
    const iconProps = {
        name: icon.name,
        size: theme.unit * 14,
        color: theme.palette.white,
    };

    switch (icon.family) {
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons {...iconProps} />;
        case 'Entypo':
            return <Entypo {...iconProps} />;
        default:
            return null;
    }
};

DeckIcon.propTypes = propTypes;

export default DeckIcon;
