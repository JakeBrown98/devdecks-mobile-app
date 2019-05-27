import React from 'react';
import { ToastAndroid } from 'react-native';
import PropTypes from 'prop-types';


const propTypes = {
    message: PropTypes.oneOfType([
        PropTypes.string,
        null
    ]),
};

const defaultProps = {
    message: null,
};

const Toast = ({ message }) => {
    if (message) {
        ToastAndroid.show(message, ToastAndroid.SHORT);

        return null;
    }

    return null;
};

Toast.defaultProps = defaultProps;
Toast.propTypes = propTypes;

export default Toast;
