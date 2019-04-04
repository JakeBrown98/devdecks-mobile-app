import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const propTypes = {
    children: PropTypes.any.isRequired,
    variant: PropTypes.string,
    style: PropTypes.object,
};

const defaultProps = {
    variant: 'regular',
};


const styles = StyleSheet.create({
    title1: {
        fontFamily: theme.font.bold,
        color: theme.palette.black,
        fontSize: 40,
        lineHeight: 40,
    },
    title2: {
        fontFamily: theme.font.bold,
        color: theme.palette.black,
        fontSize: 32,
        lineHeight: 32,
    },
    large: {
        fontFamily: theme.font.regular,
        color: theme.palette.black,
        fontSize: 24,
        lineHeight: 30,
    },
    regular: {
        fontFamily: theme.font.regular,
        color: theme.palette.white,
        fontSize: 19,
        lineHeight: 24,
    },
    small: {
        fontFamily: theme.font.regular,
        color: theme.palette.black,
        fontSize: 17,
    },
    tiny: {
        fontFamily: theme.font.bold,
        color: theme.palette.secondary,
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

Typography.defaultProps = defaultProps;
Typography.propTypes = propTypes;

export default Typography;
