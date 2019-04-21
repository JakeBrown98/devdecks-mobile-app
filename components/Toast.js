import React from 'react';
import { ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';


const propTypes = {
    message: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
};

const defaultProps = {
    visible: false,
};

const Toast = ({ message, visible }) => {
    if (visible) {
        ToastAndroid.show(message, ToastAndroid.SHORT);

        return null;
    }

    return null;
};

Toast.defaultProps = defaultProps;
Toast.propTypes = propTypes;

export default Toast;
