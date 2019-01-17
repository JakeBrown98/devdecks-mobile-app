import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/AntDesign';

const propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

const IconButton = ({ icon, text, onPress, ...props }) => (
    <Icon.Button 
        name={icon}
        onPress={onPress}
        {...props}
    >
        { text }
    </Icon.Button>
);

IconButton.propTypes = propTypes;

export default IconButton;
