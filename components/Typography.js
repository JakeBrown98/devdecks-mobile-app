import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    style: PropTypes.object,
};

const defaultProps = {
    variant: 'regular',
};

const styles = StyleSheet.create({
    title1: {
        fontFamily: 'acumin-bold',
        color: theme.palette.black,
        fontSize: 44,
    },
    title2: {
        fontFamily: 'acumin-bold',
        color: theme.palette.black,
        fontSize: 32,
    },
    large: {
        fontFamily: 'acumin',
        color: theme.palette.black,
        fontSize: 24,
    },
    regular: {
        fontFamily: 'acumin',
        color: theme.palette.black,
        fontSize: 19,
        lineHeight: 24,
    },
    small: {
        fontFamily: 'acumin',
        color: theme.palette.black,
        fontSize: 17,
    },
    tiny: {
        fontFamily: 'acumin-bold',
        color: theme.palette.grey,
        fontSize: 14,
    },
});

const Typography = ({ variant, children, style }) => {
    return (
        <Text style={[styles[variant], style]}>
            { children }
        </Text>
    );
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
